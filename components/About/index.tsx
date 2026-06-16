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
import Iron from "../Hero/About";


const ServiceCard = ({ index, name, icon }: { index: number, name: string, icon: any }) => (
  <Tilt
    className="sm:w-[140px] max-sm:w-[100px] max-xsm-[80px] w-full duration-100"
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full relative green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary  rounded-[20px] py-5  min-h-[170px] max-sm:min-h-[130px] max-xsm-[min-h-100px] flex justify-evenly items-center flex-col">
        <Image
          src={icon || ""}
          width={100}
          height={100}
          alt={name}
          className="absolute w-14 h-14 max-sm:w-10 max-sm:h-10 max-xsm:w-9 max-xsm-h-9 object-cover"
        />
        <h3 className="absolute bottom-4  text-white font-bold text-center max-sm:text-xs max-sm:font-semibold">
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
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

      {/* <motion.p
        variants={fadeIn("", "tween", 0.1, 1)}
        className="mt-8 font-semibold text-white sm:text-xl"

      // className="mt-8 text-white sm:text-xl"
      >Technologies I have worked with
      </motion.p> */}
      <div className="flex items-center sticky">

        {/* <motion.div className="w-full max-w-5xl mx-auto mt-10 flex flex-wrap justify-center gap-10 max-sm:gap-5 max-xsm:gap-4"
          // variants={fadeIn("right", "spring")}
          // variants={fadeIn("", "", 0.1, 1)}
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}

        >
          {technologies.map((service, index) => (
            <ServiceCard key={service.name} index={index} {...service} />
          ))}
        </motion.div> */}
      </div>
      <Iron />
      {/* <div className="flex flex-wrap gap-3 max-w-4xl py-4">
        {technologies.map((tech, index) => (
          <motion.div
                    variants={fadeIn("", "tween", 0.1, 1)}

            key={index}
          >
            <div
              key={tech.name}
              className="
                                          group
                                          flex
                                          items-center
                                          gap-2
                                          rounded-full
                                          border
                                          border-cyan-500/20
                                          bg-[#0b1020]/80
                                          px-4
                                          py-3
                                          transition-all
                                          duration-300
                                          hover:border-cyan-400/60
                                          hover:shadow-[0_0_20px_rgba(0,170,255,0.35)]
                                          hover:-translate-y-1
                                      "
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={18}
                height={18}
                className="
                                              object-contain
                                              transition-transform
                                              duration-300
                                              group-hover:scale-110
                                              "
              />

              <span
                className="
                                              text-md
                                              font-medium
                                              text-white/90
                                              whitespace-nowrap
                                              "
              >
                {tech.name}
              </span>

            </div>
          </motion.div>

        ))}
        ...
      </div> */}


    </div >
  );
};

export default SectionWrapper(About, "about");
