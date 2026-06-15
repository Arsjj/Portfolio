"use client";

import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { technologies } from "@/constants";
import { styles } from "../../utils/styles";
import Animation from "../Hero/Animation";


const ServiceCard = ({ index, name, icon }: { index: number, name: string, icon: any }) => (
  <Tilt
    className="sm:w-[140px] max-sm:w-[100px] max-xsm-[80px] w-full duration-100"
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full relative green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div 
      className="bg-tertiary  rounded-[20px] py-5  min-h-[170px] max-sm:min-h-[130px] max-xsm-[min-h-100px] flex justify-evenly items-center flex-col">
        {/* <Image
          src={icon || ""}
          width={100}
          height={100}
          alt={name}
          className="absolute w-14 h-14 max-sm:w-10 max-sm:h-10 max-xsm:w-9 max-xsm-h-9 object-cover"
        /> */}
        <h3 className="absolute bottom-4  text-white font-bold text-center max-sm:text-xs max-sm:font-semibold">
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const ServiceCard1 = ({ index, name, icon }: { index: number; name: string; icon: any }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.04 }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
    className="group sm:w-[140px] max-sm:w-[100px] w-full"
  >
    <div
      className="
        relative p-[1px] overflow-hidden
        bg-gradient-to-br from-[#00aaff] via-[#7c3aed] to-[#00aaff]
        green-pink-gradient
        shadow-[0_0_25px_rgba(0,170,255,0.25)]
        [clip-path:polygon(14px_0,100%_0,100%_calc(100%-18px),calc(100%-18px)_100%,0_100%,0_14px)]
        rounded-lg
      "
    >
      <div
        className="
          relative min-h-[170px] max-sm:min-h-[130px]
        rounded-lg
          bg-tertiary 
          flex flex-col items-center justify-center gap-5 overflow-hidden
          [clip-path:polygon(14px_0,100%_0,100%_calc(100%-18px),calc(100%-18px)_100%,0_100%,0_14px)]
        "
      >
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(#00aaff_1px,transparent_1px),linear-gradient(90deg,#00aaff_1px,transparent_1px)] bg-[size:18px_18px]" />

        {/* scan line */}
        <div className="absolute inset-x-0 top-0 h-full -translate-y-full bg-gradient-to-b from-transparent via-[#00aaff]/20 to-transparent transition duration-700 group-hover:translate-y-full" />

        {/* corner brackets */}
        <span className="absolute rounded-s left-2 top-2 h-4 w-4 border-l border-t border-[#00aaff]/70" />
        <span className="absolute rounded-s right-2 top-2 h-4 w-4 border-r border-t border-[#00aaff]/70" />
        <span className="absolute rounded-s bottom-2 left-2 h-4 w-4 border-b border-l border-[#00aaff]/70" />
        <span className="absolute rounded-s bottom-2 right-2 h-4 w-4 border-b border-r border-[#00aaff]/70" />

        <Image
          src={icon || ""}
          width={100}
          height={100}
          alt={name}
          className="relative z-10 w-14 h-14 max-sm:w-10 max-sm:h-10 object-contain transition duration-300 group-hover:scale-110"
        />

        <h3 className="relative z-10 text-white font-bold text-center max-sm:text-xs max-sm:font-semibold">
          {name}
        </h3>
      </div>
    </div>
  </motion.div>
);



const About = () => {

  return (
    <div className="relative">
      <motion.div variants={textVariant()}>
        <h2
          className={styles.sectionHeadText}
        >
          About
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "tween", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a frontend developer with a drive to create responsive and user-friendly web 
        applications and user interfaces. Proficient in JavaScript and Typescript, 
        with hands-on experience in modern frontend technologies such as React and Next JS.
        Aiming to take on new challenges, learn more and use my coding skills for developing
        new features and contribute to successful projects.
      </motion.p>
      <div className="absolute -z-50 w-full h-full flex justify-center items-center pt-20">

      </div>

      <motion.p
        variants={fadeIn("", "tween", 0.1, 1)}
        className={styles.sectionHeadText}

      // className="mt-8 text-white sm:text-xl"
      >Technologies I have worked with</motion.p>
      <div className="flex items-center sticky">

        <motion.div className="w-full max-w-5xl mx-auto mt-10 flex flex-wrap justify-center gap-10 max-sm:gap-5 max-xsm:gap-4"
          // variants={fadeIn("right", "spring")}
          // variants={fadeIn("", "", 0.1, 1)}
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}

        >
          {technologies.map((service, index) => (
            <ServiceCard1 key={service.name} index={index} {...service} />
          ))}
        </motion.div>
        {/* <Animation /> */}
      </div>
      <div className="flex mx-auto w-fit">

      </div>


    </div>
  );
};

export default SectionWrapper(About, "about");
