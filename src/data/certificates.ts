export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "MERN Stack Development",
    issuer: "Online Academy",
    date: "2025",
    image: "/placeholder.svg",
  },
  {
    id: "cert-2",
    title: "React.js Fundamentals",
    issuer: "Online Academy",
    date: "2024",
    image: "/placeholder.svg",
  },
  {
    id: "cert-3",
    title: "Python Programming",
    issuer: "Online Academy",
    date: "2024",
    image: "/placeholder.svg",
  },
  {
    id: "cert-4",
    title: "Data Analytics",
    issuer: "Online Academy",
    date: "2024",
    image: "/placeholder.svg",
  },
  {
    id: "cert-5",
    title: "Web Development Bootcamp",
    issuer: "Online Academy",
    date: "2023",
    image: "/placeholder.svg",
  },
];
