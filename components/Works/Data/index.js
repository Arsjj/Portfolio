import sliderImage from "./images/2023-01-28 (16).webp"
import quizImage from "./images/screenshot001824.webp";
import mealsImage from "./images/2023-02-05 (5).webp";
import netflixImage from "./images/2023-01-28 (40).webp";
import oasisImage from "./images/screenshot231632.webp";


export const data = [
  {
    id: 1,
    name: "Netflix",
    img: netflixImage,
    description: "Movies application like Netflix with TMDB database",
    link: "https://movies-umber-six.vercel.app/",
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
    img: oasisImage,
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
    img: quizImage,
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
    img: mealsImage,
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
    img: sliderImage,
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
