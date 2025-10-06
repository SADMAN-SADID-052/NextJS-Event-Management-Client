"use client";
import React from "react";
import Link from "next/link";
import { registerUser } from "../actions/auth/registerUser";
// import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
// import { registerUser } from "@/app/actions/auth/registerUser";
// import SocialLogin from "@/app/login/components/SocialLogin";
export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({name,email,password})
    await registerUser({ name, email, password });
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8 border-2 p-4 rounded-2xl">
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold">Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="name"
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold mt-3">Email</span>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold mt-3">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <button className="w-full h-12 bg-orange-500 text-white font-bold mt-4 rounded-xl">
        Sign Up
      </button>
      <p className="text-center">Or Sign In with</p>
      {/* <SocialLogin /> */}
      <p className="text-center">
        Don't Have an account?{" "}
        <Link href="/login" className="text-orange-500 font-bold">
          Login
        </Link>
      </p>
    </form>
  );
}