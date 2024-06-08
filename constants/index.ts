import {
  css,
  git,
  html,
  javascript,
  next,
  react,
  redux,
  sass,
  tailwind,
  typescript,
  storybook,
  nodejs,
  express,
  mongodb,
  movies,
  meals,
  quiz,
  oasisdark,
  sliders,
} from "@/assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "SCSS",
    icon: sass,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Storybook",
    icon: storybook,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Git",
    icon: git,
  },
];

const data = [
  {
    id: 1,
    name: "Movies",
    img: movies,
    description: "Movies application like Netflix with TMDB database",
    link: "https://movies-theta-lac.vercel.app//",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 4,
    name: "Oasis",
    img: oasisdark,
    description: "A small boutique hotel desktop application",
    link: "https://oasis-11.netlify.app",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "styled components",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 3,
    name: "Quiz",
    img: quiz,
    description: "Quiz app connected to Opentdb api",
    link: "https://quiz-project-seven.vercel.app/",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "next ui",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 2,
    name: "Meals online order",
    img: meals,
    description: "Page of online food ordering system",
    link: "https://meals-28d0c2.netlify.app/",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 5,
    name: "Image Sliders",
    img: sliders,
    description: "Samples of image sliders",
    link: "https://eclectic-lolly-88cb4f.netlify.app/",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
  },
  // {
  //   id: 6,
  //   name: "Aim Game",
  //   img: img3,
  //   description: "How many circles do you can click?",
  //   technologies: ["HTML", "CSS", "JS"],
  //   link: "https://aim-training-97ab0b.netlify.app/",
  // },
];

export { technologies, data };
