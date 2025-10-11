"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import Providers from "../Redux/Providers";
import NavBar from "./Navbar";
import Footer from "./Footer";


export default function ClientLayout({ children }) {
  return (
    <SessionProvider>
      <Providers>
        <NavBar />
        {children}
        <Footer />
        <Toaster richColors position="top-center" />
      </Providers>
    </SessionProvider>
  );
}
