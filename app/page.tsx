import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import { StarsCanvas } from "@/components/canvas";
import { Toaster } from "react-hot-toast";
import HyperJumpTransition from "@/components/Hyperjump";
import HyperScrollSection from "@/components/HyperScrollSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-hero-pattern bg-image bg-cover bg-no-repeat bg-center max-sm:overflow-hidden">
        <Hero />
      </div>
      <About />

        {/* <Works /> */}
      <HyperScrollSection />
      {/* <section className="h-screen bg-slate-950 text-white">

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </section> */}
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}
