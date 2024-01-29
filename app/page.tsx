"use client";

import { NextUIProvider } from "@nextui-org/react";
import Navigation from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import About from "@/components/About";
import Works from "@/components/Works";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <NextUIProvider>
      <Navigation />
      <MainSection />
      <div className="md:hidden">
        <About />
      </div>
      <Works />
      <Footer />
    </NextUIProvider>
  );
}
