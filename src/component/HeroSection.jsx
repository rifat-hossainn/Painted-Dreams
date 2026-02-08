// HeroSection.jsx
import React from "react";
import HeroArtwork from "../assets/desktop1.png"; // replace with your image

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Artwork */}
      <img
        src={HeroArtwork}
        alt="Featured Artwork"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0  bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end text-center h-full mt-3 px-4 sm:px-6 lg:px-8">
        
       
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="/gallery"
            className="px-10 py-4 rounded-2xl bg-red-500 text-white font-semibold text-lg hover:bg-white hover:text-red-500 border-2 border-red-500 transition-all"
          >
            View Gallery
          </a>
          <a
            href="/contact"
            className="px-10 py-4 rounded-2xl bg-transparent text-white font-semibold text-lg border-2 border-white hover:bg-red-500 hover:text-white transition-all"
          >
            Contact Artist
          </a>
        </div>
      </div>
    </section>
  );
}
