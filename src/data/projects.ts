import projectTelecomChurn from "@/assets/project-telecom-churn.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "telecom-churn",
    title: "Telecom Churn Prediction Dashboard",
    description:
      "An interactive dashboard that visualizes telecom customer churn data and predicts at-risk customers using data analytics techniques.",
    image: projectTelecomChurn,
    techStack: ["Python", "Power BI", "Pandas", "Data Analytics"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
