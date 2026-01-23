# Electric Locusts - Deployment Guide

## Deploying to Vercel (Free)

Vercel is the best free hosting option for Next.js applications, made by the creators of Next.js.

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
```bash
cd /path/to/electric_locusts_website
git init
git add .
git commit -m "Initial commit - redesigned portfolio"
```

2. **Push to GitHub**:
   - Create a new repository on GitHub (https://github.com/new)
   - Name it something like `electric-locusts-portfolio`
   - Keep it private or public (your choice)
   - Run these commands:
```bash
git remote add origin https://github.com/YOUR_USERNAME/electric-locusts-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Sign up for Vercel**:
   - Go to https://vercel.com/signup
   - Sign up with your GitHub account (easiest option)
   - This connects Vercel to your GitHub repositories

2. **Import Your Project**:
   - Click "Add New..." → "Project"
   - Select your `electric-locusts-portfolio` repository
   - Vercel will auto-detect it's a Next.js project

3. **Configure Build Settings** (usually auto-detected):
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Environment Variables** (if needed):
   - Check your `.env` file for any required variables
   - Add them in the "Environment Variables" section
   - Common ones might include:
     - `NEXT_PUBLIC_SITE_URL`
     - Any API keys for contact forms, analytics, etc.

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - You'll get a URL like: `https://electric-locusts-portfolio.vercel.app`

### Step 3: Connect Your Cloudflare Domain

You have two options for connecting electriclocusts.com:

#### Option A: Use Vercel DNS (Recommended - Simpler)

1. **In Vercel**:
   - Go to your project → Settings → Domains
   - Add `electriclocusts.com`
   - Add `www.electriclocusts.com`
   - Vercel will show you nameserver records

2. **In Cloudflare**:
   - This requires moving DNS to Vercel
   - Not recommended if you're using Cloudflare features

#### Option B: Keep Cloudflare DNS (Recommended)

1. **In Vercel**:
   - Go to Settings → Domains
   - Add `electriclocusts.com`
   - Vercel will show DNS records to add

2. **In Cloudflare**:
   - Go to your Cloudflare dashboard
   - Select `electriclocusts.com`
   - Go to DNS → Records
   - Add these records:

   **For root domain (electriclocusts.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   Proxy: DNS only (gray cloud)
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   Proxy: DNS only (gray cloud)
   ```

3. **Verify in Vercel**:
   - Go back to Vercel → Domains
   - Click "Verify" next to your domain
   - Should show as verified within a few minutes

4. **Enable SSL**:
   - In Cloudflare, go to SSL/TLS
   - Set to "Full" (not "Flexible")
   - This ensures proper HTTPS

### Step 4: Configure Automatic Deployments

Vercel automatically deploys on every push to `main`:

- **Production**: Pushes to `main` branch → https://electriclocusts.com
- **Preview**: Pushes to other branches → preview URLs
- **Pull Requests**: Get their own preview URLs

### Step 5: Optional Optimizations

#### Image Optimization
Your site uses Next.js Image component which auto-optimizes on Vercel. No setup needed!

#### Analytics (Free)
1. Go to your project → Analytics
2. Enable Vercel Analytics (free tier)
3. See real-time visitor data

#### Speed Insights (Free)
1. Go to your project → Speed Insights
2. Enable it for performance monitoring

## Common Issues & Solutions

### Build Fails
- Check the build logs in Vercel
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally first to test

### Domain Not Working
- DNS changes can take up to 48 hours (usually 10-30 minutes)
- Ensure Cloudflare proxy is OFF (gray cloud) for Vercel DNS records
- Check SSL is set to "Full" in Cloudflare

### Environment Variables
- If you have a `.env` file, add those variables in Vercel Settings
- Prefix public variables with `NEXT_PUBLIC_`
- Redeploy after adding new variables

### Images Not Loading
- Ensure images are in the `public` folder
- Check Image component `src` paths start with `/`
- Vercel automatically optimizes images

## Maintenance & Updates

### To Update Your Site:
```bash
# Make your changes locally
git add .
git commit -m "Update: description of changes"
git push

# Vercel automatically deploys within 2-3 minutes
```

### To Rollback:
- Go to Vercel → Deployments
- Find a previous successful deployment
- Click "⋯" → "Promote to Production"

## Performance Tips

1. **Enable Cloudflare Features** (after domain is connected):
   - Auto Minify: HTML, CSS, JS
   - Brotli Compression
   - HTTP/2 & HTTP/3

2. **Vercel Edge Network**:
   - Your site is automatically deployed to 30+ global locations
   - Users get the fastest server automatically

3. **Next.js Optimizations** (already configured):
   - Automatic code splitting
   - Image optimization
   - Font optimization
   - Lazy loading

## Cost Breakdown

- **Vercel Hobby Plan**: FREE
  - 100GB bandwidth/month
  - Unlimited sites
  - Automatic HTTPS
  - Global CDN
  - Perfect for personal portfolios

- **Cloudflare**: FREE
  - DNS management
  - DDoS protection
  - SSL certificate
  - CDN features

**Total Monthly Cost: $0**

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Cloudflare Docs**: https://developers.cloudflare.com/dns/

## Post-Deployment Checklist

- [ ] Site loads at electriclocusts.com
- [ ] SSL certificate shows (padlock in browser)
- [ ] All pages work (portfolio, about, contact, blog)
- [ ] Images load correctly
- [ ] Contact form works (if implemented)
- [ ] Mobile responsive design works
- [ ] Navigation works on all pages
- [ ] Social media links work
- [ ] Google Analytics connected (if using)
- [ ] Add to Google Search Console
- [ ] Test on multiple browsers
- [ ] Update social media with new URL

---

**Your site will be live at**: https://electriclocusts.com

The dark, heavy, glassomorphic design will really shine once deployed! 🚀
