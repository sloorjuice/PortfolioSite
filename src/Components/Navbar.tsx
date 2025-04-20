"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Get the current route

  return (
    <nav style={{ backgroundColor: "var(--brand-color)" }} className="text-white py-4 text-center">
      <div className="flex justify-center items-center">
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