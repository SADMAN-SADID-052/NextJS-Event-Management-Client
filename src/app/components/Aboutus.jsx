"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function AboutUs() {
  const themeMode = useSelector((state) => state.themeToggle.mode);

  const isDark = themeMode === "dark";

  return (
    <section
      className={`py-16 px-6 transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold leading-tight ${
                isDark ? "text-gray-200" : "text-gray-900"
              }`}
            >
              About <span className="text-primary">EventSphere</span>
            </h2>

            <p
              className={`mt-4 max-w-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              EventSphere is a lightweight event management platform that helps
              communities, universities, and organizers create, discover, and
              join events easily. We focus on clarity, speed, and an intuitive
              experience for both organizers and participants.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <Link href="/register" className="btn btn-primary rounded-sm">
                Join Now
              </Link>

              <Link
                href="/Events"
                className={`btn rounded-sm ${
                  isDark
                    ? "btn-outline text-primary"
                    : "btn-outline text-blue-600"
                }`}
              >
                Browse Events
              </Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
              alt="events crowd"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Mission & Stats */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Mission */}
          <article
            className="p-6 rounded-xl shadow-sm text-white"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(30,64,175,0.9), rgba(17,24,39,0.9)), url("https://res.cloudinary.com/dloasaxt1/image/upload/v1758538560/7472e3205063d5e8003bca47d4c4b781_blgerc.jpg")`,
            }}
          >
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="mt-3 text-gray-200">
              Empower organizers to create memorable events and help people
              discover experiences that matter.
            </p>
          </article>

          {/* Stats Card 1 */}
          <div
            className={`flex flex-col gap-4 rounded-2xl p-8 text-center transition-all duration-300 border ${
              isDark
                ? "bg-white/10 backdrop-blur-lg border-white/20 text-white"
                : "bg-white shadow-lg border-gray-200 text-gray-900"
            }`}
          >
            <div className="p-6 rounded-xl bg-[#263D5D] text-white">
              <span className="text-3xl font-bold">1.2K+</span>
              <span className="block text-sm">Events Created</span>
            </div>

            <div className="p-6 rounded-xl bg-[#32408D] text-white">
              <span className="text-3xl font-bold">8K+</span>
              <span className="block text-sm">Attendees Joined</span>
            </div>
          </div>

          {/* Stats Card 2 */}
          <div
            className={`flex flex-col gap-4 rounded-2xl p-8 text-center transition-all duration-300 border ${
              isDark
                ? "bg-white/10 backdrop-blur-lg border-white/20 text-white"
                : "bg-white shadow-lg border-gray-200 text-gray-900"
            }`}
          >
            <div className="p-6 rounded-xl bg-[#32408D] text-white">
              <span className="text-3xl font-bold">99%</span>
              <span className="block text-sm">Organizer Satisfaction</span>
            </div>

            <div className="p-6 rounded-xl bg-[#263D5D] text-white">
              <span className="text-3xl font-bold">50+</span>
              <span className="block text-sm">Partner Organizations</span>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div
          className={`mt-12 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-300 ${
            isDark
              ? "bg-gradient-to-r from-primary/20 to-secondary/20"
              : "bg-blue-50"
          }`}
        >
          <div>
            <h4
              className={`text-lg font-semibold ${
                isDark ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Ready to create your first event?
            </h4>
            <p
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Get started in minutes and invite your community.
            </p>
          </div>

          <div className="flex gap-3">
            <Link href="/add-event" className="btn btn-primary">
              Create Event
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
