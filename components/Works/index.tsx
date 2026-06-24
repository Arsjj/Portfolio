"use client"

import Card from "./Card";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../utils/styles";
import { projectsData } from "@/constants";

const Works = () => {
  const titleReveal = useReveal({
    direction: "up",
    delay: 0.1,
    duration: 0.75,
    spring: true,
    y: -50
  })
  const isMAxXl = typeof window !== undefined && window.innerWidth < 1280
  const [maxXl, setMaxXl] = useState(isMAxXl);

  useEffect(() => {
    if (typeof window !== undefined) {

      const check = () => setMaxXl(window.innerWidth < 768);

      check();
      window.addEventListener("resize", check);

      return () => window.removeEventListener("resize", check);
    }
  }, []);

  return (
    <div
      className="relative h-fit overflow-visible">
      <div ref={titleReveal.ref} style={titleReveal.style}>
        <h2 className={`${styles.sectionHeadText}`} >Projects</h2>
      </div>
      <div
        className="mt-10 flex max-xl:flex-wrap gap-10 justify-center max-sm:w-full">
        {projectsData.map((item, index) => (
          <Card
            key={item.id}
            index={index}
            name={item.name}
            description={item.description}
            link={item.link}
            src={item.img}
            tags={item.tags}
            isMAxXl={maxXl}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
