import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bevellier = localFont({
  src: "../../public/fonts/Bevellier-Bold.otf",
  variable: "--font-bevellier",
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  title: "ArchLens — Software Architecture Discovery",
  description:
    "Paste a GitHub URL. Automatically generate interactive architecture diagrams, map dependencies, and get AI-driven code explanations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bevellier.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
