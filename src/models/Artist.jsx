import portrait from "../assets/artist.jpeg";
import {
  FaPalette,
  FaAward,
  FaImages,
  FaLocationDot,
  FaBrush,
} from "react-icons/fa6";

export default function Artist() {
  return (
    <div className="min-h-screen bg-[#fafafa] mt-10 px-4 md:px-20 py-16">
      {/* Page Title */}
      <h1 className="text-4xl font-serif font-extrabold text-center mb-12 text-gray-900">
        Rifa Rafia the Artist
      </h1>

      {/* HERO IMAGE */}
      <div className="flex justify-center mb-10">
        <img
          src={portrait}
          alt="Artist Portrait"
          className="w-full md:w-[70%] h-[90%] object-contain rounded-xl border border-black"
        />
      </div>

      {/* ALL CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto border border-black px-6 md:px-14 py-14">
        {/* BASIC INFO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            Rifa Rafia
          </h2>
          <p className="text-gray-600 font-sans text-lg">
            Contemporary Visual Artist
          </p>
        </div>

        {/* STORY + VISION */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold mb-4 flex font-serif items-center gap-3">
            <FaPalette className="text-indigo-500" />
            Artist Statement
          </h3>

          <p className="text-gray-700 leading-relaxed mb-5">
            Welcome to my art world! I am a passionate artist with several years
            of experience in creating original hand-painted artworks inspired by
            nature, emotions, and everyday beauty. Over the years, my work has
            been appreciated by art lovers and clients for its detail, harmony,
            and quality. Each piece is carefully created using premium materials
            to ensure lasting beauty and value. My goal is to bring warmth,
            calm, and positive energy into your space through meaningful art.
            Thank you for trusting my work and supporting independent artists.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Rather than depicting reality as it appears, my work seeks to
            capture how it feels. Each painting invites the viewer to pause,
            reflect, and interpret their own meaning.
          </p>
        </div>

        {/* ADDITIONAL DETAILS */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="border border-black p-6">
            <FaBrush className="text-2xl mb-3" />
            <h4 className="font-semibold mb-1">Medium</h4>
            <p>Oil & Acrylic on Canvas</p>
          </div>

          <div className="border border-black p-6">
            <FaImages className="text-2xl mb-3" />
            <h4 className="font-semibold mb-1">Style</h4>
            <p>Abstract / Contemporary</p>
          </div>

          <div className="border border-black p-6">
            <FaLocationDot className="text-2xl mb-3" />
            <h4 className="font-semibold mb-1">Based In</h4>
            <p>United kindom</p>
          </div>
        </div>

        {/* EXHIBITIONS & AWARDS */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Exhibitions & Awards
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Exhibitions */}
            <div className="border border-black p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <FaImages />
                Selected Exhibitions
              </h3>
              <ul className="space-y-3 list-disc list-inside">
                <li>2024 – Contemporary Art Fair, Dhaka</li>
                <li>2023 – Modern Expressions Gallery</li>
                <li>2022 – Emerging Artists Showcase</li>
              </ul>
            </div>

            {/* Awards */}
            <div className="border border-black p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <FaAward />
                Awards & Recognition
              </h3>
              <ul className="space-y-3 list-disc list-inside">
                <li>Best Emerging Artist – 2023</li>
                <li>National Art Competition Finalist – 2022</li>
                <li>Creative Excellence Award – 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
