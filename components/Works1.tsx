import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "./styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image, { StaticImageData } from "next/image";
import Card from "./Works/Card";
import { data } from "./Works/Data";

type Props = {
  index: number;
  name: string;
  description: string;
  tags: Array<any>;
  image: string | StaticImageData;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
}: Props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: any) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works1 = () => {
  return (
    <>
      <motion.div id="projects" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`} >Projects</h2>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {data.map((item, index) => (
          <motion.div key={item.id} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Card
              key={item.id}
              name={item.name}
              description={item.description}
              link={item.link}
              src={item.img}
              technologies={item.technologies}
              tags={item.tags}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works1, "");
