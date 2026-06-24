"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { useReveal } from "@/hooks/useReveal";
import { technologies } from "@/constants";
import { styles } from "../../utils/styles";

const ServiceCard = ({ index, name, icon }: { index: number, name: string, icon: any }) => {
  const { ref, visible } = useReveal({
    threshold: 0.2,
    once: true,
  });
  return (

    <Tilt
      className="sm:w-[130px] max-sm:w-[100px] max-xsm-[80px] w-full duration-100"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      transitionSpeed={450}
      key={index}
    >
      <div ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0)"
            : "translateX(-70px)",
          transition: "all 0.7s ease",
        }}
      >
        <div
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
        </div>
      </div>
    </Tilt>
  )
};

const MobileServiceCard = ({ index, name, icon }: { index: number, name: string, icon: any }) => (
  <div
    key={index}
    className="sm:w-[130px] max-sm:w-[100px] max-xsm-[80px] w-full duration-100"
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
  </div>
);



const About = () => {
  const titleReveal = useReveal({
    direction: "up",
    delay: 0.1,
    duration: 0.75,
    spring: true,
    y: -50
  });
  const textReveal = useReveal({ delay: 0.1 });
  const techReveal = useReveal({ delay: 0.2 });
  const p1 = useReveal({ y: 28, delay: 0.1, blur: 6 });
  const p2 = useReveal({ y: 28, delay: 0.125, blur: 6 });
  const p3 = useReveal({ y: 28, delay: 0.15, blur: 6 });
  const p4 = useReveal({ y: 28, delay: 0.175, blur: 6 });


  return (
    <div className="relative">
      <div ref={titleReveal.ref} style={titleReveal.style}>
        <h2
          className={styles.sectionHeadText}
        >
          About
        </h2>
      </div>

      <div
        ref={textReveal.ref}
        style={textReveal.style}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p ref={p1.ref} style={p1.style} className="mt-6 text-[17px] leading-8 text-secondary">
          As a Frontend Engineer, I see software development as a balance between creativity and engineering.
        </p>

        <p ref={p2.ref} style={p2.style} className=" text-[17px] leading-8 text-secondary">
          I enjoy transforming ideas into intuitive, responsive, and engaging user experiences while ensuring the underlying architecture remains scalable and maintainable.
          My primary focus is building modern web applications
          with technologies such as React, Next.js, and TypeScript, creating
          interfaces that are both visually polished and highly performant.
        </p>

        <p ref={p3.ref} style={p3.style} className="text-[17px] leading-8 text-secondary">
          Alongside frontend development, I have experience working with backend
          technologies and APIs, allowing me to understand the complete product
          lifecycle and collaborate effectively across the stack.
        </p>

        <p ref={p4.ref} style={p4.style} className="text-[17px] leading-8 text-secondary">
          My work is driven by curiosity, attention to detail, and a commitment to continuous improvement.
        </p>
      </div>
      <div className="absolute -z-50 w-full h-full flex justify-center items-center pt-20">
      </div>
      <div
        ref={techReveal.ref}
        style={techReveal.style}
        className="mt-8 font-semibold text-white sm:text-xl"
      >Technologies I have worked with
      </div>
      <div className="flex items-center sticky">
        <div className="max-sm:hidden w-full max-w-[780px] flex flex-wrap justify-center gap-7 mx-auto mt-10  max-sm:gap-5 max-xsm:gap-4">
          {technologies.map((service, index) => (
            <ServiceCard key={service.name} index={index} {...service} />
          ))}
        </div>
      </div>
      <div className="sm:hidden w-full max-w-[780px] flex flex-wrap justify-center gap-7 mx-auto mt-10  max-sm:gap-5 max-xsm:gap-4">
        {technologies.map((service, index) => (
          <MobileServiceCard key={service.name} index={index} {...service} />
        ))}
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

export function SkillsDepthGraph() {
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