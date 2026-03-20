import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/cursor/custom-cursor";
import { TelemetryBar } from "@/components/nav/telemetry-bar";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://harivershan.com"),
  title: "Hari Vershan — Product Design Lead | AI-Driven Design",
  description: "Portfolio of Hari Vershan, Product Design Lead with 9+ years of experience in enterprise SaaS, AI-driven products, and design leadership.",
  alternates: {
    canonical: "https://harivershan.com",
  },
  openGraph: {
    title: "Hari Vershan — Product Design Lead | AI-Driven Design",
    description: "Portfolio of Hari Vershan, Product Design Lead with 9+ years of experience in enterprise SaaS, AI-driven products, and design leadership.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${orbitron.variable}`}>
      <body>
        <a href="#standings" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-papaya focus:text-bg focus:px-4 focus:py-2 focus:rounded-sm">
          Skip to content
        </a>
        <TelemetryBar />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
