"use client";

import { NextUIProvider } from "@nextui-org/react";
import Navigation from "@/components/Navbar2";
import MainSection from "@/components/MainSection";
import About from "@/components/About";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <NextUIProvider>
      <Navbar />
      {/* <Navigation /> */}
      <div className="bg-hero-pattern bg-image bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      {/* <MainSection /> */}
      <About />
      <Works />
      <Footer />
    </NextUIProvider>
  );
}
