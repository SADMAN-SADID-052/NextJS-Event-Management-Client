"use client";
import React, { useState } from "react";
import Link from "next/link";
import { registerUser } from "@/app/actions/auth/registerUser";


export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await registerUser({ name, email, password });
      if (res.success) {
        setMessage("✅ Registration successful! You can now log in.");
        form.reset();
      } else {
        setMessage("❌ " + res.error);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg space-y-8 border-2 border-sky-500 p-6 rounded-2xl shadow-lg bg-white"
    >
      <h2 className="text-2xl font-bold text-center text-sky-600">Create Account</h2>

      <label className="form-control w-full">
        <span className="label-text font-semibold">Name</span>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="input input-bordered w-full"
          required
        />
      </label>

      <label className="form-control w-full">
        <span className="label-text font-semibold">Email</span>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input input-bordered w-full"
          required
        />
      </label>

      <label className="form-control w-full">
        <span className="label-text font-semibold mt-6">Password</span>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input input-bordered w-full"
          required
        />
      </label>

      <button
        disabled={loading}
        className="w-full h-12 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl mt-6"
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>

      {message && (
        <p
          className={`text-center font-medium ${
            message.startsWith("✅") ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}

      <p className="text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-sky-500 font-bold">
          Login
        </Link>
      </p>
    </form>
  );
}
