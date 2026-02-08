// FeaturedArtSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import art3 from "../assets/art/Blue Embrace.jpeg"
import art1 from "../assets/art/Autumn Whisper.jpeg";
import art2 from "../assets/art/Rainy Comfort.jpeg";


// Sample featured artworks data here 
const artworks = [
   {
      id: 1,
      title: "Rainy Comfort",
      description:
        "Raindrops fall softly as a warm cup of tea brings calm and coziness.",
      medium: "Acrylic on Canvas",
      year: "2025",
      image: art2,
    },
    {
      id: 2,
      title: "Autumn Whisper",
      description:
        "Soft golden leaves fall in cool air, showing the calm and beauty of autumn",
      medium: "Acrylic on Canvas",
      year: "2025",
      image: art1,
    },
    {
      id: 3,
      title: "Blue Embrace",
      description:
        "A couple floats together under deep blue water, sharing a quiet and peaceful moment.",
      medium: "Acrylic on Canvas",
      year: "2025",
      image: art3,
    },
];

export default function FeaturedArtSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 font-serif text-center mb-16">
          Featured Artworks
        </h2>

        <div className="space-y-20">
          {artworks.map((art, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-12`}
              >
                {/* Text */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {art.title}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {art.description}
                  </p>
                </div>

                {/* Image as Button */}
                <div className="md:w-1/2 w-full">
                  <Link
                    to="/gallery"
                    className="group block relative overflow-hidden rounded-2xl shadow-xl"
                  >
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold tracking-wide">
                        View in Gallery →
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
