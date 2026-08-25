import "server-only";

export const aiProfile = {
  identity: {
    name: "Arsen Abrahamyan",
    role: "Frontend Developer",
    location: "Yerevan, Armenia",
    headline: "Frontend Developer specializing in JavaScript, TypeScript, React and Next.js",
    positioning: "Arsen is a frontend developer focused on building modern, responsive and user-friendly web applications. His primary specialization is the JavaScript/TypeScript ecosystem, particularly React and Next.js. He also has backend development experience with Node.js, which gives him an understanding of applications beyond the frontend layer.",
  },
  professionalSummary: {
    short: "Frontend Developer specializing in React, Next.js, JavaScript and TypeScript with additional Node.js backend development skills.",
    detailed: "Arsen is a frontend developer focused on creating responsive, maintainable and user-friendly web applications and interfaces. His core development stack is centered around JavaScript, TypeScript, React and Next.js. In addition to frontend development, he has experience with Node.js backend development, allowing him to understand both client-side applications and the services they communicate with. He is interested in solving new engineering challenges, continuously expanding his technical knowledge and contributing to successful software products.",
  },
  expertise: {
    primary: ["Frontend Development", "React.js", "Next.js", "JavaScript", "TypeScript"],
    additional: ["Node.js", "Full-Stack Development", "Responsive Web Applications", "User Interface Development"],
  },
  experience: [
    {
      company: "Technology Management Center of Yerevan City",
      role: "Frontend Developer",
      period: { from: "July 2024", to: "Present" },
      summary: "Working on production web applications and digital services, with a focus on building scalable, maintainable and user-friendly frontend solutions.",
      responsibilities: [
        "Developing and maintaining production web applications using React",
        "Building reusable and maintainable UI components",
        "Implementing complex forms and business workflows",
        "Integrating frontend applications with REST APIs",
        "Managing application state and asynchronous data flows",
        "Implementing authentication, authorization and role-based UI behavior",
        "Working with document upload and file-management workflows",
        "Building dynamic interfaces based on business rules and user permissions",
        "Improving application performance and frontend architecture",
        "Debugging and resolving production and integration issues",
        "Collaborating with backend developers and other team members on new features",
        "Refactoring existing functionality to improve maintainability and scalability",
      ],
      technologies: ["React", "JavaScript", "TypeScript", "Vite", "Redux Toolkit", "React Router", "REST API", "Axios", "i18next", "Git"],
    },
    {
      company: "Sentium Consulting",
      role: "Frontend Developer",
      period: { from: "January 2023", to: "March 2024" },
      summary: "Worked as a Frontend Developer building and maintaining modern web interfaces and implementing application features within a production development environment.",
      responsibilities: [
        "Developing responsive web interfaces with React",
        "Creating reusable frontend components",
        "Implementing application features based on business requirements",
        "Integrating frontend functionality with backend APIs",
        "Managing client-side application state",
        "Working with forms, validation and user interactions",
        "Debugging frontend issues and improving existing functionality",
        "Participating in code maintenance and refactoring",
        "Collaborating with other developers throughout the development process",
      ],
      technologies: ["React", "JavaScript", "TypeScript", "REST API", "HTML", "CSS", "Git"],
    },
  ],
  education: [
    {
      institution: "ASIPCS",
      degree: "Master's degree",
      period: { from: "September 2008", to: "May 2013" },
    },
  ],
  engineeringProfile: {
    frontend: {
      technologies: ["React", "Next.js", "JavaScript", "TypeScript"],
      areas: ["Component architecture", "Reusable UI components", "Complex forms", "Responsive interfaces", "State management", "Routing", "API integration", "Authentication and authorization", "Role-based interfaces", "Performance optimization"],
    },
    backend: {
      technologies: ["Node.js"],
      areas: ["REST API integration", "Understanding client-server architecture"],
    },
    development: {
      technologies: ["Git", "Vite", "Axios", "Redux Toolkit", "React Router", "i18next"],
    },
  },
  professionalStrengths: [
    "Building complex React applications",
    "Translating business requirements into frontend functionality",
    "Designing reusable component structures",
    "Working with REST APIs and asynchronous application flows",
    "Building complex forms and validation flows",
    "Working with authentication and authorization",
    "Debugging and solving frontend integration problems",
    "Refactoring and improving existing applications",
    "Learning and adopting modern web technologies",
  ],
  interests: ["Modern frontend architecture", "React and Next.js ecosystem", "Web application performance", "Reusable component design", "AI-powered web applications", "Modern AI development tools"],
  career: {
    goals: "Continue growing as a software engineer, take on increasingly complex technical challenges, expand knowledge of modern web and AI technologies, and contribute to high-quality software products.",
  },
  assistantBehavior: {
    role: "You are the AI assistant for Arsen Abrahamyan's developer portfolio. Your purpose is to help visitors, recruiters and developers understand Arsen's professional experience, technical skills and engineering background.",
    rules: [
      "Answer questions about Arsen using the provided portfolio knowledge.",
      "Never invent employers, projects, responsibilities, achievements or technologies.",
      "If information is unavailable, clearly say that it is not specified.",
      "Do not claim a technology was used at a particular company unless that relationship exists in the profile data.",
      "Focus primarily on professional and technical information.",
      "Answer naturally instead of simply reading database fields.",
      "Keep initial answers concise and provide more technical detail when requested.",
      "When discussing experience, mention concrete engineering responsibilities where relevant.",
      "When discussing technologies, explain how they relate to Arsen's development experience when that information is available.",
      "When relevant, recommend portfolio projects that demonstrate the technology or skill being discussed.",
    ],
  },
  suggestedQuestions: [
    "Tell me about Arsen",
    "What technologies does Arsen specialize in?",
    "What is Arsen's React experience?",
    "What does Arsen work on in his current role?",
    "What professional experience does Arsen have?",
    "What are Arsen's strongest technical areas?",
    "Does Arsen have backend experience?",
    "What kind of applications does Arsen build?",
    "What projects has Arsen worked on?",
    "Does Arsen have experience with AI technologies?",
  ],
} as const;

export function getAIProfile() {
  return {
    identity: aiProfile.identity,
    professionalSummary: aiProfile.professionalSummary,
    expertise: aiProfile.expertise,
    experience: aiProfile.experience,
    education: aiProfile.education,
    engineeringProfile: aiProfile.engineeringProfile,
    professionalStrengths: aiProfile.professionalStrengths,
    interests: aiProfile.interests,
    career: aiProfile.career,
  };
}
