"use client";

import React, { useState } from "react";
import ProjectCard from "@/Components/ProjectCard";
import { FaSkating } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi"; // Chevron icon for better look

export default function PortfolioPage() {
  const [showPersonal, setShowPersonal] = useState(true);
  const [showClient, setShowClient] = useState(true);

  const personalProjects = [
    {
      id: 0,
      title: "iSkate",
      description:
        "The All-In-One Skateboarding Companion App. Made by skaters for skaters. Save and view skate spots online using the SkateMap. Check off and keep track of your tricks on your TrickList. Post your best skate clips and pics.",
      image: "/images/portfolio/iskateicon.png",
      projectLink: "https://iSkate.app",
      icon: <FaSkating size={32} className="text-blue-400" />,
    },
    { 
      id: 1,
      title: "Of The Day!",
      description: "A simple website that beautifully displays Quote of the day, Songs of the day, Games of the day, etc. The idea is to be a website to easily find a new album, new multiplayer game or something along those lines. I made this project using react and the Spotify API and Rawg API so far.",
      image: "/images/portfolio/personal1.jpg",
      projectLink: "https://www.oftheday.world/",
      githubLink: "https://github.com/sloorjuice/oftheday",
    },
    {
      id: 2,
      title: "Useful Randomizer",
      description: "A simple website made using React, Firebase, and the Steam API. Easily create an account and connect your steam ID to randomize your library when you're not sure what to play.",
      image: "/images/portfolio/personal2.jpg",
      projectLink: "https://usefulrandomzier.netlify.app/",
      githubLink: "https://github.com/sloorjuice/usefulrandomizer",
    },
    {
      id: 3,
      title: "Pokedex Unlimited",
      description: "A very simple website made with react that uses the pokeapi to allow you to search for pokemon, browse through random pokemon, add your favorites to a list, etc.",
      image: "/images/portfolio/personal3.jpg",
      projectLink: "https://pokedexunlimited.netlify.app",
      githubLink: "https://github.com/sloorjuice/pokedexunlimited",
    },
  ];

  const clientWork = [
    {
      id: 1,
      title: "Example Local Website",
      description: "A simple example website made for a local business. The website is a simple landing page that allows the business to showcase their services and contact information, along with another page for the menu. This website is only 2-3 hours of work.",
      image: "/images/portfolio/client1.jpg",
      projectLink: "https://funexamplewebsite.netlify.app/",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-12 text-white">
      {/* Personal Projects Section */}
      <section className="mb-12">
        <button
          className="flex items-center justify-between text-3xl font-semibold mb-6 border-b-2 border-gray-500 pb-2 w-full hover:text-blue-400 transition-colors group"
          onClick={() => setShowPersonal((v) => !v)}
          aria-expanded={showPersonal}
          aria-controls="personal-projects"
        >
          <span>Personal Projects</span>
          <FiChevronDown
            className={`ml-2 transition-transform duration-300 text-2xl text-blue-300/80 group-hover:text-blue-400 drop-shadow-sm
              ${showPersonal ? "rotate-0" : "-rotate-90"}
            `}
            style={{
              filter: "drop-shadow(0 2px 6px rgba(59,130,246,0.15))",
              opacity: 0.85,
            }}
            aria-hidden
          />
        </button>
        <div
          id="personal-projects"
          className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 transition-all duration-300`}
          style={{
            maxHeight: showPersonal ? "2000px" : "0",
            opacity: showPersonal ? 1 : 0,
            marginBottom: showPersonal ? undefined : 0,
            paddingBottom: showPersonal ? undefined : 0,
          }}
        >
          {showPersonal &&
            personalProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                projectLink={project.projectLink}
                githubLink={project.githubLink}
              />
            ))}
        </div>
      </section>

      {/* Client Work Section */}
      <section>
        <button
          className="flex items-center justify-between text-3xl font-semibold mb-6 border-b-2 border-gray-500 pb-2 w-full hover:text-blue-400 transition-colors group"
          onClick={() => setShowClient((v) => !v)}
          aria-expanded={showClient}
          aria-controls="client-work"
        >
          <span>Client Work</span>
          <FiChevronDown
            className={`ml-2 transition-transform duration-300 text-2xl text-blue-300/80 group-hover:text-blue-400 drop-shadow-sm
              ${showClient ? "rotate-0" : "-rotate-90"}
            `}
            style={{
              filter: "drop-shadow(0 2px 6px rgba(59,130,246,0.15))",
              opacity: 0.85,
            }}
            aria-hidden
          />
        </button>
        <div
          id="client-work"
          className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 transition-all duration-300`}
          style={{
            maxHeight: showClient ? "2000px" : "0",
            opacity: showClient ? 1 : 0,
            marginBottom: showClient ? undefined : 0,
            paddingBottom: showClient ? undefined : 0,
          }}
        >
          {showClient &&
            clientWork.map((work) => (
              <ProjectCard
                key={work.id}
                title={work.title}
                description={work.description}
                image={work.image}
                projectLink={work.projectLink}
              />
            ))}
        </div>
      </section>
    </main>
  );
}