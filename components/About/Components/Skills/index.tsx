import Skill from "./Skill";
import htmlImage from "./images/images.png";
import sassImage from "./images/sass-1-logo.png";
import jsImage from "./images/logo-javascript-logo.png";
import reactImage from "./images/React-icon.svg.png";
import tsImage from "./images/Typescript_logo_2020.svg.png";
import gitImage from "./images/Git_icon.svg.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <h2 className="text-2xl text-center font-semibold mb-6 text-orange">
        Skills
      </h2>

      <section className="flex flex-wrap gap-1 px-4 justify-center pb-2">
        <Skill name="Html" src={htmlImage} />
        <Skill name="Css" src="https://cdn.cdnlogo.com/logos/c/18/css.svg" />
        <Skill
          name="Tailwind"
          src="https://shadowblood.gallerycdn.vsassets.io/extensions/shadowblood/tailwind-moon/3.0.2/1673948732518/Microsoft.VisualStudio.Services.Icons.Default"
        />
        <Skill name="Sass" src={sassImage} />
        <Skill name="JavaScript" src={jsImage} />
        <Skill name="React" src={reactImage} />
        <Skill
          name="Next"
          src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
        />
        <Skill name="TypeScript" src={tsImage} />
        <Skill name="Git" src={gitImage} />
      </section>
    </motion.div>
  );
}

export default Skills;
