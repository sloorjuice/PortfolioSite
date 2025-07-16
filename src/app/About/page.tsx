"use client";

import Image from "next/image";
import ProjectCard from "@/Components/ProjectCard";
import FeaturedProjectCard from "@/Components/FeaturedProjectCard";
import { useState, useEffect, useRef } from "react";
import { FaSkating } from "react-icons/fa";

const featuredProject = {
  title: "iSkate",
  description:
    "The All-In-One Skateboarding Companion App. Made by skaters for skaters. Save and view skate spots online using the SkateMap. Check off and keep track of your tricks on your TrickList. Post your best skate clips and pics.",
  image: "/images/portfolio/iskateicon.png",
  projectLink: "https://iSkate.app",
};

const galleryImages = [
  "/images/personal/me.jpg",
  "/images/personal/me1.jpg",
  "/images/personal/me2.jpeg",
  "/images/personal/me3.jpeg",
  "/images/personal/me4.jpeg",
];

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleNext = () => setCurrentImageIndex(i => (i + 1) % galleryImages.length);
  const handlePrev = () => setCurrentImageIndex(i => (i === 0 ? galleryImages.length - 1 : i - 1));

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.changedTouches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
  };

  return (
    <main
      className="min-h-screen text-white px-2 md:px-6 flex flex-col md:flex-row items-stretch justify-center relative overflow-hidden pb-0 md:pb-8"
      style={{}}
    >
      {/* Left */}
      <div className="w-full md:w-1/2 flex flex-col items-center mb-8 md:mb-0 pt-8 relative z-10">
        <div
          className="rounded-2xl shadow-xl border border-[#334155]/60 p-4 w-full max-w-md flex flex-col items-center backdrop-blur-xl ring-1 ring-white/10"
          style={{
            background: "linear-gradient(120deg, rgba(181,126,220,0.65) 60%, rgba(230,230,250,0.35) 100%)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1.5px solid rgba(255,255,255,0.18)",
            boxShadow: "0 8px 32px 0 rgba(140,120,200,0.18)",
          }}
        >
          {/* Carousel */}
          <div
            className="relative w-48 h-48 overflow-hidden mb-4 border-2 border-[#0ea5e9] rounded-xl shadow"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 192}px)` }}
            >
              {galleryImages.map((image, idx) => (
                <div key={idx} className="w-48 h-48 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={image}
                    alt={`Gallery image ${idx + 1}`}
                    width={192}
                    height={192}
                    className="rounded-lg object-cover shadow"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-1 -translate-y-1/2 bg-[#0ea5e9] text-white rounded-full w-6 h-6 flex items-center justify-center shadow hover:bg-[#0284c7] transition"
              aria-label="Previous"
            >&lt;</button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-1 -translate-y-1/2 bg-[#0ea5e9] text-white rounded-full w-6 h-6 flex items-center justify-center shadow hover:bg-[#0284c7] transition"
              aria-label="Next"
            >&gt;</button>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-1 mb-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full border border-[#0ea5e9] ${currentImageIndex === idx ? "bg-[#0ea5e9]" : "bg-gray-500"} transition-all`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
          {/* Name and Bio */}
          <h1 className="text-2xl font-extrabold mt-1 tracking-tight text-[#0ea5e9]">Anthony Reynolds</h1>
          <p className="text-base text-gray-100 mt-1 font-medium">Full Stack Mobile & Web Developer</p>
          <p className="text-base text-gray-100 mt-1 font-medium">Skater · Creative</p>
          <p className="mt-3 max-w-xs text-center text-gray-300 leading-relaxed text-sm">
            Hi! I&apos;m Anthony Reynolds, 17, Pennsylvania.<br />
            I&apos;m a hard-working person who loves to learn and improve.<br />
            I love Skating, Coding, Gaming, and more.
          </p>
          {/* Favorites */}
          <section className="mt-6 w-full flex flex-col items-center">
            <h2 className="text-lg font-bold mb-2 text-[#0ea5e9] text-center">Favorites</h2>
            <div className="grid grid-cols-2 gap-2 w-full max-w-xs text-xs">
              <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
                <div className="font-bold text-white">Movie</div>
                <div className="text-[#0ea5e9] font-semibold">Mid90s</div>
              </div>
              <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
                <div className="font-bold text-white">TV Show</div>
                <div className="text-[#0ea5e9] font-semibold">Breaking Bad</div>
              </div>
              <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
                <div className="font-bold text-white">Cartoon</div>
                <div className="text-[#0ea5e9] font-semibold">Adventure Time</div>
              </div>
              <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
                <div className="font-bold text-white">Anime</div>
                <div className="text-[#0ea5e9] font-semibold">One Punch Man</div>
              </div>
              <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
                <div className="font-bold text-white">Game</div>
                <div className="text-[#0ea5e9] font-semibold">Terraria</div>
              </div>
              <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
                <div className="font-bold text-white">Book</div>
                <div className="text-[#0ea5e9] font-semibold">Tokyo Ghoul</div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Divider */}
      <div className="hidden md:block bg-gradient-to-b from-[#0ea5e9] to-[#1e293b] h-auto w-0.5 mx-4 rounded-full opacity-70" />
      {/* Right */}
      <div className="w-full md:w-1/2 flex flex-col items-center pt-8 relative z-10">
        {/* Featured Project */}
        <section
          className="w-full max-w-xl rounded-2xl shadow-xl border border-[#334155]/60 p-2 mb-4 flex flex-col items-center backdrop-blur-xl ring-1 ring-white/10"
          style={{
            background: "linear-gradient(120deg, rgba(181,126,220,0.65) 60%, rgba(230,230,250,0.35) 100%)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1.5px solid rgba(255,255,255,0.18)",
            boxShadow: "0 8px 32px 0 rgba(140,120,200,0.18)",
          }}
        >
          <h2 className="text-lg font-bold mb-2 text-[#0ea5e9] text-center">Featured Project</h2>
          <div className="flex justify-center w-full">
            <FeaturedProjectCard {...featuredProject} />
          </div>
        </section>
        {/* Skills */}
        <section
          className="w-full max-w-xl rounded-2xl shadow border border-[#334155]/60 p-4 mb-4 backdrop-blur-xl flex flex-col items-center ring-1 ring-white/10"
          style={{
            background: "linear-gradient(120deg, rgba(181,126,220,0.65) 60%, rgba(230,230,250,0.35) 100%)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1.5px solid rgba(255,255,255,0.18)",
            boxShadow: "0 8px 32px 0 rgba(140,120,200,0.18)",
          }}
        >
          <h2 className="text-lg font-bold mb-2 text-[#0ea5e9] text-center">Skills</h2>
          <div className="grid grid-cols-2 gap-2 w-full text-xs">
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
              <div className="text-white font-semibold">TypeScript, JavaScript, Python</div>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
              <div className="text-white font-semibold">React, Next.js, Tailwind CSS</div>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
              <div className="text-white font-semibold">React Native, Expo</div>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
              <div className="text-white font-semibold">Firebase, AWS</div>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
              <div className="text-white font-semibold">APIs & Netlify</div>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
              <div className="text-white font-semibold">Hosting & Sites</div>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
              <div className="text-white font-semibold">Git + GitHub</div>
            </div>
          </div>
        </section>
        {/* Hobbies */}
        <section
          className="w-full max-w-xl rounded-2xl shadow border border-[#334155]/60 p-4 mb-4 backdrop-blur-xl flex flex-col items-center ring-1 ring-white/10"
          style={{
            background: "linear-gradient(120deg, rgba(181,126,220,0.65) 60%, rgba(230,230,250,0.35) 100%)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1.5px solid rgba(255,255,255,0.18)",
            boxShadow: "0 8px 32px 0 rgba(140,120,200,0.18)",
          }}
        >
          <h2 className="text-lg font-bold mb-2 text-[#0ea5e9] text-center">Hobbies</h2>
          <div className="grid grid-cols-2 gap-2 w-full text-xs">
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
              <div className="text-white font-semibold text-center">Skateboarding & exploring</div>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
              <div className="text-white font-semibold text-center">Photography & Nature</div>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
              <div className="text-white font-semibold text-center">Gaming, Movies, TV, Anime</div>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
              <div className="text-white font-semibold text-center">Programming & Creating</div>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-2 shadow border border-white/10 transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-lg hover:scale-[1.03]">
              <div className="text-white font-semibold text-center">Drawing, Writing & Art</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
