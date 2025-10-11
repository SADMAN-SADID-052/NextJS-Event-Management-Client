"use client";
import React from "react";
import { signIn } from "next-auth/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
// import SocialLogin from "./SocialLogin";
// import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Submitting ....");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        toast.success("Logged In successfully");
        router.push("/");
        form.reset();
      } else {
        toast.error("FAILED to Log In");
      }
      //console.log({ email, password });
    } catch (error) {
      
      toast.error("FAILED to Log In");
    }
  };
  return (
    <form onSubmit={handleSubmit} className=" border-2 border-sky-500 p-4 rounded-2xl">
      <label className="form-control w-full">
        <div className="label w-full mt-4">
          <span className="label-text  font-bold">Email</span>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full mt-4">
          <span className="label-text font-bold">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <button className="w-full h-12 bg-sky-500 text-white font-bold mt-4 rounded-2xl">
        Sign In
      </button>
      <p className="text-center mt-4 mb-4">Or Sign In with</p>
      {/* <SocialLogin /> */}
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link href="/register" className="text-sky-500 font-bold">
        
          Register
        </Link>
      </p>
    </form>
  );
}