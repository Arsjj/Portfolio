import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import HyperJumpSection from "@/components/HyperJumpSection";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-hero-pattern bg-image bg-cover bg-no-repeat bg-center max-sm:overflow-hidden">
        <Hero />
      </div>
      <About />
      <div className="relative z-10">
        <Works />
      </div>
      <HyperJumpSection />
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}
