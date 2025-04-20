"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Removed FaLink
import { SiLinktree } from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-start pt-8">
      {/* Profile Image */}
      <div className="relative w-40 h-40 mb-6">
        <Image
          src="/me.jpg" 
          alt="Profile photo"
          fill
          className="rounded-full object-cover border-4 border-gray-200 shadow-lg transform rotate-0"
        />
      </div>

      {/* Name + Title */}
      <h1 className="text-4xl font-bold">Anthony Reynolds</h1>
      <p className="text-lg text-white mt-2">Web Developer · Skater · Creative</p>

      {/* Bio */}
      <p className="mt-6 max-w-xl text-center text-gray-300">
        I&apos;m a full-stack developer passionate about building quality websites.
        I am here to create the best possible product for you!
        I use TypeScript, React, Node.js, Tailwind CSS, and Netlify to create responsive and beautiful websites for clients, my users, and even myself.
        I&apos;m currently working on a pretty awesome project, &quot;OfTheDay.World&quot;. Check it out on the Portfolio page!
      </p>

      {/* Social Links */}
      <div className="mt-8 flex gap-6">
        <Link href="https://github.com/sloorjuice" target="_blank" className="text-blue-500 hover:text-gray-300">
          <FaGithub size={30} />
        </Link>
        <Link href="https://linktr.ee/sloorjuice" target="_blank" className="text-blue-500 hover:text-gray-300">
          <SiLinktree size={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/anthony-reynolds-b90811355/" target="_blank" className="text-blue-500 hover:text-gray-300">
          <FaLinkedin size={30} />
        </Link>
      </div>
      <div className="flex gap-4 mt-4">
        <Link href="mailto:antant8085@gmail.com" className="text-blue-500 hover:underline">
          contact@sloor.dev
        </Link>
        <Link href="tel:+18144312013" className="text-blue-500 hover:underline">
          (814) 431-2013
        </Link>
      </div>
    </main>
  );
}
