export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Charans Degree College",
    period: "2023 – 2026",
    description: "Currently in 6th semester, focusing on software development, database management, and web technologies.",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Your School Name",
    period: "2021 – 2023",
    description: "Completed higher secondary education with a focus on science and mathematics.",
  },
  {
    degree: "Secondary School (10th)",
    institution: "Your School Name",
    period: "2019 – 2021",
    description: "Completed secondary education with distinction.",
  },
];
