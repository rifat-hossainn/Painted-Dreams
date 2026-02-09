import { useState } from "react";
import { useNavigate } from "react-router-dom";
import art3 from "../assets/art/Blue Embrace.jpeg"
import art1 from "../assets/art/Autumn Whisper.jpeg";
import art2 from "../assets/art/Rainy Comfort.jpeg";
import art5 from "../assets/art/Bright Wings.jpeg";
import art4 from "../assets/art/Golden Snow.jpeg";
import art6 from "../assets/art/Red Charm.jpeg";
import art7 from "../assets/art/Open Horizon.jpeg";
import art8 from "../assets/art/Night Glow.jpeg";
import art9 from "../assets/art/Pure Love.jpeg";
import art10 from "../assets/art/Tasty Combo.jpeg";
const artworks = [
  {
    id: 8,
    title: "Night Glow",
    description:
      "A calm painting of soft lights glowing in the dark sky",
    medium: "Acrylic on Canvas",
    year: "2026",
    image: art8,
  },
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
  {
    id: 4,
    title: "Golden Snow",
    description:
      " Soft snow falls while warm yellow light glows gently across the sky",
    medium: "Acrylic on Canvas",
    year: "2025",
    image: art4,
  },
  {
    id: 5,
    title: "Bright Wings",
    description:
      " A colorful butterfly spreads its wings, showing beauty, joy, and new life",
    medium: "Acrylic on Canvas",
    year: "2025",
    image: art5,
  },
  {
    id: 6,
    title: "Red Charm",
    description:
      "A beautiful girl wears a red hat, standing out with quiet grace and confidence.",
    medium: "Acrylic on Canvas",
    year: "2025",
    image: art6,
  },
  {
    id: 7,
    title: "Open Horizon",
    description:
      "A lone ship sails calmly beneath a clear blue sky",
    medium: "Acrylic on Canvas",
    year: "2025",
    image: art7,
  },
   {
    id: 9,
    title: "Pure Love",
    description:
      " A couple by the sea with roses and a flowing white gown, sharing a calm moment together",
    medium: "Acrylic on Canvas",
    year: "2026",
    image: art9,
  },

  {
    id: 10,
    title: "Tasty Combo",
    description:
      "  A juicy burger served with crispy French fries and a chilled cold coffee.",
    medium: "Acrylic on Canvas",
    year: "2026",
    image: art10,
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 mt-11 px-4 md:px-16 py-12">
      <h1 className="text-4xl font-serif font-bold text-center mb-14">
        Art Gallery
      </h1>

      <div className="space-y-16">
        {artworks.map((art, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={art.id}
              className={`flex flex-col ${
                isReverse ? "md:flex-row-reverse" : "md:flex-row"
              } bg-white rounded-2xl shadow-lg overflow-hidden`}
            >
              {/* Image */}
              <div
                className="md:w-1/2 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(art.image)}
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold mb-3">
                  {art.title}
                </h2>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  {art.description}
                </p>

                <div className="text-sm text-gray-500 space-y-1 mb-6">
                  <p>
                    <span className="font-medium">Medium:</span>{" "}
                    {art.medium}
                  </p>
                  <p>
                    <span className="font-medium">Year:</span>{" "}
                    {art.year}
                  </p>
                </div>

                <button
                  onClick={() => navigate("/contact")}
                  className="w-fit px-6 py-2 rounded-xl bg-red-500 text-white hover:bg-gray-800 transition"
                >
                  Contact Artist
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full View Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Artwork Full View"
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
