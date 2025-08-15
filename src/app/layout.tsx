import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNavbar from './components/MobileNavbar';

import { LanguageProvider } from './context/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connecting Dots",
  description: "Connecting Dots for Latinx Professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><LanguageProvider>
        <MobileNavbar />
        <main className="pt-[5.9rem] overflow-hidden">{children}</main>
      </LanguageProvider></body>
    </html>
  );
}
