// src/components/Footer.jsx
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Logo from "../assets/painted Dreams logo.jpeg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ===== Main Footer Content ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border border-gray-700 p-8 rounded-2xl">

          {/* ---- Brand / Gallery Info ---- */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={Logo}
              alt="Art Gallery Logo"
              className="h-14 w-14 mb-4 object-contain"
            />
            <h2 className="text-2xl font-serif font-bold text-white mb-3">
              Painted Dreams
            </h2>
            <p className="text-sm leading-relaxed max-w-sm">
              A curated space showcasing modern and contemporary artworks.
              Discover stories, emotions, and creativity through visual form.
            </p>
          </div>

          {/* ---- Navigation ---- */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-red-400 transition">Home</a></li>
              <li><a href="/gallery" className="hover:text-red-400 transition">Gallery</a></li>
              <li><a href="/artist" className="hover:text-red-400 transition">Artists</a></li>
              <li><a href="/contact" className="hover:text-red-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* ---- Contact & Social ---- */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect
            </h3>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm mb-2">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>London, United Kingdom</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-sm mb-2">
              <Mail className="w-4 h-4 text-red-400" />
              <span>rifarafia2016@gmail.com</span>
            </div>

            {/* WhatsApp */}
            <button
              onClick={() => window.open("https://wa.me/+447448576324", "_blank")}
              className="flex items-center gap-2 text-sm mb-2 hover:text-green-400 transition"
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
              <span>+447448576324</span>
            </button>

            {/* Phone */}
            <div className="flex items-center gap-2 text-sm mb-4">
              <Mail className="w-4 h-4 text-gray-300" />
              <span>+44 7912 345678</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-2">
              <a href="https://www.instagram.com/rifarafia__?igsh=Zml4Nnd4MTRhd295" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/17vo7yyVgA/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              
            </div>
          </div>

        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Painted Dreams All rights reserved.
        </div>
      </div>
    </footer>
  );
}
