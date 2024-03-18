"use client";
import React from "react";
import Image from "next/image";
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "./styles";
import Techs from "./Techs";
import { Tilt } from "react-tilt";
import { technologies } from "@/constants";


const ServiceCard = ({ index, name, icon }: { index: number, name: string, icon: any }) => (
  <Tilt className="sm:w-[150px] w-full duration-100"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5  min-h-[180px] flex justify-evenly items-center flex-col">
        <Image
          src={icon || ""}
          width={100}
          height={100}
          alt="web-development"
          className="w-14 h-14 object-cover"
        />
        <h3 className="text-white font-bold text-center">
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
        <p
          className={styles.sectionSubText}
        > INTRODUCTION
        </p>
        <h2
          className={styles.sectionHeadText}
        >
          Aboute
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a skilled website developer with experience in TypeScript and
        Javascript, and expertise in frameworks like React, Node.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>

      {/* <Techs /> */}
      <div className="mt-20 flex flex-wrap gap-10">
        {technologies.map((service, index) => (
          <ServiceCard key={service.name} index={index} {...service} />
        ))}
      </div>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {data.about.cards?.map((card, index) => {
          return (
            <div
              key={`experience-${index}`}
              data-tina-field={tinaField(card || ({} as any), "")}
            >
              <Tilt
                className="xs:w-[250px] w-full"
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
              >
                <motion.div
                  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                  className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                >
                  <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <Image
                      src={card?.image ? card.image : ""}
                      width={100}
                      height={100}
                      alt="web-development"
                      className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">
                      {card?.title}
                    </h3>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
