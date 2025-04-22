"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  projectLink: string;
  githubLink?: string; // Optional GitHub link
}

export default function ProjectCard({ title, description, image, projectLink, githubLink }: ProjectCardProps) {
  return (
    <div
      onClick={() => window.open(projectLink, "_blank")}
      className="cursor-pointer bg-gray-800 rounded-lg shadow-[0_4px_6px_rgba(255,255,255,0.2)] overflow-hidden max-w-sm mx-auto hover:scale-105 transition-transform relative"
    >
      <Image
        src={image}
        alt={title}
        width={400} // Adjust width as needed
        height={300} // Adjust height as needed
        className="object-cover rounded-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 pb-4">{description}</p> {/* Add padding-bottom */}
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-gray-300"
        >
        </a>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevent parent click
            className="absolute bottom-1.5 right-4 text-blue-500 hover:text-gray-300"
          >
            <FaGithub size={24} />
          </a>
        )}
      </div>
    </div>
  );
}