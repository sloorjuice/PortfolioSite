import type { Metadata } from "next";
import Script from "next/script"; // Import the Script component
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
        {/* Add the Buy Me a Coffee widget script asynchronously */}
        <Script
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-name="BMC-Widget"
          data-id="sloorjuice"
          data-description="Support me on Buy me a coffee!"
          data-message="Support Me!"
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
          strategy="lazyOnload" // Load the script lazily
        />
      </body>
    </html>
  );
}
