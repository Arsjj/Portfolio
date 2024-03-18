"use client";

import { NextUIProvider } from "@nextui-org/react";
import Navigation from "@/components/Navbar2";
import MainSection from "@/components/MainSection";
// import About from "@/components/About";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { StarsCanvas } from "@/components/canvas";
import About1 from "@/components/About1";
import Works1 from "@/components/Works1";

export default function Home() {
  return (
    <NextUIProvider>
      <Navbar />
      {/* <Navigation /> */}
      <div className="bg-hero-pattern bg-image bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      {/* <MainSection /> */}
      {/* <About /> */}
      <About1 />
      <Works1 />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </NextUIProvider>
  );
}
