
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

const HeroCard: React.FC<HeroCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#646e7a] via-[#b2bac2] to-white shadow-lg flex items-center min-h-[320px] md:min-h-[340px] p-8 md:p-14"
      style={{ minHeight: "320px" }}
    >
      {/* Background image with gradient overlay */}
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        style={{ zIndex: 1 }}
        draggable={false}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#47505aE6] via-[#b2bac260] to-[#fff6] pointer-events-none" style={{ zIndex: 2 }} />
      {/* Content */}
      <div className="relative z-10 max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 drop-shadow-lg">{title}</h2>
        <p className="text-lg md:text-xl text-white mb-8">{description}</p>
        <Button
          asChild
          className="bg-white/90 text-primary font-semibold rounded-md px-6 py-3 text-base hover:bg-white transition shadow"
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroCard;
