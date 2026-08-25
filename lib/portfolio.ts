import { portfolioOwner, projectsData, technologies } from "@/constants";

export type PortfolioProject = {
  id: number;
  name: string;
  description: string;
  link: string;
  technologies: string[];
};

export const portfolioProjects: PortfolioProject[] = projectsData.map(
  ({ id, name, description, link, tags }) => ({
    id,
    name,
    description,
    link,
    technologies: tags.map((tag) => tag.name),
  }),
);

export const portfolioSkills = technologies.map(({ name }) => name);

export const portfolioExperience = {
  summary: portfolioOwner.about,
  note: "The portfolio does not include employers, job titles, or employment dates.",
};

export function getProjects() {
  return portfolioProjects;
}

export function getProjectsByTechnology(technology: string) {
  const query = technology.trim().toLowerCase();

  return portfolioProjects.filter((project) =>
    project.technologies.some((item) => item.toLowerCase().includes(query)),
  );
}

export function getSkills() {
  return portfolioSkills;
}

export function getExperience() {
  return portfolioExperience;
}
