import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arsen Abrahamyan portfolio",
  description: "Arsen Abrahamyan's portfolio created with next app",
  keywords: [
    "arsen",
    "abrahamyan",
    "page",
    "portfolio",
    "javascript",
    "react",
    "next",
  ],
  robots: "Arsen Abrahamyan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-blue-500">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
