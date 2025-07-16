"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(120deg, rgba(181,126,220,0.65) 60%, rgba(230,230,250,0.35) 100%)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1.5px solid rgba(255,255,255,0.18)",
        boxShadow: "0 8px 32px 0 rgba(140,120,200,0.18)",
        position: "sticky",
        bottom: 0,
        width: "100%",
        zIndex: 50,
      }}
      className="py-3 text-white rounded-xl shadow-lg"
    >
      <div className="flex items-center justify-between px-6">
        {/* Copyright */}
        <p className="text-sm">
          &copy; 2025 Anthony Reynolds. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="hidden md:flex gap-6">
          <Link
            href="https://github.com/sloorjuice"
            target="_blank"
            className="text-white hover:text-yellow-400"
          >
            <FaGithub size={30} />
          </Link>
          <Link
            href="https://linktr.ee/sloorjuice"
            target="_blank"
            className="text-white hover:text-yellow-400"
          >
            <SiLinktree size={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anthony-reynolds-b90811355/"
            target="_blank"
            className="text-white hover:text-yellow-400"
          >
            <FaLinkedin size={30} />
          </Link>
        </div>

        {/* Contact Links */}
        <div className="hidden md:flex gap-4">
          <Link
            href="mailto:contact@sloor.dev"
            className="text-white hover:text-yellow-400 text-sm underline"
          >
            contact@sloor.dev
          </Link>
          <Link
            href="tel:+18144312013"
            className="text-white hover:text-yellow-400 text-sm underline"
          >
            (814) 431-2013
          </Link>
        </div>
      </div>
    </footer>
  );
}