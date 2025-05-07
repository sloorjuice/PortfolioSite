"use client";

import Image from "next/image";
import ProjectCard from "@/Components/ProjectCard";
import { useState, useEffect, useRef } from "react";

const featuredProject = {
  title: "Of The Day!",
  description:
    "A simple website that beautifully displays Quote of the day, Songs of the day, Games of the day, etc. Built with React, Spotify API, and Rawg API.",
  image: "/images/portfolio/personal1.jpg",
  projectLink: "https://www.oftheday.world/",
  githubLink: "https://github.com/sloorjuice/oftheday",
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

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isHovered) return; // Pause if hovered
  
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
  
    return () => clearInterval(interval);
  }, [isHovered]); // Rerun effect when hover state changes

  // Handle swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext(); // swipe left
    else if (diff < -50) handlePrev(); // swipe right
  };

  return (
    <main className="min-h-screen text-white px-6 flex flex-col md:flex-row items-stretch justify-center relative overflow-hidden pb-0 md:pb-12">
      {/* Left Section */}
      <div className="w-full md:w-1/2 md:pr-6 flex flex-col items-center mb-12 md:mb-0 pt-12">
        <div className="relative z-10 flex flex-col items-center">
        {/* Carousel */}
        <div
          className="relative w-80 h-80 overflow-hidden mb-4 border-4 border-gray-400 rounded-lg shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentImageIndex * 320}px)`,
          }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="w-80 h-80 flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={320}
                height={320}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Nav Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600"
        >
          &gt;
        </button>
        </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-0 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === index ? "bg-white scale-125" : "bg-gray-400"
                } transition-all`}
              />
            ))}
          </div>

          {/* Name and Bio Section */}
          <h1 className="text-4xl font-bold mt-6">Anthony Reynolds</h1>
          <p className="text-lg text-white mt-2">
            Web Developer · Skater · Creative
          </p>

          <p className="mt-6 max-w-xl text-center text-gray-300">
            Hi there! I&apos;m Anthony Reynolds, I&apos;m 17 years old and I live in Pennsylvania.
            I&apos;m a hard working person and I love to learn new things,
            I&apos;m constantly working as hard as I can to improve my skills and character.
            I love Skating, Coding, Gaming and many other things.
          </p>

          {/* Favorites Section */}
          <section className="mt-12 w-full max-w-4xl mb-12">
            <h2 className="text-3xl font-bold mb-4">⭐Favorites</h2>
            <ul className="list-inside text-gray-300">
              <li>🎥&ensp;<span className="font-bold">Movie:</span> Mid90s</li>
              <li>📺&ensp;<span className="font-bold">TV Show:</span> Breaking Bad</li>
              <li>🛋️&ensp;<span className="font-bold">Cartoon:</span> Adventure Time</li>
              <li>🌀&ensp;<span className="font-bold">Anime:</span> One Punch Man</li>
              <li>🎮&ensp;<span className="font-bold">Game:</span> Terraria</li>
              <li>📚&ensp;<span className="font-bold">Book:</span> Tokyo Ghoul</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Divider Line */}
      <div className="bg-gray-400 h-px w-full my-6 md:my-0 md:w-px md:h-auto md:self-stretch md:mx-6 mt-0 md:mt-12" />

      {/* Right Section */}
      <div className="w-full md:w-1/2 md:pl-6">
        <section className="mt-12 w-full max-w-4xl flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Project</h2>
          <div className="flex justify-center">
            <ProjectCard
              title={featuredProject.title}
              description={featuredProject.description}
              image={featuredProject.image}
              projectLink={featuredProject.projectLink}
              githubLink={featuredProject.githubLink}
            />
          </div>
        </section>

        {/* Skills */}
        <section className="mt-12 w-full max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>TypeScript, JavaScript, React, and Next.js</li>
            <li>Tailwind CSS, Firebase, AWS</li>
            <li>Responsive, accessible web applications</li>
            <li>Using APIs and Deploying with Netlify</li>
            <li>Hosting and Managing Multiple Websites</li>
            <li>Git + GitHub for version control</li>
            <li>React Native and Mobile Development</li>
          </ul>
        </section>

        {/* Hobbies */}
        <section className="mt-12 w-full max-w-4xl mb-12">
          <h2 className="text-3xl font-bold mb-4">Hobbies</h2>
          <ul className="list-inside text-gray-300">
            <li>🛹&ensp;Skateboarding and exploring new spots</li>
            <li>🌳&ensp;Photography and Nature</li>
            <li>🕹️&ensp;Gaming, Movies, TV, Anime, Etc</li>
            <li>💻&ensp;Programming and Creating</li>
            <li>🖊️&ensp;Drawing, Coloring, Writing and Art</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
