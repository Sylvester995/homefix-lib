# HomeFix Lib (Next.js + Tailwind)

WhatsApp-first home services site for Monrovia, with dark mode and contact page.

## Tech
- Next.js 14 (App Router) + React 18
- Tailwind CSS (brand color: #053252)
- next-themes (light/dark)
- WhatsApp click-to-chat with prefilled messages

## Quick start
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Environment
Create `.env.local` (already included here for local dev):
```
NEXT_PUBLIC_WA_NUMBER=905338557240
NEXT_PUBLIC_ADDRESS=Monrovia, Liberia
NEXT_PUBLIC_IG_URL=https://instagram.com/
NEXT_PUBLIC_FB_URL=https://facebook.com/
```

## Deploy
- **Vercel**: `npm i -g vercel && vercel` (add env vars in dashboard)
- **Netlify**: build command `next build` and publish `.next` via adapter or use Vercel for easiest routing.

## GitHub
```bash
git init
git add .
git commit -m "Initial commit: HomeFix Lib Next.js app"
# Option A: GitHub CLI
# gh repo create homefix-lib --public --source=. --remote=origin --push
# Option B: manual remote
git branch -M main
git remote add origin https://github.com/<your-username>/homefix-lib.git
git push -u origin main
```
