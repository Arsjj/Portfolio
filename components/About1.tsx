"use client";
import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { technologies } from "@/constants";
import { styles } from "./styles";


const ServiceCard = ({ index, name, icon }: { index: number, name: string, icon: any }) => (
  <Tilt className="sm:w-[140px] max-sm:w-[100px] w-full duration-100"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5  min-h-[170px] max-sm:min-h-[130px] flex justify-evenly items-center flex-col">
        <Image
          src={icon || ""}
          width={100}
          height={100}
          alt={name}
          className="w-14 h-14 max-sm:w-10 max-sm:h-10 object-cover"
        />
        <h3 className="text-white font-bold text-center max-sm:text-xs max-sm:font-semibold">
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);



const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2
          className={styles.sectionHeadText}
        >
          About
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a frontend developer with a drive to create responsive and user-friendly web 
        applications and user interfaces. Proficient in JavaScript and Typescript, 
        with hands-on experience in modern frontend technologies such as React and Next JS.
        Aiming to take on new challenges, learn more and use my coding skills for developing
        new features and contribute to successful projects.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-white sm:text-xl">Technologies I have worked with</motion.p>
      <motion.div className="w-full max-w-5xl mt-10 flex flex-wrap justify-center gap-10"
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
      </motion.div>


    </>
  );
};

export default SectionWrapper(About, "about");
