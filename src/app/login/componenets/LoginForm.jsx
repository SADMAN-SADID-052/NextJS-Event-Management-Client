"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    toast.loading("Signing in...");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      toast.dismiss(); // remove loading toast

      if (res.error) {
        toast.error("Invalid email or password");
        return;
      }

      toast.success("Logged in successfully!");
      form.reset();
      router.push("/login");
    } catch (err) {
      console.error("Login error:", err);
      toast.dismiss();
      toast.error("Login failed. Try again!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-sky-500 p-6 rounded-2xl max-w-md mx-auto mt-10 shadow-lg"
    >
      <label className="form-control w-full">
        <div className="label mt-4">
          <span className="label-text font-bold">Email</span>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="input input-bordered w-full"
        />
      </label>

      <label className="form-control w-full">
        <div className="label mt-4">
          <span className="label-text font-bold">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="input input-bordered w-full"
        />
      </label>

      <button
        type="submit"
        className="w-full h-12 bg-sky-500 text-white font-bold mt-6 rounded-2xl"
      >
        Sign In
      </button>

      <p className="text-center mt-6 text-gray-600">
        Don’t have an account?{" "}
        <Link href="/register" className="text-sky-500 font-bold hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
}
