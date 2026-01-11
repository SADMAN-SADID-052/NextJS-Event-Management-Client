"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/app/Redux/slice";
import { TbLogin2 } from "react-icons/tb";
import { RiUserAddLine } from "react-icons/ri";
import { useSession, signOut } from "next-auth/react";

export default function NavBar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.themeToggle.mode);

  const { data: session, status } = useSession();

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
                    ? "border-b-2 border-blue-500"
                    : themeMode === "dark"
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-800 hover:text-blue-600"
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
    <div
      className={`${
        themeMode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      } shadow-md`}
    >
      <div className="navbar container mx-auto">
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
              className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow
              ${
                themeMode === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-black"
              }`}
            >
              <NavItems />
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://img.icons8.com/?size=160&id=89mMekprYMUs&format=png"
              width={45}
              height={45}
              alt="logo"
              unoptimized
            />
            <span className="text-xl font-bold">EventSphere</span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItems />
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3">
          {/* AUTH SECTION */}
          {status === "loading" ? (
            <div className="w-9 h-9 rounded-full bg-gray-300 animate-pulse" />
          ) : !session ? (
            <>
              <Link href="/register">
                <button className="flex items-center gap-1 rounded-lg border-2 border-blue-600 bg-blue-600 text-white px-3 py-1.5 text-xs hover:bg-blue-700">
                  <RiUserAddLine /> Sign up
                </button>
              </Link>

              <Link href="/login">
                <button className="flex items-center gap-1 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-1.5 text-xs">
                  <TbLogin2 /> Login
                </button>
              </Link>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <Image
                  src={session.user?.image || "/avatar.png"}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-blue-500"
                  unoptimized
                />
              </label>

              <ul
                tabIndex={0}
                className={`menu dropdown-content mt-3 w-44 rounded-box shadow
                ${
                  themeMode === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black"
                }`}
              >
                <li className="font-semibold px-3 py-2">
                  {session.user?.name}
                </li>
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={() => signOut()} className="text-red-500">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* THEME TOGGLE */}
          <label className="swap swap-rotate cursor-pointer">
            <input type="checkbox" checked={themeMode === "dark"} readOnly />

            {/* Sun */}
              <svg
              onClick={() => dispatch(toggleTheme())}
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64 13a1 1 0 0 0-1.05-.14A8 8 0 0 1 9.08 5.49a1 1 0 0 0-1.34-1.14A10 10 0 1 0 22 14a1 1 0 0 0-.36-1Z" />
            </svg>
         

            {/* Moon */}
          
               <svg
              onClick={() => dispatch(toggleTheme())}
              className="swap-on h-8 w-8 fill-current cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-12.5a1 1 0 0 1-1-1V1.5a1 1 0 1 1 2 0V2.5a1 1 0 0 1-1 1Zm0 20a1 1 0 0 1-1-1V21.5a1 1 0 1 1 2 0V22.5a1 1 0 0 1-1 1Zm10.5-10.5a1 1 0 0 1-1 1H21.5a1 1 0 1 1 0-2H21.5a1 1 0 0 1 1 1ZM3.5 12.5a1 1 0 0 1-1 1H1.5a1 1 0 1 1 0-2H2.5a1 1 0 0 1 1 1Zm15.03-6.53a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0Zm-12.1 12.1a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0Zm12.1 1.06a1 1 0 0 1-1.41 0l-1.06-1.06a1 1 0 1 1 1.41-1.41l1.06 1.06a1 1 0 0 1 0 1.41Zm-12.1-12.1a1 1 0 0 1-1.41 0L3.96 6.97a1 1 0 1 1 1.41-1.41l1.06 1.06a1 1 0 0 1 0 1.41Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}
