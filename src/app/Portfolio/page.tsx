"use client";

import React from "react";
import ProjectCard from "@/Components/ProjectCard";

export default function PortfolioPage() {
  const personalProjects = [
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
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-500 pb-2">Personal Projects</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
          {personalProjects.map((project) => (
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

      <section>
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-500 pb-2">Client Work</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
          {clientWork.map((work) => (
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