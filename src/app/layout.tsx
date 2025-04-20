import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer"; // Corrected to match the file name
import StarryLayout from "@/Components/StarryLayout";
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
  title: "Sloor.Dev | Anthony Reynolds",
  description: "Anthony Reynolds, Web Developer Portfolio",
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
        <StarryLayout>
        <Navbar />
        {children}
        </StarryLayout>
        <Footer />
      </body>
    </html>
  );
}
