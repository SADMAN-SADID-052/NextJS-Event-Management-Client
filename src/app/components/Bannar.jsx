"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Bannar = () => {
  // 🔹 Images for the rotating banner
  const banners = [
    { src: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVjaCUyMENvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D", alt: "Tech Conference" },
    { src: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGFja2F0aG9ufGVufDB8fDB8fHww", alt: "Innovation Showcase" },
    { src: "https://images.unsplash.com/photo-1621685743771-fd5e13734ae6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGhvdG9ncmFwaHklMjBFeGhpYml0aW9ufGVufDB8fDB8fHww", alt: "Networking Event" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-[#0b0b0f] text-white px-6 md:px-20 py-16 md:py-24 overflow-hidden">
      {/* Left Section */}
      <div className="max-w-xl space-y-6">
        <p className="text-gray-400 font-medium">
          15–17 December • National IT Hall
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Tech Innovation <br /> Event 2025
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Tech Innovation Event 2025: Unveiling breakthrough technologies and
          networking opportunities for industry pioneers.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] px-6 py-3 rounded-lg font-semibold transition">
            Buy Tickets
          </button>
          <button className="border border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white px-6 py-3 rounded-lg font-semibold transition">
            See Schedule
          </button>
        </div>
      </div>

      {/* Right Section — Dynamic Banner */}
      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center relative">
        <div className="relative w-full max-w-lg h-[350px] rounded-[2rem] overflow-hidden border-4 border-[#3b82f6] shadow-[0_0_40px_rgba(59,130,246,0.4)]">
          {/* Current Image */}
          <Image
            src={banners[currentIndex].src}
            alt={banners[currentIndex].alt}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-opacity duration-700 ease-in-out"
            priority
          />

          {/* Optional Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-white" : "bg-gray-500"
                } transition-all duration-300`}
              ></span>
            ))}
          </div>
        </div>

        {/* Decorative sparkles */}
        <span className="absolute top-4 right-6 text-yellow-400 text-2xl animate-pulse">
          ✨
        </span>
        <span className="absolute bottom-8 left-6 text-purple-400 text-2xl animate-pulse">
          🌟
        </span>
      </div>
    </section>
  );
};

export default Bannar;
