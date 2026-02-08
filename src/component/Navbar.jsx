// JaagoNavbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/painted Dreams logo.jpeg";

const COLORS = {
  bgDark: " #AA4A44",
  accentRed: "#EF4444", // Red accent
};

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeDrawer = () => setIsMobileOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-700"
      style={{ backgroundColor: COLORS.bgDark }}
    >
      <div className="w-full h-20 flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeDrawer}>
          <img src={Logo} alt="Logo" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-serif font-bold text-white">
            Painted Dreams
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex justify-center items-center gap-5 bg-white rounded-full px-5 py-2 shadow-md max-w-[700px] w-full">
          <Link
            to="/"
            className="px-4 py-2 text-lg font-semibold text-black rounded-full transition-colors hover:bg-red-500 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="px-4 py-2 text-lg font-semibold text-black rounded-full transition-colors hover:bg-red-500 hover:text-white"
          >
            Gallery
          </Link>
          <Link
            to="/artist"
            className="px-4 py-2 text-lg font-semibold text-black rounded-full transition-colors hover:bg-red-500 hover:text-white"
          >
            Artist
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="h-12 px-6 inline-flex items-center justify-center rounded-2xl text-lg font-bold bg-red-500 text-white hover:bg-white hover:text-red-500 border-2 border-red-500 transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(true)}
          className="lg:hidden h-12 w-12 flex items-center justify-center"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeDrawer}
          />
          <div className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl overflow-y-auto z-50">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <Link to="/" className="flex items-center gap-2" onClick={closeDrawer}>
                <img src={Logo} alt="Logo" className="h-10 w-10 object-contain" />
                <span className="text-xl font-bold text-white">
                  Art Gallery
                </span>
              </Link>
              <button
                onClick={closeDrawer}
                className="h-10 w-10 flex items-center justify-center"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            <div className="px-5 py-6 flex flex-col gap-3">
              <Link
                to="/"
                onClick={closeDrawer}
                className="block py-3 text-lg font-semibold text-black rounded-lg hover:bg-red-500 hover:text-white transition-colors text-center"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                onClick={closeDrawer}
                className="block py-3 text-lg font-semibold text-black rounded-lg hover:bg-red-500 hover:text-white transition-colors text-center"
              >
                Gallery
              </Link>
              <Link
                to="/artist"
                onClick={closeDrawer}
                className="block py-3 text-lg font-semibold text-black rounded-lg hover:bg-red-500 hover:text-white transition-colors text-center"
              >
                Artist
              </Link>
              <div className="mt-6">
                <Link
                  to="/contact"
                  onClick={closeDrawer}
                  className="w-full h-14 flex items-center justify-center rounded-xl text-lg font-bold bg-red-500 text-white hover:bg-white hover:text-red-500 border-2 border-red-500 transition-all"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
