"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="text-white py-4 relative rounded-xl mx-2 mt-4 shadow-lg"
      style={{
        background: "linear-gradient(120deg, rgba(181,126,220,0.65) 60%, rgba(230,230,250,0.35) 100%)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1.5px solid rgba(255,255,255,0.18)",
        boxShadow: "0 8px 32px 0 rgba(140,120,200,0.18)",
      }}
    >
      <div className="flex justify-center items-center relative">
        {/* BLOG button absolutely positioned to the left */}
        <div className="absolute left-4">
          <Link
            href="/blog"
            className="font-bold hover:text-yellow-300 text-lg"
          >
            BLOG
          </Link>
        </div>

        {/* Centered navigation links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/Portfolio"
              className={`hover:text-yellow-300 ${pathname === "/Portfolio" ? "font-bold" : ""}`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`hover:text-yellow-300 ${pathname === "/" ? "font-bold" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className={`hover:text-yellow-300 ${pathname === "/About" ? "font-bold" : ""}`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
