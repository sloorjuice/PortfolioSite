"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--brand-color)",
        position: "sticky",
        bottom: 0,
        width: "100%",
        zIndex: 50, // Ensure the footer is always on top
      }}
      className="py-3 text-white"
    >
      <div className="flex items-center justify-between px-6">
        {/* Copyright */}
        <p className="text-sm">
          &copy; 2025 Anthony Reynolds. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
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
        <div className="flex gap-4">
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