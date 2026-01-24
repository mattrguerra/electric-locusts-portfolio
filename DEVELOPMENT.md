# Electric Locusts Website - Development Documentation

## Overview

This is Matthew Guerra's artist portfolio website built with Next.js 16, Prisma ORM, and deployed on Vercel with Neon Postgres.

**Live URL:** https://electric-locusts-portfolio.vercel.app (or custom domain)
**GitHub:** https://github.com/mattrguerra/electric-locusts-portfolio

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** Neon Postgres (serverless)
- **ORM:** Prisma 6.7.0
- **Styling:** Tailwind CSS with custom "Dissolution" design system
- **Animations:** Framer Motion
- **Deployment:** Vercel

---

## Project Structure

```
electric_locusts_website/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── portfolio/     # GET /api/portfolio - returns portfolio items
│   │   ├── contact/       # POST /api/contact - contact form submissions
│   │   └── blog/          # GET /api/blog - blog posts (currently empty)
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio gallery page
│   └── layout.tsx         # Root layout with SEO metadata
├── components/
│   ├── home/              # Homepage components (hero, featured-work, etc.)
│   ├── portfolio/         # Portfolio gallery component
│   ├── about/             # About page component
│   └── contact/           # Contact form component
├── public/
│   └── portfolio/         # Portfolio images organized by series
│       ├── self_annihilation/
│       ├── what_we_were_left_with/
│       ├── exposure/
│       ├── people_saved/
│       ├── masculinity/
│       └── mixed/
├── prisma/
│   └── schema.prisma      # Database schema
├── scripts/
│   └── seed.ts            # Database seed script with all portfolio items
├── art-assets/            # Source artwork (NOT deployed, just for reference)
└── content/               # Copywriting content files (reference only)
```

---

## Art Series

The portfolio contains 6 series with 67 total items:

### 1. Self Annihilation (20 images)
- **Theme:** Identity, mental illness, addiction
- **Medium:** Scratched/burned medium format film negatives
- **Files:** `/portfolio/self_annihilation/1.jpg`, `3.jpg`, `5.jpg`... (odd numbers)

### 2. What We Were Left With (12 images in DB, 33 available)
- **Theme:** Documentary photography of addiction and recovery
- **Medium:** Black and white documentary photography
- **Files:** `/portfolio/what_we_were_left_with/1.jpg`, `2.jpg`, etc.
- **Note:** Renamed from "My Gritty Dark Nightmare"

### 3. Exposure (9 images)
- **Theme:** Depression, vulnerability
- **Medium:** Photography
- **Files:** `/portfolio/exposure/_MG_8279.jpg`, `_MG_8281.jpg`, etc.

### 4. People Who Saved My Life (5 images)
- **Theme:** Gratitude, connection, support networks
- **Medium:** Cyanotype prints
- **Files:** `/portfolio/people_saved/Cyanotype0001.jpg`, `Cyanotype0003.jpg`, etc. (odd numbers)

### 5. Deconstructing Masculinity (15 images in DB, 27 available)
- **Theme:** Gender, identity, challenging masculinity norms
- **Medium:** Portrait photography
- **Files:** `/portfolio/masculinity/1.jpg`, `2.jpg`, etc.

### 6. Mixed (6 images)
- **Theme:** Bipolar disorder, mixed episodes
- **Medium:** Mixed media
- **Files:** `/portfolio/mixed/1.jpg`, `2.jpg`, etc.

---

## Database Schema

