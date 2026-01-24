import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request?.json?.() ?? {};
    const { name, email, subject, message } = data ?? {};

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex?.test?.(email ?? '')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: name ?? '',
        email: email ?? '',
        subject: subject ?? 'General Inquiry',
        message: message ?? '',
        status: 'new',
      },
    });

    // Send email notification to both recipients
    const htmlBody = `
      <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; padding: 40px; border-radius: 8px; border: 1px solid #333;">
        <div style="margin-bottom: 30px;">
          <h1 style="color: #fff; margin: 0; font-size: 24px; font-weight: 400;">Electric Locusts</h1>
          <p style="color: #888; margin-top: 5px; font-size: 14px;">New Contact Form Submission</p>
        </div>

        <div style="background: #141414; border: 1px solid #333; border-radius: 4px; padding: 24px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #333;">
                <span style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">From</span><br>
                <span style="color: #fff; font-size: 16px;">${name ?? ''}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #333;">
                <span style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Email</span><br>
                <a href="mailto:${email ?? ''}" style="color: #bbb; font-size: 16px; text-decoration: none;">${email ?? ''}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #333;">
                <span style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Subject</span><br>
                <span style="color: #fff; font-size: 16px;">${subject ?? 'Not specified'}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0;">
                <span style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Message</span><br>
                <div style="color: #ccc; font-size: 15px; line-height: 1.6; margin-top: 8px; white-space: pre-wrap;">${message ?? ''}</div>
              </td>
            </tr>
          </table>
        </div>

        <div style="text-align: center; color: #555; font-size: 12px;">
          Submitted on ${new Date()?.toLocaleString?.('en-US', { dateStyle: 'full', timeStyle: 'short' }) ?? ''}
        </div>
      </div>
    `;

    const appUrl = process.env.NEXTAUTH_URL ?? '';
    let appName = 'Electric Locusts';
    try {
      if (appUrl) {
        appName = new URL(appUrl)?.hostname?.split?.('.')?.[0] ?? 'Electric Locusts';
      }
    } catch {
      // Keep default
    }

    // Send to primary recipient: mattguerra@electriclocusts.com
    try {
      const primaryResponse = await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY ?? '',
          app_id: process.env.WEB_APP_ID ?? '',
          notification_id: process.env.NOTIF_ID_CONTACT_FORM_SUBMISSION ?? '',
          subject: `New Contact: ${subject ?? 'Website Inquiry'} from ${name ?? 'Visitor'}`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'mattguerra@electriclocusts.com',
          sender_email: appUrl ? `noreply@${new URL(appUrl)?.hostname ?? 'electriclocusts.com'}` : 'noreply@electriclocusts.com',
          sender_alias: appName,
        }),
      });
      const primaryResult = await primaryResponse?.json?.() ?? {};
      if (!primaryResult?.success && !primaryResult?.notification_disabled) {
        console.error('Primary email failed:', primaryResult?.message ?? 'Unknown error');
      }
    } catch (err) {
      console.error('Primary email error:', err);
    }

    // Send to CC recipient: matthewrguerra@gmail.com
    try {
      const ccResponse = await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY ?? '',
          app_id: process.env.WEB_APP_ID ?? '',
          notification_id: process.env.NOTIF_ID_CONTACT_FORM_SUBMISSION ?? '',
          subject: `New Contact: ${subject ?? 'Website Inquiry'} from ${name ?? 'Visitor'}`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'matthewrguerra@gmail.com',
          sender_email: appUrl ? `noreply@${new URL(appUrl)?.hostname ?? 'electriclocusts.com'}` : 'noreply@electriclocusts.com',
          sender_alias: appName,
        }),
      });
      const ccResult = await ccResponse?.json?.() ?? {};
      if (!ccResult?.success && !ccResult?.notification_disabled) {
        console.error('CC email failed:', ccResult?.message ?? 'Unknown error');
      }
    } catch (err) {
      console.error('CC email error:', err);
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      id: submission?.id ?? '',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
