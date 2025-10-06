// components/AboutUs.jsx
"use client"; // remove if using pages router non-client environment
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function AboutUs() {
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
      name: "Nusrat Jahan",
      role: "Community Manager",
      photo: "https://i.pravatar.cc/150?img=48",
    },
  ];

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-200">
              About <span className="text-primary">EventSphere</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-xl">
              EventSphere is a lightweight event management platform that helps
              communities, universities, and organizers create, discover, and
              join events easily. We focus on clarity, speed, and an intuitive
              experience for both organizers and participants.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a className="btn btn-primary" href="/register">
                Join Now
              </a>
              <Link className="btn btn-ghost" href="/Events">
                Browse Events
              </Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg ">
      
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5b5b7f101a8b2d6d541a7a9a1d3a9c9c"
              alt="events crowd"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Mission & Stats */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <article className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
            style={{
                backgroundImage: `linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(55, 65, 81, 0.8)), url("https://res.cloudinary.com/dloasaxt1/image/upload/v1758538560/7472e3205063d5e8003bca47d4c4b781_blgerc.jpg")`,
            }}
          >
            <h3 className="text-lg font-semibold text-white">Our Mission</h3>
            <p className="mt-3 text-gray-300">
              Empower organizers to create memorable events and help people
              discover experiences that matter. We build simple tools with
              powerful results.
            </p>
          </article>

          <div className="flex flex-col gap-4  bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 text-center shadow-2xl hover:shadow-blue-500/25 active:shadow-blue-500/25 transition-all duration-500 border border-white/20 hover:border-blue-400/50 active:border-blue-400/50 overflow-hidden">
            <div className="p-6 rounded-xl bg-[#263D5D] flex flex-col text-white">
              <span className="text-3xl font-bold">1.2K+</span>
              <span className="text-sm ">Events Created</span>
            </div>
            <div className="p-6 rounded-xl  flex flex-col bg-[#32408D] text-white">
              <span className="text-3xl font-bold">8K+</span>
              <span className="text-sm">Attendees Joined</span>
            </div>
          </div>

          <div className="flex flex-col gap-4  bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 text-center shadow-2xl hover:shadow-blue-500/25 active:shadow-blue-500/25 transition-all duration-500 border border-white/20 hover:border-blue-400/50 active:border-blue-400/50 overflow-hidden">
            <div className="p-6 rounded-xl flex flex-col bg-[#32408D] text-white">
              <span className="text-3xl font-bold ">99%</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Organizer Satisfaction
              </span>
            </div>
            <div className="p-6 rounded-xl bg-[#263D5D] flex flex-col text-white">
              <span className="text-3xl font-bold">50+</span>
              <span className="text-sm">Partner Organizations</span>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mt-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r bg-clip-text text-transparent
    ${
      themeMode === "dark"
        ? "from-white via-blue-300 to-gray-300"
        : "from-gray-800 via-blue-700 to-slate-900"
    }`}
          >
            Meet Our Team
          </h2>

          <div className="h-1 w-36 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full animate-pulse" />
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            A small team building big experiences.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition hover:border-2 hover:border-purple-900"
              >
                <div className="flex items-center gap-4 ">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-full h-full object-cover"
                    />
                    {/* If using Next/Image:
                        <Image src={m.photo} width={64} height={64} alt={m.name} className="rounded-full" />
                    */}
                  </div>
                  <div>
                    <h4 className="font-semibold">{m.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {m.role}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  Passionate about building useful tools for communities and
                  creating delightful event experiences.
                </p>

                <div className="mt-4 flex gap-2">
                  <Link className="btn btn-sm btn-outline" href="#">
                    View
                  </Link>
                  <Link className="btn btn-sm btn-primary" href="#">
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold">
              Ready to create your first event?
            </h4>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              Get started in minutes and invite your community.
            </p>
          </div>
          <div className="flex gap-3">
            <a className="btn btn-primary" href="/add-event">
              Create Event
            </a>
            <a className="btn btn-ghost" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
