"use client";
// import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  // const { data: session, status } = useSession();
  // console.log(session);
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/Events"}>Events</Link>
        </li>
        <li>
          <Link href={"/Addevent"}>Add Event</Link>
        </li>{" "}
    
        <li>
          <Link href={"/"}>My Events</Link>
        </li>
      </>
    );
  };

  return (
    <div className="bg-black">
      <div className="navbar text-white">
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
              {navMenu()}
            </ul>
          </div>
      <div className="flex gap-2">
        <div>

              <Link href={"/"} className="text-xl">
            <Image
              src={"https://img.icons8.com/?size=160&id=89mMekprYMUs&format=png"}
              width={90}
              height={80}
              alt="brand logo"
              unoptimized
            />
          </Link>
        </div>

          <div className="flex justify-center items-center">
            <p className="text-xl font-bold">Eventura</p>
          </div>
      </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {status == "authenticated" ? (
              <>
                <li>
                  <Image
                    src={session?.user?.image}
                    width={50}
                    height={50}
                    alt="user-logo"
                  />
                </li>
                <li onClick={() => signOut()}>Log Out</li>
              </>
            ) : (
              <>
                <li>
                  <Link href={"/register"}>Register</Link>
                </li>
                <li>
                  <Link href={"/login"}>Login</Link>
                </li>
              </>
            )}
          </ul>
          
        </div>
      </div>
    </div>
  );
}