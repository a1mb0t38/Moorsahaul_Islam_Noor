# Resend Email Integration Setup Guide

Your portfolio contact form is fully integrated with [Resend](https://resend.com) to deliver visitor messages directly to your inbox at `mursahaulnur17@gmail.com`.

---

## 1. Quick Start / Environment Setup

1. **API Key Configured**:
   Your Resend API key has been added to `.env.local`:
   ```env
   RESEND_API_KEY=xxx_xxx_xxx
   ```

2. **Restart Development Server**:
   Whenever environment variables in `.env.local` are updated or loaded for the first time, restart your dev server:
   ```bash
   npm run dev
   ```

---

## 2. Production & Custom Domain Setup (Recommended)

By default, Resend uses its testing address (`onboarding@resend.dev`) for outgoing messages. Resend allows test emails to be delivered to your registered account email (`mursahaulnur17@gmail.com`).

To send emails from your own domain (e.g. `contact@mynoordomain.com`) in production:

1. **Log into Resend**:
   Go to [Resend Dashboard](https://resend.com/domains).

2. **Add Your Domain**:
   - Click **Add Domain** (e.g. `mynoordomain.com`).
   - Add the generated DNS records (TXT, MX, CNAME) to your domain registrar (Cloudflare, Namecheap, GoDaddy, Vercel, etc.).
   - Click **Verify Domain**.

3. **Update Route Handler (`src/app/api/contact/route.ts`)**:
   Change the `from` property inside `resend.emails.send(...)`:
   ```typescript
   // Before (Testing Default):
   from: "Portfolio Contact <onboarding@resend.dev>"

   // After (Verified Custom Domain):
   from: "Portfolio Contact <contact@mynoordomain.com>"
   ```

---

## 3. Features Included in this Integration

- **Server-Side Validation**: Sanitizes name, email format, and caps messages at 5000 characters.
- **Honeypot Anti-Spam Protection**: Visually hidden off-screen field (`company`) that tricks automated spam bots without impacting user experience.
- **Rate Limiting**: Protects against spam attacks by limiting IP addresses to 3 submissions per 10-minute window.
- **Direct Reply-To**: When you receive an email notification in Gmail, clicking **Reply** responds directly to the visitor's email address.
