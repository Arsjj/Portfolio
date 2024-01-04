import Skill from "./Skill/index.jsx";
import htmlImage from "./images/images.png";
import sassImage from "./images/sass-1-logo.png";
import jsImage from "./images/logo-javascript-logo.png";
import reactImage from "./images/React-icon.svg.png";
import tsImage from "./images/Typescript_logo_2020.svg.png";


function Skills() {
  return (
    <section className="flex flex-wrap gap-2 justify-center text-orange">
      <Skill name="Html" src={htmlImage} width={65} height={70} />
      <Skill
        name="Css"
        src="https://cdn.cdnlogo.com/logos/c/18/css.svg"
        width={65}
        height={100}
      />
      <Skill name="Sass" src={sassImage} width={95} height={95} />
      <Skill name="JavaScript" src={jsImage} width={90} height={90} />
      <Skill name="React" src={reactImage} width={80} height={95} />
      <Skill name="Next" src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" width={75} height={80} />
      <Skill name="TypeScript" src={tsImage} width={70} height={95} />
    </section>
  );
}

export default Skills;
