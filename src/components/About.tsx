import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-8 lg:px-12 min-h-[85vh] -5xl mx-auto overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 opacity-60 blur-3xl pointer-events-none" />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
          Sobre Mim
        </h2>

        <motion.p
          className="text-gray-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Sou <span className="text-blue-900 dark:text-blue-400 font-semibold">Desenvolvedor Full-Stack</span> com forte base em design e identidade visual, dedicado a gerar resultados concretos e elevar a qualidade dos projetos digitais.  
          Ao longo da minha trajetória, destaquei-me pela capacidade de resolver problemas de diferentes complexidades, garantindo excelência desde a concepção visual até a entrega final do produto.
        </motion.p>

        <motion.p
          className="text-gray-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Recebi reconhecimento de gestores, líderes e diretores pelo comprometimento e alinhamento aos padrões de qualidade, além de contribuir para o desenvolvimento de profissionais iniciantes, compartilhando conhecimento e boas práticas.
        </motion.p>

        <motion.p
          className="text-gray-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Minha experiência em <span className="text-blue-900 dark:text-blue-400 font-medium">design gráfico e social media</span> me permite unir estética e funcionalidade no desenvolvimento de interfaces, criando soluções que não apenas funcionam, mas também encantam e engajam usuários.
        </motion.p>
      </motion.div>
    </section>
  );
}
