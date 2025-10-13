"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Bannar = () => {
  const banners = [
    {
      src: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVjaCUyMENvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D",
      alt: "Tech Conference",
    },
    {
      src: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGFja2F0aG9ufGVufDB8fDB8fHww",
      alt: "Innovation Showcase",
    },
    {
      src: "https://images.unsplash.com/photo-1621685743771-fd5e13734ae6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGhvdG9ncmFwaHklMjBFeGhpYml0aW9ufGVufDB8fDB8fHww",
      alt: "Networking Event",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center bg-[#0b0b0f] text-white px-6 sm:px-12 lg:px-8 py-16 sm:py-24 overflow-hidden">
      <div className="w-full max-w-[1290px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <p className="text-gray-400 font-medium">
            15–17 December • National IT Hall
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Tech Innovation <br /> Event 2025
          </h1>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Tech Innovation Event 2025: Unveiling breakthrough technologies and
            networking opportunities for industry pioneers.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <Link
              href="/"
              className="bg-[#605DFF] hover:bg-[#7c3aed] px-6 py-3 rounded-lg font-semibold transition"
            >
              Buy Tickets
            </Link>
            <button className="border border-[#605DFF] text-[#605DFF] hover:bg-[#8b5cf6] hover:text-white px-6 py-3 rounded-lg font-semibold transition">
              See Schedule
            </button>
          </div>
        </div>

        {/* Right Section — Dynamic Banner */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-full max-w-md sm:max-w-lg h-[250px] sm:h-[320px] md:h-[350px] rounded-2xl overflow-hidden border-4 border-[#3b82f6] shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <Image
              src={banners[currentIndex].src}
              alt={banners[currentIndex].alt}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-opacity duration-700 ease-in-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {banners.map((_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                    i === currentIndex ? "bg-white" : "bg-gray-500"
                  } transition-all duration-300`}
                />
              ))}
            </div>
          </div>

          <span className="absolute top-4 right-10 text-yellow-400 text-xl sm:text-2xl animate-pulse">
            ✨
          </span>
          <span className="absolute bottom-6 left-8 text-purple-400 text-xl sm:text-2xl animate-pulse">
            🌟
          </span>
        </div>
      </div>

      {/* Scroll symbol */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Bannar;
