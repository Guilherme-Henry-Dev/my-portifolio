import { motion } from "framer-motion";
import type { JSX } from "react";

interface Skill {
  name: string;
  icon: JSX.Element | string;
}

interface SkillGridProps {
  skills: Skill[];
}

export default function SkillGrid({ skills }: SkillGridProps) {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {skills.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition-transform"
        >
          <div className="text-3xl text-blue-900 dark:text-blue-400 mb-2">
            {item.icon}
          </div>
          <span className="font-medium text-sm sm:text-base">{item.name}</span>
        </div>
      ))}
    </motion.div>
  );
}
