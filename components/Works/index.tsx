"use client"

import Card from "./Card";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../utils/styles";
import { projectsData } from "@/constants";
import { useReveal } from "@/hooks/useReveal";
import { useRef } from "react";

const Works = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start center", "end start"],
  });
  const titleReveal = useReveal({
    direction: "up",
    delay: 0.1,
    duration: 0.75,
    spring: true,
    y: -50
  });

  const cardsOpacity = useTransform(scrollYProgress, [0.3, 0.7], [1, 0]);

  return (
    <div
      className="relative h-fit overflow-visible">
      <div ref={titleReveal.ref} style={titleReveal.style}>
        <h2 className={`${styles.sectionHeadText}`} >Projects</h2>
      </div>
      <motion.div
        ref={cardsRef}
        style={{
          opacity: cardsOpacity,
        }}
        className="mt-10 flex flex-wrap gap-10 justify-center max-sm:w-full">
        {projectsData.map((item, index) => (
            <Card
              key={item.id}
              index={index}
              name={item.name}
              description={item.description}
              link={item.link}
              src={item.img}
              tags={item.tags}
            />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
