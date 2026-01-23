# Quick Deploy Checklist

## 5-Minute Deployment to Vercel

### Prerequisites
- GitHub account
- Cloudflare account (you already have this for electriclocusts.com)

### Steps

#### 1. Push to GitHub (5 min)
```bash
git init
git add .
git commit -m "Redesigned portfolio site"
git remote add origin https://github.com/YOUR_USERNAME/electric-locusts-portfolio.git
git push -u origin main
```

#### 2. Deploy to Vercel (3 min)
1. Go to https://vercel.com/signup
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `electric-locusts-portfolio` repo
5. Click "Deploy" (auto-detects Next.js settings)
6. Wait ~2 minutes for build

**You now have a live preview URL!** 🎉

#### 3. Connect Your Domain (5 min)
1. **In Vercel**: Settings → Domains → Add `electriclocusts.com`
2. **In Cloudflare**: DNS → Add these records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   Proxy: OFF (gray cloud)
   ```
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   Proxy: OFF (gray cloud)
   ```
3. **In Cloudflare**: SSL/TLS → Set to "Full"
4. Wait 10-30 minutes for DNS propagation

**Done!** Your site is live at https://electriclocusts.com

---

## Future Updates

Just push to GitHub:
```bash
git add .
git commit -m "Update description"
git push
```
Vercel auto-deploys in 2-3 minutes.

---

## Important Notes

- **Cost**: $0 (Vercel free tier is perfect for portfolios)
- **SSL**: Automatic HTTPS certificate
- **CDN**: Global edge network included
- **Bandwidth**: 100GB/month free
- **Updates**: Push to GitHub = auto-deploy

## Cloudflare DNS Settings

**CRITICAL**: Turn Cloudflare proxy OFF (gray cloud) for Vercel DNS records, otherwise it won't work!

✅ Correct: Gray cloud (DNS only)
❌ Wrong: Orange cloud (Proxied)

---

See `DEPLOYMENT.md` for full detailed instructions.
