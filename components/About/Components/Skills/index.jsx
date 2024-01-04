import Skill from "./Skill/index.jsx";
import htmlImage from "./images/images.png";
import sassImage from "./images/sass-1-logo.png";
import jsImage from "./images/logo-javascript-logo.png";
import reactImage from "./images/React-icon.svg.png";
import tsImage from "./images/Typescript_logo_2020.svg.png";
import Image from "next/image.js";



function Skills() {
  return (
    <section className="flex flex-wrap gap-2 justify-center text-orange">
      <Skill name="Html" src={htmlImage} width={65}/>
      <Skill
        name="Css"
        src="https://cdn.cdnlogo.com/logos/c/18/css.svg"
        width={65}
        height={65}
      />
      <Skill name="Sass" src={sassImage} width={95}/>
      <Skill name="JavaScript" src={jsImage} width={90}/>
      <Skill name="React" src={reactImage} width={75}/>
      <Skill name="Next" src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" width={75} height={80} />
      <Skill name="TypeScript" src={tsImage} width={70}/>
    </section>
  );
}

export default Skills;
