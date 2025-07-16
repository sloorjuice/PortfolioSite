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
      {/* Caesar Dressing and Lacquer font for Dirty Attic */}
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
        `}
      </style>
      <div className="flex justify-center items-center relative">
        {/* BLOG button absolutely positioned to the left */}
        <div className="absolute left-4">
          <Link
            href="/blog"
            className="font-bold hover:text-yellow-300 text-lg nav-link"
          >
            BLOG
          </Link>
        </div>

        {/* Centered navigation links */}
        <ul className="flex space-x-6">
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

        {/* Dirty Attic link absolutely positioned to the right */}
        <div className="absolute right-4">
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
    </nav>
  );
}
