"use client"

import Card from "./Card";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../utils/styles";
import { projectsData } from "@/constants";

const Works = () => {
  return (
    <div className="relative h-fit overflow-visible">
      <motion.div id="projects" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`} >Projects</h2>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-10 justify-center max-sm:w-full">
        {projectsData.map((item, index) => (
          <motion.div key={item.id} variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="max-sm:w-full">
            <Card
              key={item.id}
              name={item.name}
              description={item.description}
              link={item.link}
              src={item.img}
              tags={item.tags}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
