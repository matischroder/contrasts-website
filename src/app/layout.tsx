import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import { site, siteUrl } from "@/content/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], display: "swap" });
const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"], display: "swap" });

const title = "Contrasts Hair Studio | Organic Hair Salon in Grange, Brisbane";
const description =
  "Organic hair salon in Grange, Brisbane. Cutting, colouring and styling with products that are 100% ammonia, paraben and sulfate free. Complimentary consultations. Call (07) 3356 4433.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_AU", siteName: site.name, title, description, url: "/" },
  robots: site.isPreview ? { index: false, follow: false } : { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#1c231f" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${cormorant.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
