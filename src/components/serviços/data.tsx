import { FaCode, FaServer, FaPaintBrush, FaPalette } from "react-icons/fa";

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: FaCode,
    title: "Desenvolvimento Web (Front-end)",
    description:
      "Interfaces modernas, responsivas e acessíveis com React + TypeScript e Tailwind, focadas em performance.",
  },
  {
    icon: FaServer,
    title: "Back-end e APIs",
    description:
      "APIs REST com Node.js/Express, integração com PostgreSQL e Prisma, deploy e Docker.",
  },
  {
    icon: FaPaintBrush,
    title: "Design Gráfico",
    description:
      "Identidades visuais, logos e materiais gráficos que conectam marca e público.",
  },
  {
    icon: FaPalette,
    title: "UI/UX Design",
    description:
      "Experiências digitais com hierarquia visual clara, usabilidade e consistência.",
  },
];
