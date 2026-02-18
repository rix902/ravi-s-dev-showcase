import certMernStack from "@/assets/cert-mern-stack.jpg";
import certReactjs from "@/assets/cert-reactjs.jpg";
import certPython from "@/assets/cert-python.jpg";
import certDataAnalytics from "@/assets/cert-data-analytics.jpg";
import certWebDev from "@/assets/cert-web-dev.jpg";

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
    image: certMernStack,
  },
  {
    id: "cert-2",
    title: "React.js Fundamentals",
    issuer: "Online Academy",
    date: "2024",
    image: certReactjs,
  },
  {
    id: "cert-3",
    title: "Python Programming",
    issuer: "Online Academy",
    date: "2024",
    image: certPython,
  },
  {
    id: "cert-4",
    title: "Data Analytics",
    issuer: "Online Academy",
    date: "2024",
    image: certDataAnalytics,
  },
  {
    id: "cert-5",
    title: "Web Development Bootcamp",
    issuer: "Online Academy",
    date: "2023",
    image: certWebDev,
  },
];
