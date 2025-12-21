import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Healthcare Research | Industry Reports & Insights",
    template: "%s | Healthcare Research",
  },
  description: "Access comprehensive healthcare research reports, industry analysis, and expert insights on digital health, pharmaceuticals, medical devices, and emerging healthcare technologies.",
  keywords: ["healthcare research", "medical industry reports", "healthcare analytics", "pharmaceutical research", "digital health trends", "medical devices market"],
  authors: [{ name: "Healthcare Research Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Healthcare Research",
    title: "Healthcare Research | Industry Reports & Insights",
    description: "Access comprehensive healthcare research reports, industry analysis, and expert insights.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
