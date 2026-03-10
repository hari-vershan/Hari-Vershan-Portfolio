import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Hari Vershan S R — Product Design Lead", template: "%s | Hari Vershan S R" },
  description: "Product Design Lead with 9+ years of experience building AI-driven enterprise products and leading high-performing design teams.",
  keywords: ["Product Design Lead", "Design Manager", "AI Product Design", "Enterprise UX", "Design Systems"],
  authors: [{ name: "Hari Vershan S R" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="font-body noise-overlay">
        <ThemeProvider>
          <LoadingScreen />
          <AccessibilityMenu />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
