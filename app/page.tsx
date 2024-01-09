"use client";

import { NextUIProvider } from "@nextui-org/react";
import Navigation from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import About from "@/components/About";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";

export default function Home() {
  return (
    <NextUIProvider>
      <Navigation />
      {/* <MobileNavbar /> */}
      <MainSection />
      <About />
      <Works />
      <Footer />
    </NextUIProvider>
  );
}
