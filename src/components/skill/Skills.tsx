import { useState } from "react";
import { motion } from "framer-motion";
import Tabs from "./Tabs.tsx";
import SkillGrid from "./SkillGrid.tsx";
import FocusSection from "./FocusSection.tsx";
import SoftSkills from "./SoftSkills.tsx";
import { frontend, backend, conceitos, exploracao } from "./data.tsx";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<
    "frontend" | "backend" | "conceitos" | "exploracao"
  >("frontend");

  const categories = { frontend, backend, conceitos, exploracao };

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-10 max-w-6xl mx-auto text-center text-slate-900 dark:text-white"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        Stack & Habilidades
      </motion.h2>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <SkillGrid skills={categories[activeTab]} />

      <div className="grid md:grid-cols-2 gap-6 mb-16 text-left">
        <FocusSection
          title="Foco Atual"
          text="Tenho priorizado aprofundar conceitos avançados e aplicação prática desta stack nos projetos mais recentes."
          tags={["React", "Tailwind", "TypeScript", "Node.js", "Banco de Dados"]}
        />
        <FocusSection
          title="Foco em Exploração"
          text="Linhas de estudo que completam minha atuação atual e mantêm o aprendizado contínuo sempre ativo."
          tags={["OpenAI", "Python", "N8N", "Automação", "Desenvolvimento Mobile"]}
        />
      </div>

      <SoftSkills />
    </section>
  );
}
