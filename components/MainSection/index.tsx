"use client";
import React, { useRef } from "react";
import photo from "./photo/a7.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MainSection() {
  const ref = useRef<HTMLDivElement>(null);
  let width;
  if (typeof document !== "undefined") {
    width = document.documentElement.clientWidth > 640 ? true : false;
  }

  const { scrollYProgress: scrollYProgress } = useScroll({
    target: ref,
    offset: ["300px", "800px"],
  });

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      ref={ref}
      id="home"
      className="relative perspective overflow-hidden flex flex-col h-[840px] items-center bg-center bg-no-repeat  max-md:bg-left bg-image max-md:h-fit"
    >
      <div className="absolute w-full h-full max-w-[1920px] bg-black/50"></div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        {...(width ? { style: { ...{ opacity: opacityProgress } } } : {})}
        className="relative z-10 md:mt-52 px-10 md:mb-[4.5rem] flex flex-col gap-10 max-w-[1200px] max-md:items-center max-md:mb-32 max-md:pt-40 max-md:px-7 max-sm:px-4"
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
    </div>
  );
}
