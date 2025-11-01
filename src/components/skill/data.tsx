import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiPrisma,
  SiExpress,
  SiGit,
  SiJest,
  SiOpenai, 
  SiPython, 
  SiN8N, 
  SiZapier, 
  SiFlutter 
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";

export const frontend = [
  { name: "HTML5", icon: <SiHtml5/> },
  { name: "CSS3", icon: <SiCss3/>  },
  { name: "JavaScript", icon: <SiJavascript/>},
  { name: "React", icon: <SiReact/> },
  { name: "TypeScript", icon: <SiTypescript/> },
  { name: "Tailwind CSS", icon: <SiTailwindcss/> },
  { name: "Jest (RTL)", icon: <SiJest/>  },
  { name: "Git/GitHub", icon: <SiGit/> },
];

export const backend = [
  { name: "Node.js", icon: <SiNodedotjs/>  },
  { name: "Express", icon: <SiExpress/>  },
  { name: "Prisma ORM", icon: <SiPrisma/>  },
  { name: "PostgreSQL", icon: <SiPostgresql/> },
  { name: "Docker", icon: <SiDocker/>},
];

export const conceitos = [
  { name: "Integração de APIs", icon: <FaNetworkWired/>  },
  { name: "RESTful APIs", icon: <SiExpress/>  },
  { name: "Metodologias Ágeis", icon: "⚙️" },
  { name: "Versionamento de Código", icon: <SiGit/> },
];

export const exploracao = [
  { name: "OpenAI", icon: <SiOpenai /> },
  { name: "Python", icon: <SiPython /> },
  { name: "N8N", icon: <SiN8N /> },
  { name: "Automação", icon: <SiZapier /> },
  { name: "Desenvolvimento Mobile", icon: <SiFlutter /> },
];