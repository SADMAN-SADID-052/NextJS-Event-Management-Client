"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Meetteam = () => {
  const themeMode = useSelector((state) => state.themeToggle.mode);

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
      photo: "https://i.pravatar.cc/150?img=12",
    },
  ];
  return (
    <div>
      {/* Team */}
      <div className="py-16 px-6">
        <div>
          <h2
            className={`text-3xl md:text-4xl  font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent
                        ${
                          themeMode === "dark"
                            ? "from-white via-blue-500 to-gray-400"
                            : "from-gray-400 via-blue-700 to-slate-600"
                        }`}
          >
            Meet Our Team
          </h2>
        </div>

        <div className="h-1 w-46 bg-gradient-to-r from-blue-400 to-indigo-500  rounded-full animate-pulse" />
        <p className="mt-2 text-gray-300">
          A small team building big experiences.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg hover:border-2 hover:border-sky-500"
            >
              <div className="flex items-center gap-4 ">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{m.name}</h4>
                  <p className="text-sm text-gray-400">{m.role}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-300">
                Passionate about building useful tools for communities and
                creating delightful event experiences.
              </p>

              <div className="mt-4 flex gap-2">
                <Link
                  className="btn btn-sm btn-outline text-white hover:text-blue-400 rounded-sm"
                  href="#"
                >
                  View
                </Link>
                <Link
                  className="btn btn-sm btn-primary text-white  hover:text-blue-400 rounded-sm"
                  href="#"
                >
                  Contact
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meetteam;
