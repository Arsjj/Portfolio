import Skill from "./Skill/index.jsx";
import htmlImage from "./images/images.png";
import sassImage from "./images/sass-1-logo.png";
import jsImage from "./images/logo-javascript-logo.png";
import reactImage from "./images/React-icon.svg.png";
import tsImage from "./images/Typescript_logo_2020.svg.png";

function Skills() {
  return (
    <section className="flex flex-wrap gap-2 px-4 justify-center">
      <Skill name="Html" src={htmlImage} />
      <Skill name="Css" src="https://cdn.cdnlogo.com/logos/c/18/css.svg" />
      <Skill name="Sass" src={sassImage} />
      <Skill name="JavaScript" src={jsImage} />
      <Skill name="React" src={reactImage} />
      <Skill
        name="Next"
        src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
      />
      <Skill name="TypeScript" src={tsImage} />
    </section>
  );
}

export default Skills;
