# MoonPay Telegram Mini App

A Next.js-based Telegram Mini Web App that allows users to purchase Solana (SOL) non-custodially using MoonPay integration.

## Features

✨ **Clean & Minimal UI** - Centered card layout optimized for mobile
🔐 **Non-Custodial** - SOL sent directly to user's wallet address
💳 **MoonPay Integration** - Secure payment processing
📱 **Telegram Compatible** - Optimized for Telegram WebView
🌙 **Dark Mode** - Automatic dark mode support
⚡ **Next.js 14** - Built with App Router and TypeScript

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payment SDK**: @moonpay/moonpay-js
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+ and npm
- MoonPay API Key ([Get one here](https://www.moonpay.com/dashboard))
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
   NEXT_PUBLIC_MOONPAY_API_KEY=your_moonpay_api_key_here
   ```

   > **Important**: Get your MoonPay API key from [MoonPay Dashboard](https://www.moonpay.com/dashboard)

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Testing Locally

1. Start the dev server: `npm run dev`
2. Enter a valid Solana wallet address (32-44 characters)
3. Click "Buy SOL" to test the MoonPay widget integration
4. The widget should open as a modal

### Valid Solana Address Example
```
DYw8jCTfwHNRJhhmFcbXvVDTqWMEVFBX6ZKUmG5CNSKK
```

## Production Build

Test the production build locally:

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add environment variable in Vercel Dashboard**
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `NEXT_PUBLIC_MOONPAY_API_KEY` with your API key
   - Redeploy if needed

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Import the repository in [Vercel Dashboard](https://vercel.com)
3. Add environment variable `NEXT_PUBLIC_MOONPAY_API_KEY`
4. Deploy

## Telegram Mini App Setup

After deploying to Vercel:

1. **Get your Vercel URL** (e.g., `https://moonpay.vercel.app`)

2. **Configure with BotFather**
   - Open [@BotFather](https://t.me/BotFather) on Telegram
   - Send `/mybots`
   - Select your bot
   - Choose "Bot Settings" → "Menu Button"
   - Select "Configure Menu Button"
   - Enter your Vercel URL
   - Set button text (e.g., "Buy SOL")

3. **Test in Telegram**
   - Open your bot in Telegram
   - Click the menu button
   - The Mini App should open inside Telegram

## Project Structure

```
moonpay/
├── app/
│   ├── layout.tsx       # Root layout with SEO & Telegram compatibility
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles with dark mode
├── components/
│   └── BuySolCard.tsx   # Main card component with wallet input
├── lib/
│   └── moonpay.ts       # MoonPay SDK integration & validation
├── .env.example         # Environment variables template
├── .env.local           # Your local environment (git-ignored)
├── package.json         # Dependencies
└── README.md            # This file
```

## How It Works

1. User enters their Solana wallet address
2. Address is validated (32-44 characters, base58 format)
3. On "Buy SOL", MoonPay widget opens as a modal
4. User completes payment through MoonPay
5. SOL is sent directly to the provided wallet address
6. No custody - fully non-custodial flow

## Security Features

- ✅ Client-side wallet address validation
- ✅ Environment variables for sensitive keys
- ✅ HTTPS enabled by default on Vercel
- ✅ No backend - stateless architecture
- ✅ MoonPay handles all payment processing
- ✅ User-friendly error messages

## Troubleshooting

### MoonPay widget not opening
- Check that `NEXT_PUBLIC_MOONPAY_API_KEY` is set correctly
- Verify the API key is valid in MoonPay dashboard
- Check browser console for errors

### Invalid wallet address error
- Solana addresses must be 32-44 characters
- Ensure no extra spaces or invalid characters
- Use a valid Solana wallet address

### Telegram WebView issues
- Ensure your Vercel deployment uses HTTPS
- Test the URL directly in a mobile browser first
- Check Telegram Bot settings in BotFather

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_MOONPAY_API_KEY` | Your MoonPay API key | Yes |

## License

MIT

## Support

For MoonPay-related issues, visit [MoonPay Support](https://support.moonpay.com/)

For Next.js issues, visit [Next.js Documentation](https://nextjs.org/docs)

---

**Built with ❤️ for the Solana ecosystem**
