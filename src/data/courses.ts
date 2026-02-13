export interface Course {
  title: string;
  platform?: string;
  year?: string;
  description?: string;
}

export const courses: Course[] = [
  {
    title: "MERN Stack Development",
    platform: "Online",
    year: "2025",
    description: "Full-stack web development with MongoDB, Express, React, and Node.js.",
  },
  {
    title: "React.js Training",
    platform: "Online",
    year: "2024",
    description: "Deep dive into React.js, hooks, state management, and component architecture.",
  },
  {
    title: "Data Analytics Basics",
    platform: "Online",
    year: "2024",
    description: "Fundamentals of data analysis, visualization, and interpretation using Python and Power BI.",
  },
  {
    title: "Python Programming",
    platform: "Online",
    year: "2024",
    description: "Core Python programming concepts including OOP, file handling, and libraries.",
  },
  {
    title: "Web Development Bootcamp",
    platform: "Online",
    year: "2023",
    description: "Comprehensive web development covering HTML, CSS, JavaScript, and backend technologies.",
  },
];
