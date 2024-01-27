import React from "react";
import { useRef } from "react";
import photo from "../photo/a7.jpg"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Info() {
  const bgRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0px", "900px"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        opacity: opacityProgress,
      }}
    >
      <div className="relative mt-56 px-10 mb-[4.5rem] flex flex-col gap-10 max-w-[1200px] max-md:items-center max-sm:pt-52 max-sm:px-7">
        <div className="relative z-0">
          <Image
            src={photo}
            alt="Arsen"
            width={200}
            priority
            className="rounded-full max-md:w-56 md:min-w-56"
          />
        </div>

        <div className="relative my-5 text-lg md:rounded-xl max-md:text-center">
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
      </div>
    </motion.div>
  );
}
