import { FaFacebookF, FaWhatsapp, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number including country code
    const number = "441234567890";
    const url = `https://wa.me/${number}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fafafa] mt-11 px-4 md:px-20 py-16">
      
      {/* Headline */}
      <h1 className="text-5xl font-serif font-extrabold text-center mb-16 text-gray-900">
        Let’s Connect & Create Together
      </h1>

      {/* Contact Info Wrapper */}
      <div className="max-w-4xl mx-auto border border-black px-8 py-12 md:px-14 md:py-16">

        {/* Intro Text */}
        <p className="text-gray-700 text-lg mb-10 text-center">
          I’m always excited to collaborate, answer questions, or share ideas.
          Reach me via social media, WhatsApp, email, or visit me in the UK!
        </p>

        {/* Contact Items */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Facebook */}
          <div className="border border-black p-6 flex items-center gap-4 hover:bg-gray-50 transition">
            <FaFacebookF className="text-2xl text-blue-600" />
            <div>
              <h4 className="font-semibold mb-1">Facebook</h4>
              <a
                href="https://www.facebook.com/share/17vo7yyVgA/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                facebook.com/yourfacebookpage
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="border border-black p-6 flex items-center gap-4 hover:bg-gray-50 transition">
            <FaWhatsapp className="text-2xl text-green-600" />
            <div>
              <h4 className="font-semibold mb-1">WhatsApp</h4>
              <p className="text-gray-700">+447448576324</p>
            </div>
          </div>

          {/* Email */}
          <div className="border border-black p-6 flex items-center gap-4 hover:bg-gray-50 transition">
            <FaEnvelope className="text-2xl text-red-500" />
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-gray-700">rifarafia2016@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="border border-black p-6 flex items-center gap-4 hover:bg-gray-50 transition">
            <FaPhone className="text-2xl text-gray-800" />
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-gray-700">+447448576324</p>
            </div>
          </div>

          {/* Location */}
          <div className="border border-black p-6 flex items-center gap-4 hover:bg-gray-50 transition md:col-span-2">
            <FaLocationDot className="text-2xl text-indigo-600" />
            <div>
              <h4 className="font-semibold mb-1">Location</h4>
              <p className="text-gray-700">London, United Kingdom</p>
            </div>
          </div>

        </div>

        {/* WhatsApp CTA Button */}
        <div className="text-center mt-14">
          <button
            onClick={handleWhatsAppClick}
            className="inline-block px-8 py-4 border border-black text-gray-900 font-semibold rounded-full hover:bg-green-600 hover:text-white transition"
          >
            Send a WhatsApp Message
          </button>
        </div>

      </div>
    </div>
  );
}
