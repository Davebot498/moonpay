# Alchemy Pay Telegram Mini App

A Next.js-based Telegram Mini Web App that allows users to purchase Solana (SOL) non-custodially using Alchemy Pay integration.

## Features

✨ **Clean & Minimal UI** - Centered card layout optimized for mobile
🔐 **Non-Custodial** - SOL sent directly to user's wallet address
💳 **Alchemy Pay Integration** - Secure payment processing via redirect flow
📱 **Telegram Compatible** - Optimized for Telegram WebView
🌙 **Dark Mode** - Automatic dark mode support
⚡ **Next.js 14** - Built with App Router and TypeScript

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Integration**: Alchemy Pay On-Ramp
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+ and npm
- Alchemy Pay App ID ([Get one here](https://alchemypay.org/developers))
- Vercel account (for deployment)
- Telegram Bot (for Mini App integration)

## Installation

1. **Clone or navigate to the project**
   ```bash
   cd moonpay
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_ALCHEMY_PAY_APP_ID=your_app_id_here
   NEXT_PUBLIC_ALCHEMY_PAY_ENV=test
   ```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Production Setup

1. **Get Production App ID**: Obtain a production App ID from Alchemy Pay.
2. **Update Environment**:
   ```env
   NEXT_PUBLIC_ALCHEMY_PAY_ENV=production
   ```
3. **Deploy to Vercel**: Set the environment variables in your Vercel project settings.

## Deployment to Vercel

1. Push your code to GitHub.
2. Import the repository in [Vercel Dashboard](https://vercel.com).
3. Add environment variables:
   - `NEXT_PUBLIC_ALCHEMY_PAY_APP_ID`
   - `NEXT_PUBLIC_ALCHEMY_PAY_ENV`
4. Deploy.

## Telegram Mini App Setup

1. **Get your Vercel URL** (e.g., `https://alchemy-sol.vercel.app`).
2. **Configure with BotFather**:
   - Open [@BotFather](https://t.me/BotFather) on Telegram.
   - Set the bot's Menu Button URL to your Vercel URL.

## Folder Structure

```
/app
  /page.tsx         # Main entry point
  /layout.tsx       # Root layout
/components
  BuySolCard.tsx    # Purchase UI
/lib
  alchemypay.ts      # Alchemy Pay logic
```

## Security & Best Practices

- ✅ Client-side Solana address validation.
- ✅ Environment variables for public config.
- ✅ No backend required (stateless).
- ✅ Alchemy Pay handles KYC and payment processing.

---

**Built for the Solana ecosystem**
