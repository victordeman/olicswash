import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "OLICS WASH | Your Best Plug In | Professional Laundry & Cleaning",
  description: "Port Harcourt's #1 laundry service. Premium dry cleaning, wash & fold, industrial cleaning and fumigation. Professional laundry delivered with care. Your Best Plug In.",
  keywords: ["laundry", "dry cleaning", "Port Harcourt", "OLICS WASH", "cleaning services", "Nigeria", "fumigation", "biohazard cleaning"],
  authors: [{ name: "OLICS WASH" }],
  openGraph: {
    title: "OLICS WASH | Professional Laundry Services",
    description: "Your Best Plug In for laundry and cleaning services in Port Harcourt.",
    url: "https://olicswash.com.ng",
    siteName: "OLICS WASH",
    locale: "en_NG",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0052CC",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            {children}
            <Toaster position="top-center" richColors />
          </div>
        </Providers>
      </body>
    </html>
  );
}
