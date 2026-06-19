"use client";

import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { technologies } from "@/constants";
import { styles } from "../../utils/styles";

const ServiceCard = ({ index, name, icon }: { index: number, name: string, icon: any }) => (
  <Tilt
    className="sm:w-[130px] max-sm:w-[100px] max-xsm-[80px] w-full duration-100"
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    transitionSpeed={450}
  >
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="w-full relative green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="flex flex-col justify-center items-center gap-4 bg-tertiary rounded-[20px] py-5  min-h-[160px] max-sm:min-h-[130px] max-xsm-[min-h-100px] ">
        <Image
          src={icon || ""}
          width={100}
          height={100}
          alt={name}
          className="relative w-10 h-10 max-sm:w-10 max-sm:h-10 max-xsm:w-9 max-xsm-h-9 object-cover"
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
        Additionally, skilled in backend development using Node.js, enabling the creation of robust server-side applications and APIs.
        <br />
        Aiming to take on new challenges, learn more and use my coding skills for developing
        new features and contribute to successful projects.
      </motion.p>
      <div className="absolute -z-50 w-full h-full flex justify-center items-center pt-20">

      </div>
      <motion.p
        variants={fadeIn("", "tween", 0.1, 1)}
        className="mt-8 font-semibold text-white sm:text-xl"

      >Technologies I have worked with
      </motion.p>
      <div className="flex items-center sticky">

        <motion.div className="w-full max-w-[780px] flex flex-wrap justify-center gap-7 mx-auto mt-10  max-sm:gap-5 max-xsm:gap-4"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}

        >
          {technologies.map((service, index) => (
            <ServiceCard key={service.name} index={index} {...service} />
          ))}
          {/* <SkillsDepthGraph /> */}
        </motion.div>
      </div>
    </div >
  );
};

export default SectionWrapper(About, "about");



const CX = 450;
const CY = 310;

const skills = [
  { name: "React", x: 250, y: -80, z: 80, size: 76 },
  { name: "Next", x: 310, y: 75, z: -40, size: 70 },
  { name: "TS", x: -160, y: 120, z: 100, size: 72 },
  { name: "Node", x: -300, y: 45, z: -80, size: 70 },
  { name: "MongoDB", x: -270, y: -130, z: 60, size: 78 },
  { name: "CSS", x: -15, y: -210, z: -110, size: 68 },
  { name: "HTML", x: 330, y: -180, z: 120, size: 76 },
  { name: "Git", x: -350, y: 200, z: -130, size: 68 },
];

export  function SkillsDepthGraph() {
  return (
    <section className=" bg-[rgb(8,9,15)] flex items-center justify-center">
      <div className="relative w-[900px] h-[620px] [perspective:1000px]">
        <div className="absolute inset-0 [transform-style:preserve-3d]">
          {/* lines */}
          <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 900 620">
            {skills.map((skill) => (
              <line
                key={skill.name}
                x1={CX}
                y1={CY}
                x2={CX + skill.x}
                y2={CY + skill.y}
                stroke="rgba(0,170,255,0.22)"
                strokeWidth="1"
              />
            ))}
          </svg>

          {/* skills */}
          {skills.map((skill, i) => {
            const depthScale = skill.z > 0 ? 1.08 : 0.88;
            const opacity = skill.z > 0 ? 1 : 0.65;

            return (
              <motion.div
                key={skill.name}
                className="absolute rounded-full bg-[#111827] text-white flex items-center justify-center text-sm font-bold border border-cyan-400/35 shadow-[0_0_35px_rgba(0,170,255,0.32)]"
                style={{
                  width: skill.size,
                  height: skill.size,
                  left: CX + skill.x - skill.size / 2,
                  top: CY + skill.y - skill.size / 2,
                  opacity,
                  transform: `translateZ(${skill.z}px) scale(${depthScale})`,
                  zIndex: skill.z > 0 ? 30 : 10,
                }}
                // animate={{ y: [0, -8, 0] }}
                // transition={{
                //   duration: 3 + i * 0.25,
                //   repeat: Infinity,
                //   ease: "easeInOut",
                // }}
              >
                {skill.name}
              </motion.div>
            );
          })}

          {/* JS center */}
          <motion.div
            className="absolute z-20 rounded-full bg-[#D4AF37] text-black flex items-center justify-center text-5xl font-black shadow-[0_0_100px_rgba(250,204,21,0.55)] "
            style={{
              width: 185,
              height: 185,
              left: CX - 92.5,
              top: CY - 92.5,
              transform: "translateZ(40px)",
            }}
          >
            JS
          </motion.div>
        </div>
      </div>
    </section>
  );
}