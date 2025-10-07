"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { TbLogin2 } from "react-icons/tb";
import { RiLogoutBoxRLine, RiUserAddLine } from "react-icons/ri";

export default function NavBar() {
  const pathname = usePathname();

  const NavItems = () => {
    const links = [
      { href: "/", label: "Home" },
      { href: "/Events", label: "Events" },
      { href: "/Addevent", label: "Add Event" },
      { href: "/Myevent", label: "My Event" },
      { href: "/Contact", label: "Contact" },
    ];

    return (
      <>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`px-3 py-2 rounded-md font-semibold transition-colors duration-300
                ${
                  pathname === href
                    ? "border-b-3 border-blue-600 text-white"
                    : "text-gray-300 hover:text-blue-500 "
                }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </>
    );
  };

  return (
    <div className="bg-black">
      <div className="navbar text-white">
        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavItems />
            </ul>
          </div>

          <div className="flex gap-2 items-center">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src="https://img.icons8.com/?size=160&id=89mMekprYMUs&format=png"
                width={70}
                height={60}
                alt="brand logo"
                unoptimized
              />
              <span className="text-xl font-bold">Eventura</span>
            </Link>
          </div>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItems />
          </ul>
        </div>

        {/* RIGHT (Auth buttons) */}
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/register">
                <button
                  type="button"
                  className="flex items-center justify-center font-medium transition-all duration-200 cursor-pointer whitespace-nowrap rounded-lg border-2 border-blue-600  bg-blue-600 text-white px-3 py-1.5 !text-xs"
                >
                  <RiUserAddLine />
                  Sign up
                </button>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <button
                  type="button"
                  className="flex items-center justify-center font-medium transition-all duration-200 cursor-pointer whitespace-nowrap rounded-lg border-2 border-blue-600 text-white hover:bg-blue-600 hover:text-white px-3 py-1.5 !text-xs"
                >
                  <TbLogin2 />
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
