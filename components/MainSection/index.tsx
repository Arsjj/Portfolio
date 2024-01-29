import React, { useRef } from "react";
import photo from "./photo/a7.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "../About";

export default function MainSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["100px", "700px"],
  });
  const { scrollYProgress: scrollYProgressText } = useScroll({
    target: ref,
    offset: ["300px", "800px"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacityProgressText = useTransform(scrollYProgressText, [0, 1], [1, 0]);

  return (
    <div
      ref={ref}
      id="home"
      className="relative perspective overflow-hidden flex flex-col items-center max-md:h-fit"
    >
      <motion.div
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="absolute z-10 max-w-[1920px] h-[900px] bg-no-repeat bg-cover  bg-top bg-image w-full bg-black/70"
      >
        <div className="absolute w-full h-full bg-black/40"></div>
      </motion.div>

      <motion.div
        style={{
          opacity: opacityProgressText,
        }}
        className="relative z-10 md:mt-64 px-10 md:mb-[4.5rem] flex flex-col gap-10 max-w-[1200px] max-md:items-center max-sm:pt-40 max-sm:px-7"
      >
        <div className="relative z-0">
          <Image
            src={photo}
            alt="Arsen"
            width={200}
            priority
            className="rounded-full max-md:w-48 md:min-w-48"
          />
        </div>

        <div className="relative text-lg md:rounded-xl max-md:text-center">
          <div className="relative z-0 text-white/90 italic">
            <p className="text-2xl mb-5">Hi, my name is Arsen &#41;</p>
            <p className="text-orange text-xl pb-7 border-b-1 border-white/50">
              Welcome to my page!
            </p>
            <div className="mt-7 text-lg shadow-text">
              <p className="w-fit mb-2">
                I fell in &#34;love&#34; with web programming and I have at
                least learnt something, I think… 🤷‍♂️
              </p>
              <p>
                Whenever possible, I apply my passion for developing products
                with modern JS libraries and frameworks like React.js and
                Next.js, experiment with Css technologies, explore new features
                and so on...
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="w-full relative -z-10">
        <div className="w-full relative -z-50 shadow-">
          <About />
        </div>
      </div>
    </div>
  );
}
