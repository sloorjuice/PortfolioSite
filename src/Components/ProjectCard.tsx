"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  projectLink: string;
  githubLink?: string;
  cardSize?: "sm";
}

export default function ProjectCard({ title, description, image, projectLink, githubLink, cardSize }: ProjectCardProps) {
  return (
    <div
      onClick={() => window.open(projectLink, "_blank")}
      className={`cursor-pointer bg-[rgba(200,180,255,0.45)] backdrop-blur-xl rounded-xl shadow-[0_4px_32px_rgba(140,120,200,0.18)] mx-auto hover:scale-105 transition-transform relative border border-[rgba(180,160,255,0.45)] ${cardSize === "sm" ? "max-w-xs p-3" : "max-w-sm p-4"}`}
      style={{
        boxShadow: "0 8px 32px 0 rgba(140,120,200,0.18)",
        border: "1.5px solid rgba(180,160,255,0.45)",
        background: "linear-gradient(135deg, rgba(200,180,255,0.65) 0%, rgba(221,214,243,0.45) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <Image
        src={image}
        alt={title}
        width={cardSize === "sm" ? 180 : 400}
        height={cardSize === "sm" ? 135 : 300}
        className="object-cover rounded-t-xl"
      />
      <div className="p-2">
        <h3 className={`font-bold text-white mb-2 drop-shadow-sm ${cardSize === "sm" ? "text-base" : "text-xl"}`}>{title}</h3>
        <p className={`text-white pb-4 ${cardSize === "sm" ? "text-sm" : ""}`}>{description}</p>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-2 right-4 text-white hover:text-[#e6d6ff]"
          >
            <FaGithub size={cardSize === "sm" ? 18 : 24} />
          </a>
        )}
      </div>
    </div>
  );
}