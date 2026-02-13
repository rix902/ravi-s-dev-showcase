export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Bootstrap", level: 75 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "PHP", level: 65 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
      { name: "Java", level: 70 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 65 },
      { name: "SQL", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "Bash", level: 55 },
      { name: "Dart", level: 50 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 70 },
      { name: "Arduino IDE", level: 60 },
      { name: "Power BI", level: 50 },
    ],
  },
];
