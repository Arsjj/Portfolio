"use client"

import Card from "./Card";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../utils/styles";
import { projectsData } from "@/constants";
import { useReveal } from "@/hooks/useReveal";

const Works = () => {
  const titleReveal = useReveal({
    direction: "up",
    delay: 0.1,
    duration: 0.75,
    spring: true,
    y: -50
  });

  return (
    <div
      className="relative h-fit overflow-visible">
      <div ref={titleReveal.ref} style={titleReveal.style}>
        <h2 className={`${styles.sectionHeadText}`} >Projects</h2>
      </div>
      <div className="mt-10 flex flex-wrap gap-10 justify-center max-sm:w-full">
        {projectsData.map((item, index) => (
          <Card
            key={index}
            id={index}
            name={item.name}
            description={item.description}
            link={item.link}
            src={item.img}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
