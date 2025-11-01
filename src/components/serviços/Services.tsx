import { motion } from "framer-motion";
import ServiceCard from "./ServicesCard.tsx";
import { services } from "./data.tsx";

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-6 md:px-10 max-w-6xl mx-auto text-slate-900 dark:text-white"
    >
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-blue-400">
          O que eu posso <span className="text-blue-900 dark:text-blue-400">te oferecer?</span>
        </h2>
        <p className="text-slate-900 dark:text-slate-300 max-w-2xl mx-auto text-lg">
          Soluções que unem design e tecnologia para transformar ideias em experiências digitais com propósito, beleza e performance.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
