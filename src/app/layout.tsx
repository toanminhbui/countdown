import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Demo Day Countdown",
  description: "Countdown for V1 Demo Day",
  openGraph: {
    title: 'Demo Day Countdown',
    description: 'Countdown to V1 Demo Day - Track progress and stay motivated with startup quotes',
    url: 'https://v1michigan.com/w25-countdown',
    siteName: 'Demo Day Countdown',
    images: [
      {
        url: 'https://www.entrepreneur.com/growing-a-business/7-tips-for-crushing-it-on-demo-day/246598', // Add your own image URL here
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo Day Countdown',
    description: 'Countdown to V1 Demo Day - Track progress and stay motivated with startup quotes',
    images: ['https://www.entrepreneur.com/growing-a-business/7-tips-for-crushing-it-on-demo-day/246598'], // Add your own image URL here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
