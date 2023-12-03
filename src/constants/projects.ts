import { availableTechnologies } from ".";

type Technology = keyof typeof availableTechnologies;

type Project = {
  name: string;
  description: string;
  imageUrl: string;
  technologies: Technology[];
  projectUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    name: "To-do App",
    description:
      "Manage your tasks without problems and increase your productivity.",
    imageUrl: "https://picsum.photos/200/300",
    technologies: ["javascript", "html", "css", "nodeJS"],
    projectUrl: "#",
    codeUrl: "#",
  },
  {
    name: "Calculator",
    description:
      "Simple. Powerful. Fast. All you need to do your calculations.",
    imageUrl: "https://picsum.photos/200/300",
    technologies: ["javascript", "html", "css", "react"],
    projectUrl: "#",
    codeUrl: "#",
  },
];

export default projects;
