import type { Metadata } from "next";
import { BuyMeACoffee } from "@/Components/BuyMeACoffee";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer";
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
  title: "Sloor.Dev | Anthony Reynolds - Web Developer & Creator",
  description: "Portfolio of Anthony Reynolds, a passionate web developer specializing in Next.js, React, and modern web technologies. Explore projects, blog posts, and creative works.",
  keywords: ["Anthony Reynolds", "Sloor.Dev", "web developer", "Next.js developer", "React developer", "frontend portfolio", "modern web development", "creative coding", "blog", "projects", "sloor", "sloorjuice", "Anthony Reynolds portfolio", "Anthony Reynolds projects"],
  authors: [{ name: "Anthony Reynolds", url: "https://sloor.dev" }],
  creator: "Anthony Reynolds",
  metadataBase: new URL("https://sloor.dev"),
  openGraph: {
    title: "Sloor.Dev | Anthony Reynolds - Web Developer & Creator",
    description: "Explore the portfolio and projects of Anthony Reynolds, a web developer passionate about building stunning, performant websites with Next.js and React.",
    url: "https://sloor.dev",
    siteName: "Sloor.Dev",
    images: [
      {
        url: "https://sloor.dev/images/cover.png", // Make sure you have this image!
        width: 1200,
        height: 630,
        alt: "Sloor.Dev Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sloor.Dev | Anthony Reynolds",
    description: "Anthony Reynolds' web development portfolio built with Next.js and React. Explore projects, creative coding, and more.",
    site: "@sloorjuice", // Optional: add yours
    creator: "@sloorjuice", // Optional: add yours
    images: ["https://sloor.dev/images/cover.png"],
  },
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
          <BuyMeACoffee />
          <Footer />
        </StarryLayout>
      </body>
    </html>
  );
}
