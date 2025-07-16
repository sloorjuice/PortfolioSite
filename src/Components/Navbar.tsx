"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="text-white py-4 relative rounded-xl mx-2 mt-4 shadow-lg z-50"
      style={{
        background: "linear-gradient(120deg, rgba(181,126,220,0.85) 60%, rgba(230,230,250,0.65) 100%)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1.5px solid rgba(255,255,255,0.18)",
        boxShadow: "0 8px 32px 0 rgba(140,120,200,0.18)",
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caesar+Dressing&family=Lacquer&display=swap');
          .nav-link {
            transition: 
              color 0.2s,
              transform 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
              box-shadow 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
              background 0.18s cubic-bezier(0.4, 0.2, 0.2, 1);
            border-radius: 0.5rem;
            padding: 0.25rem 0.9rem;
            display: inline-block;
          }
          .nav-link:hover {
            transform: scale(1.15);
            background: rgba(255,255,255,0.13);
            box-shadow: 0 2px 12px 0 rgba(181,126,220,0.18);
          }
          .nav-link.selected {
            background: rgba(255,255,255,0.22);
            box-shadow: 0 4px 24px 0 rgba(181,126,220,0.22), 0 1.5px 0 rgba(255,255,255,0.18);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            color: #fff !important;
            font-weight: bold;
          }
          .dirty-attic-link {
            font-family: 'Lacquer', 'Caesar Dressing', cursive;
            letter-spacing: 1px;
            color: #fff;
            text-shadow: 0 2px 8px #b57edc, 0 1px 0 #000;
            transition: 
              color 0.2s,
              text-shadow 0.2s,
              transform 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
              box-shadow 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
              background 0.18s cubic-bezier(0.4, 0.2, 0.2, 1);
            border-radius: 0.7rem;
            padding: 0.25rem 1.2rem;
            display: inline-block;
          }
          .dirty-attic-link:hover {
            color: #ffe066;
            background: rgba(181,126,220,0.18);
            text-shadow: 0 4px 18px #b57edc, 0 2px 0 #000, 0 0 8px #ffe066;
            transform: scale(1.13) rotate(-2deg);
            box-shadow: 0 4px 24px 0 rgba(181,126,220,0.22), 0 1.5px 0 rgba(255,255,255,0.18);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
          }
          .hamburger {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 38px;
            height: 38px;
            background: none;
            border: none;
            cursor: pointer;
            z-index: 30;
          }
          .hamburger-bar {
            width: 28px;
            height: 4px;
            background: #fff;
            margin: 3px 0;
            border-radius: 2px;
            transition: all 0.3s;
          }
          @media (min-width: 768px) {
            .mobile-menu {
              display: none !important;
            }
            .hamburger {
              display: none !important;
            }
          }
        `}
      </style>
      <div className="flex items-center w-full">
        {/* Blog far left */}
        <div className="flex-shrink-0">
          <Link
            href="/blog"
            className="font-bold hover:text-yellow-300 text-lg nav-link"
          >
            BLOG
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="hamburger ml-2 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className="hamburger-bar"
            style={{
              transform: menuOpen ? "rotate(45deg) translate(6px, 6px)" : "none",
            }}
          />
          <span
            className="hamburger-bar"
            style={{
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="hamburger-bar"
            style={{
              transform: menuOpen ? "rotate(-45deg) translate(7px, -7px)" : "none",
            }}
          />
        </button>
        {/* Center links */}
        <div className="flex-1 flex justify-center gap-4">
          <ul className="hidden md:flex flex-row items-center gap-4 w-full justify-center">
            <li>
              <Link
                href="/Portfolio"
                className={`nav-link hover:text-yellow-300 ${pathname === "/Portfolio" ? "selected" : ""}`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`nav-link hover:text-yellow-300 ${pathname === "/" ? "selected" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className={`nav-link hover:text-yellow-300 ${pathname === "/About" ? "selected" : ""}`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {/* Dirty Attic far right */}
        <div className="flex-shrink-0">
          <Link
            href="https://dirtyattic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl dirty-attic-link"
          >
            Dirty Attic
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`mobile-menu absolute left-0 top-full w-full bg-gradient-to-br from-purple-400/80 to-purple-100/60 p-6 rounded-xl shadow-xl z-20 ${
          menuOpen ? "flex flex-col items-center gap-4" : "hidden"
        }`}
      >
        <Link
          href="/Portfolio"
          className={`nav-link hover:text-yellow-300 w-full text-center ${pathname === "/Portfolio" ? "selected" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </Link>
        <Link
          href="/"
          className={`nav-link hover:text-yellow-300 w-full text-center ${pathname === "/" ? "selected" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/About"
          className={`nav-link hover:text-yellow-300 w-full text-center ${pathname === "/About" ? "selected" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
