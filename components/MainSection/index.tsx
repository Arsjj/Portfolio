import React, { useRef } from "react";
import photo from "./photo/a7.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MainSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-20px", "1000px"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      ref={ref}
      id="home"
      className="relative flex flex-col items-center h-[1000px] max-md:h-fit"
    >
      <motion.div
        style={{
          // scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="absolute max-w-[1920px] z-1 bg-no-repeat bg-cover bg-top bg-image w-full h-full bg-black/70"
      >
        <div className="absolute w-full h-full bg-black/30"></div>
      </motion.div>

      <div
        // style={{
        //   opacity: opacityProgress,
        // }}
        // style={{opacity: opacityProgress}}
        // initial={{ opacity: 0}}
        // whileInView={{ opacity: 1}}
        // transition={{ duration: 0.5 }}
        // viewport={{ once: true }}
        className="relative -z-1 mt-80 px-10 mb-[4.5rem] flex flex-col gap-10 max-w-[1200px] max-md:items-center max-sm:pt-52 max-sm:px-7"
      >
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
      {/* <div className="relative w-[90%] max-w-[1350px] border-b-8 border-orange/80 rounded-[35%] z-1 animate-opacity max-md:hidden"></div> */}
      {/* <div className="relative w-[70%] max-w-[820px] border-[#27a7d9] border-b-8 rounded-[45%] z-1 animate-opacity max-md:hidden"></div> */}
    </div>
  );
}
