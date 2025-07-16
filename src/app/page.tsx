"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start px-6 pt-6 pb-12 text-white flex-grow overflow-y-auto"
      style={{
        minHeight: "100vh",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-40 h-40 mb-6">
          <Image
            src="/images/personal/me.jpg"
            alt="Profile photo"
            fill
            className="rounded-full object-cover border-4 border-gray-200 shadow-lg"
          />
        </div>

        <h1 className="text-4xl font-bold">Anthony Reynolds</h1>
        <p className="text-lg text-white mt-2">Full Stack Mobile & Web Developer</p>
        <p className="text-lg text-white mt-2">Skater · Creative</p>

        <div
          className="mt-6 max-w-xl text-center space-y-3 rounded-xl p-6 shadow-xl border border-[rgba(255,255,255,0.18)]"
          style={{
            background: "linear-gradient(120deg, rgba(181,126,220,0.65) 60%, rgba(230,230,250,0.35) 100%)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 8px 32px 0 rgba(140,120,200,0.18)",
          }}
        >
          <p>
            Welcome to my little corner of the internet!<br />
            I&apos;m a full-stack developer and skater always excited to make something.
          </p>
          <p>
            I&apos;m excited for my future—I&apos;m making a skateboarding-based app that I&apos;ve been working on for a while now.<br />
            The app is currently in beta and you can check it out at{' '}
            <Link href="https://iSkate.app" target="_blank" className="text-purple-200 underline hover:text-purple-100 font-semibold">iSkate.app</Link>{' '}or{' '}
            <Link href="https://DirtyAttic.com" target="_blank" className="text-purple-200 underline hover:text-purple-100 font-semibold">DirtyAttic.com</Link>.
          </p>
          <p>
            <span className="font-semibold text-white">Dirty Attic</span> is my team of passionate Skaters, Artists, and Coders that I work with to create amazing things.
          </p>
          <p>
            I use <span className="font-semibold text-white">React Native</span> and <span className="font-semibold text-white">Expo</span> with <span className="font-semibold text-white">TypeScript</span> and <span className="font-semibold text-white">Firebase</span> to create iSkate and other apps.<br />
            I use <span className="font-semibold text-white">React Native</span> and <span className="font-semibold text-white">Next.js</span> with <span className="font-semibold text-white">TypeScript</span>, <span className="font-semibold text-white">Tailwind CSS</span> and <span className="font-semibold text-white">Netlify</span> to create responsive and beautiful websites.
          </p>
          <p>
            Please check <Link href="https://DirtyAttic.com" target="_blank" className="text-purple-200 underline hover:text-purple-100 font-semibold">DirtyAttic.com</Link>,{' '}
            <Link href="https://iSkate.app" target="_blank" className="text-purple-200 underline hover:text-purple-100 font-semibold">iSkate.app</Link>, and the rest of this website.<br />
            Feel free to reach out if you have any questions or anything else!
          </p>
        </div>

        <div className="mt-4 flex gap-6">
          <Link href="https://github.com/sloorjuice" target="_blank" className="text-purple-300 hover:text-white transition-colors">
            <FaGithub size={30} />
          </Link>
          <Link href="https://linktr.ee/sloorjuice" target="_blank" className="text-purple-300 hover:text-white transition-colors">
            <SiLinktree size={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/anthony-reynolds-b90811355/" target="_blank" className="text-purple-300 hover:text-white transition-colors">
            <FaLinkedin size={30} />
          </Link>
        </div>
        <div className="flex gap-4 mt-4">
          <Link href="mailto:antant8085@gmail.com" className="text-purple-200 hover:underline">
            contact@sloor.dev
          </Link>
          <Link href="tel:+18144312013" className="text-purple-200 hover:underline">
            (814) 431-2013
          </Link>
        </div>
      </div>
    </main>
  );
}
