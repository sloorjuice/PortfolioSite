"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav style={{ backgroundColor: "var(--brand-color)" }} className="text-white py-4 relative">
      <div className="flex justify-center items-center relative">
        {/* BLOG button absolutely positioned to the left */}
        <div className="absolute left-4">
          <Link
            href="/Blog"
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
