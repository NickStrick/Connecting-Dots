import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNavbar from "./components/MobileNavbar";
import Script from 'next/script'

import { LanguageProvider } from "./context/LanguageContext";
import { PageTextProvider } from "./context/PageContext";

import AnalyticsListener from "./components/AnalyticsListener";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connecting Dots",
  description: "Connecting Dots for Latinx Professionals",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <PageTextProvider>
            <MobileNavbar />
            <main className="pt-[5.9rem] overflow-hidden">{children}</main>
          </PageTextProvider>
        </LanguageProvider>
         <AnalyticsListener />
        {GA_ID ? (
          <>
            <Script
              id="ga-src"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
