import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD. Moorsahaul Islam Noor — Full-Stack Developer",
  description:
    "Portfolio of MD. Moorsahaul Islam Noor, Full-Stack Developer & Software Engineering graduate from Daffodil International University. Specializing in fast, secure, end-to-end web applications with React, Next.js, and Node.js.",
  keywords: [
    "MD. Moorsahaul Islam Noor",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Daffodil International University",
    "Web Application Developer",
  ],
  authors: [{ name: "MD. Moorsahaul Islam Noor" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "MD. Moorsahaul Islam Noor — Full-Stack Developer",
    description:
      "Building fast, secure, end-to-end web applications with React, Next.js, and Node.js.",
    type: "website",
    locale: "en_US",
    siteName: "MD. Moorsahaul Islam Noor Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD. Moorsahaul Islam Noor — Full-Stack Developer",
    description:
      "Building fast, secure, end-to-end web applications with React, Next.js, and Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#000000] text-[#e5e2e1] selection:bg-[#38bdf8]/20 selection:text-[#38bdf8]">
        {children}
      </body>
    </html>
  );
}
