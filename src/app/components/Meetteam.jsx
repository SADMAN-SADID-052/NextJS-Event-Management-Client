"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Meetteam = () => {
  const themeMode = useSelector((state) => state.themeToggle.mode);
  const isDark = themeMode === "dark";

  const team = [
    {
      name: "Alice Johnson",
      role: "Founder & CEO",
      photo: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Rahul Kumar",
      role: "Product Lead",
      photo: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Mark Zuckerberg",
      role: "Community Manager",
      photo: "https://i.pravatar.cc/150?img=13",
    },
  ];

  return (
    <section className="py-16 px-6 transition-colors duration-300">
      {/* Heading */}
      <div>
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent
            ${
              isDark
                ? "from-white via-blue-500 to-gray-400"
                : "from-gray-600 via-blue-700 to-indigo-600"
            }`}
        >
          Meet Our Team
        </h2>

        <div className="h-1 w-48 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-pulse" />

        <p
          className={`mt-2 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          A small team building big experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <div
            key={m.name}
            className={`rounded-xl p-5 border transition-all duration-300 hover:shadow-lg
              ${
                isDark
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200 shadow-sm"
              }
              hover:border-sky-500
            `}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {m.name}
                </h4>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {m.role}
                </p>
              </div>
            </div>

            <p
              className={`mt-4 text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate about building useful tools for communities and creating
              delightful event experiences.
            </p>

            <div className="mt-4 flex gap-2">
              <Link
                href="#"
                className={`btn btn-sm rounded-sm ${
                  isDark
                    ? "btn-outline text-white hover:text-blue-400"
                    : "btn-outline text-blue-600 hover:text-blue-700"
                }`}
              >
                View
              </Link>

              <Link
                href="#"
                className="btn btn-sm btn-primary rounded-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meetteam;
