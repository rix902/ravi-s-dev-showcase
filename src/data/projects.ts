import projectEnvClub from "@/assets/project-env-club.jpg";
import projectTelecomChurn from "@/assets/project-telecom-churn.jpg";
import projectHospitalQueue from "@/assets/project-hospital-queue.jpg";
import projectIotPlant from "@/assets/project-iot-plant.jpg";
import projectSmartFarming from "@/assets/project-smart-farming.jpg";

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
    id: "env-club",
    title: "Environment Club Management System",
    description:
      "A comprehensive web application to manage environment club activities, memberships, events, and reports with role-based access control.",
    image: projectEnvClub,
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
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
  {
    id: "hospital-queue",
    title: "Hospital Queue Management System",
    description:
      "A MERN stack application that streamlines hospital patient queue management with real-time updates and priority-based scheduling.",
    image: projectHospitalQueue,
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "iot-plant",
    title: "IoT Automatic Plant Watering System",
    description:
      "An Arduino-based IoT project that automatically waters plants based on soil moisture sensor readings with a web dashboard for monitoring.",
    image: projectIotPlant,
    techStack: ["Arduino", "C++", "IoT", "Sensors"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "smart-farming",
    title: "Smart Farming using Piezoelectric Sensors",
    description:
      "An innovative farming solution that uses piezoelectric sensors for soil analysis and automated irrigation to optimize crop yields.",
    image: projectSmartFarming,
    techStack: ["Arduino", "Sensors", "IoT", "Python"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
