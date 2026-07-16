import { DM_Serif_Display, DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import { Footer } from "@/components/site-footer";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arunesh Kumar — Product Manager | Growth & Digital Strategy",
  description: "Premium portfolio for Arunesh Kumar — product systems, growth, experimentation, and AI-powered workflows.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
