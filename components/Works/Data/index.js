import img3 from "./images/screenshot001824.webp";
import img4 from "./images/2023-02-05 (5).webp";
import netflixImage from "./images/2023-01-28 (28).webp";
import oasisImage from "./images/screenshot231632.webp";


export const data = [
  {
    id: 1,
    name: "Netflix",
    img: netflixImage,
    description: "Movies application like Netflix with TMDB database",
    technologies: ["React", "SCSS"],
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
  // {
    //   id: 3,
  //   name: "Aim Game",
  //   img: img3,
  //   description: "How many circles do you can click?",
  //   technologies: "HTML/ CSS/ JS",
  //   link: "https://aim-training-97ab0b.netlify.app/",
  // },
  {
    id: 4,
    name: "Oasis",
    img: oasisImage,
    description: "A small boutique hotel desktop application",
    technologies: ["Raect", "Styled Components", "React Query"],
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
  // {
  //   id: 3,
  //   name: "Quiz",
  //   img: img3,
  //   description: "Quiz app connected to Opentdb api",
  //   technologies: ["React", "Axios", "NextUI"],
  //   link: "https://quiz-project-seven.vercel.app/",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "axios",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "next ui",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  // },
  {
    id: 2,
    name: "Meals online order",
    img: img4,
    description: "Page of online food ordering system",
    technologies: ["React", "Redux"],
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
  // {
    //   id: 4,
  //   name: "Image Sliders",
  //   img: "https://images.unsplash.com/photo-1642201855395-1c8b44e6e42b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
  //   description: "Samples of image sliders",
  //   technologies: "Raect/ CSS",
  //   link: "https://eclectic-lolly-88cb4f.netlify.app/",
  // },
];
