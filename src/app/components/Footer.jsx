"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* Logo + About */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Image
              src="https://img.icons8.com/?size=160&id=89mMekprYMUs&format=png"
              alt="BlogCraft Logo"
              width={40}
              height={40}
              className="object-contain"
              unoptimized
            />
            <h1 className="text-2xl font-semibold text-white">EventSphere</h1>
          </div>
          {/* <p className="text-gray-400 text-sm">
          
          </p> */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-400 uppercase font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400">
                Events
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-blue-400">
                Add Event
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-gray-400 uppercase font-semibold mb-4">
            Categories
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-400">
               Wedding
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
               Hackathon 
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Workshop
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Birthday
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Music Fest
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">Stay Updated</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest events and updates.
          </p>
          <form className="flex flex-col sm:flex-row items-center sm:space-x-2 space-y-2 sm:space-y-0">
            <input
              type="text"
              placeholder="Enter your email"
              className="sm:w-auto flex-1 bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            
            />
            <button
              type="submit"
              className="bg-[#605DFF] hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © 2025 EventSphere. All rights reserved.
      </div>
    </footer>
  );
}
