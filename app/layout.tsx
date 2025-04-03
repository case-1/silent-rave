import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { Orbitron } from 'next/font/google';

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: "Silent Disco Rave",
  description: "Mobile-first rave reg-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body className="font-mono antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