```prisma
model PortfolioItem {
  id          String   @id @default(cuid())
  title       String
  description String   @db.Text
  category    String
  imageUrl    String
  tags        String[]
  featured    Boolean  @default(false)
  order       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

## Environment Variables

Required in `.env` and Vercel:

```
DATABASE_URL=postgresql://...  # Neon Postgres connection string
NEXTAUTH_URL=https://electriclocusts.com  # Production URL
```

Legacy (from Abacus, may not be needed):
```
AWS_PROFILE=hosted_storage
AWS_REGION=us-west-2
AWS_BUCKET_NAME=...
AWS_FOLDER_PREFIX=...
ABACUSAI_API_KEY=...
WEB_APP_ID=...
NOTIF_ID_CONTACT_FORM_SUBMISSION=...
```

---

## Common Tasks

### Re-seed the database
```bash
npx tsx scripts/seed.ts
```

### Add new portfolio items
1. Add images to `/public/portfolio/[series]/`
2. Update `/scripts/seed.ts` with new entries
3. Run seed: `npx tsx scripts/seed.ts`
4. Commit and push

### Run locally
```bash
npm run dev
```

### Deploy
```bash
git push origin main  # Auto-deploys via Vercel
```

### Check database
```bash
npx prisma studio  # Opens browser GUI
```

---

## Design System: "Dissolution"

The site uses a custom dark design system inspired by Apple's liquid glass, Webflow's fluid design, and Matt's art style.

### Colors (in tailwind.config.ts)
- `void`: #030304 (background)
- `cellular-purple`: #6b4a8b
- `cellular-blue`: #4a7cb8
- `cellular-cyan`: #5aa8b8
- `bruise-deep`: #4a2a5a
- `flesh-pale`: #d4a5a5

### Key CSS Classes
- `.glass-card`: Frosted glass card effect
- `.btn-dissolution`: Primary button style
- `.gradient-text`: Purple-to-cyan text gradient
- `.organic-texture`: Subtle noise background
- `.cellular-overlay`: Bubble texture overlay
- `.animate-cellular-breathe`: Slow breathing animation

---

## Known Issues / TODOs

1. **Blog section:** Empty - no blog posts seeded
2. **Services section:** Empty - no services seeded
3. **Contact form:** Requires ABACUSAI_API_KEY for notifications (may not work)
4. **Image optimization:** Disabled in next.config.js

---

## File Naming Conventions by Series

| Series | File Pattern | Example |
|--------|--------------|---------|
| Self Annihilation | Odd numbers | `1.jpg`, `3.jpg`, `5.jpg` |
| What We Were Left With | Sequential | `1.jpg`, `2.jpg`, `3.jpg` |
| Exposure | Camera format | `_MG_8279.jpg` |
| People Who Saved My Life | Cyanotype + odd | `Cyanotype0001.jpg` |
| Deconstructing Masculinity | Sequential | `1.jpg`, `2.jpg` |
| Mixed | Sequential | `1.jpg`, `2.jpg` |

---

## Copying Artwork from art-assets

The `art-assets/` folder contains the source artwork. To copy to public:

```bash
# Self Annihilation
cp art-assets/self_annihilation/artwork/*.jpg public/portfolio/self_annihilation/

# What We Were Left With (from my_gritty_dark_nightmare)
cp art-assets/my_gritty_dark_nightmare/artwork/*.jpg public/portfolio/what_we_were_left_with/

# Exposure
cp art-assets/exposure/artwork/*.jpg public/portfolio/exposure/

# People Who Saved My Life
cp art-assets/people_who_saved_my_life/artwork/*.jpg public/portfolio/people_saved/

# Deconstructing Masculinity
cp art-assets/deconstructing_masculinity/artwork/*.jpg public/portfolio/masculinity/

# Mixed
cp art-assets/mixed/artwork/*.jpg public/portfolio/mixed/
```

---

## Artist Context

**Matthew Guerra** is an Austin-based visual artist exploring identity, mental health, and vulnerability. He lives with bipolar disorder, anxiety, OCD, and ADHD. His work advocates for mental health awareness.

Key themes across all work:
- Identity and the fragmented self
- Mental illness (bipolar, depression, anxiety)
- Addiction and recovery
- Vulnerability and emotional exposure
- Gratitude and human connection
- Challenging gender norms

The copywriting should always:
- Use first-person voice
- Be raw and authentic, not corporate
- Reference specific diagnoses when appropriate
- Emphasize mental health advocacy
- Connect personal experience to universal themes

---

## Contact

- **Email:** mattguerra@electriclocusts.com
- **Location:** Austin, Texas
- **Social:** @electriclocusts on Instagram, Facebook, Threads
