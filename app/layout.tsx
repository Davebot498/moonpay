import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buy SOL Instantly | MoonPay",
  description: "Purchase Solana (SOL) securely and instantly using MoonPay",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#000000",
  other: {
    // Telegram WebView compatibility
    "telegram-web-app-compatible": "true",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
