"use client";

import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/Components/ProjectCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { useState } from "react";

const featuredProject = {
  title: "Of The Day!",
  description:
    "A simple website that beautifully displays Quote of the day, Songs of the day, Games of the day, etc. Built with React, Spotify API, and Rawg API.",
  image: "/personal1.jpg",
  projectLink: "https://www.oftheday.world/",
  githubLink: "https://github.com/sloorjuice/oftheday",
};

const galleryImages = [
    "/me.jpg",
    "/me1.jpg",
    "/me2.jpeg",
    "/me3.jpeg",
    "/me4.jpeg",
];

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="min-h-screen text-white px-6 flex flex-col md:flex-row items-stretch justify-center relative overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 md:pr-6 flex flex-col items-center mb-12 md:mb-0 pt-12">
        <div className="relative z-10 flex flex-col items-center">
          {/* Gallery */}
          <div className="relative w-80 h-80 mb-6">
            <Image
              src={galleryImages[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              fill
              className="object-cover border-4 border-gray-200 shadow-lg"
            />
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600"
            >
              &lt;
            </button>
            {/* Right Button */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600"
            >
              &gt;
            </button>
          </div>

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

          {/* Hobbies Section */}
          <section className="mt-12 w-full max-w-4xl mb-12">
            <h2 className="text-3xl font-bold mb-4">⭐Favorites</h2>
            <ul className="list-inside text-gray-300">
              <li>🎥&ensp;<span className="font-bold">Movie:</span> Mid90s</li>
              <li>📺&ensp;<span className="font-bold">TV Show:</span> Breaking Bad</li>
              <li>🎮&ensp;<span className="font-bold">Game:</span> Terraria</li>
              <li>📚&ensp;<span className="font-bold">Book:</span> Tokyo Ghoul</li>
            </ul>
          </section>

          <div className="mt-8 flex gap-6">
            <Link
              href="https://github.com/sloorjuice"
              target="_blank"
              className="text-blue-500 hover:text-gray-300"
            >
              <FaGithub size={30} />
            </Link>
            <Link
              href="https://linktr.ee/sloorjuice"
              target="_blank"
              className="text-blue-500 hover:text-gray-300"
            >
              <SiLinktree size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anthony-reynolds-b90811355/"
              target="_blank"
              className="text-blue-500 hover:text-gray-300"
            >
              <FaLinkedin size={30} />
            </Link>
          </div>
          <div className="flex gap-4 mt-4">
            <Link
              href="mailto:contact@sloor.dev"
              className="text-blue-500 hover:underline"
            >
              contact@sloor.dev
            </Link>
            <Link
              href="tel:+18144312013"
              className="text-blue-500 hover:underline"
            >
              (814) 431-2013
            </Link>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="bg-gray-400 h-px w-full my-6 md:my-0 md:w-px md:h-auto md:self-stretch md:mx-6" />

      {/* Right Section */}
      <div className="w-full md:w-1/2 md:pl-6">
        {/* Featured Projects Section */}
        <section className="mt-12 w-full max-w-4xl flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Featured Project
          </h2>
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

        {/* Skills Section */}
        <section className="mt-12 w-full max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>TypeScript, JavaScript, React, and Node.js</li>
            <li>Tailwind CSS, HTML5, and CSS3</li>
            <li>Responsive, accessible web applications</li>
            <li>Git + GitHub for version control</li>
            <li>Deploying with Netlify and Vercel</li>
          </ul>
        </section>

        {/* Hobbies Section */}
        <section className="mt-12 w-full max-w-4xl mb-12">
          <h2 className="text-3xl font-bold mb-4">Hobbies</h2>
          <ul className="list-inside text-gray-300">
            <li>🛹&ensp;Skateboarding and exploring new spots</li>
            <li>🌳&ensp;Photography and Nature</li>
            <li>🕹️&ensp;Gaming and staying current with the scene</li>
            <li>💻&ensp;Learning new dev tools and leveling up</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
