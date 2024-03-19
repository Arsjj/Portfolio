import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About1 from "@/components/About1";
import Works from "@/components/Works";
import { StarsCanvas } from "@/components/canvas";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-hero-pattern bg-image bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About1 />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </>
  );
}
