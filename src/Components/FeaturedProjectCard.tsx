import React from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface FeaturedProjectCardProps {
  title: string;
  description: string;
  image: string;
  projectLink: string;
  githubLink?: string;
}

export default function FeaturedProjectCard({
  title,
  description,
  image,
  projectLink,
  githubLink,
}: FeaturedProjectCardProps) {
  return (
    <div
      onClick={() => window.open(projectLink, "_blank")}
      className="flex items-center bg-[rgba(200,180,255,0.45)] backdrop-blur-xl rounded-xl shadow-[0_4px_32px_rgba(140,120,200,0.18)] mx-auto hover:scale-[1.03] transition-transform relative border border-[rgba(180,160,255,0.45)] w-full max-w-xl min-h-[72px] h-[72px] p-2 cursor-pointer"
      style={{
        boxShadow: "0 8px 32px 0 rgba(140,120,200,0.18)",
        border: "1.5px solid rgba(180,160,255,0.45)",
        background: "linear-gradient(135deg, rgba(200,180,255,0.65) 0%, rgba(221,214,243,0.45) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="flex-shrink-0 w-14 h-14 relative rounded-lg overflow-hidden mr-3">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="56px"
        />
      </div>
      <div className="flex-1 min-w-0 pr-2">
        <h3 className="font-bold text-white mb-0.5 text-base truncate">{title}</h3>
        <p className="text-white text-xs line-clamp-2">{description}</p>
      </div>
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="ml-2 text-white hover:text-[#e6d6ff] flex-shrink-0"
        >
          <FaGithub size={18} />
        </a>
      )}
    </div>
  );
}