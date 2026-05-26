import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import { Footer } from "@/components/site-footer";

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
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
