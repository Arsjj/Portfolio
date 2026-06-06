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
  aiCouch,
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
    id: 2,
    name: "AI Interview Coach",
    img: aiCouch,
    description:
      "AI-powered interview preparation platform",
    link: "https://ai-interview-coach-sigma-tan.vercel.app/",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "drizzle",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 4,
    name: "Oasis",
    img: oasisdark,
    description: "A small boutique hotel application",
    link: "https://oasis-ten-inky.vercel.app",
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
    id: 1,
    name: "Movies",
    img: movies,
    description: "Movies application with TMDB database",
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
];

export { technologies, data };
