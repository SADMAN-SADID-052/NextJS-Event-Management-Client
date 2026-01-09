"use client";

import React from "react";
import { useSelector } from "react-redux";
import Bannar from "./components/Bannar";
import AboutUs from "./components/Aboutus";
import Meetteam from "./components/Meetteam";

export default function Home() {
  const themeMode = useSelector((state) => state.themeToggle.mode);
  const isDark = themeMode === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
    >
      <Bannar />

      <div className="max-w-6xl mx-auto">
        <AboutUs />
        <Meetteam />
      </div>
    </div>
  );
}
