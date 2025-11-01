import { motion } from "framer-motion";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { icon: Icon, title, description } = service;
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToContact = () => {
    if (location.pathname !== "/contact") {
      navigate("/contact", { state: { scrollTo: "contact" } });
    } else {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.div
      className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-between text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="flex justify-center mb-5">
          <Icon className="text-5xl text-blue-500" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
        <p className="text-gray-300 text-center leading-relaxed">
          {description}
        </p>
      </div>

      <button
        onClick={handleScrollToContact}
        className="mt-6 bg-blue-500 text-white font-medium px-6 py-2 rounded-full hover:bg-blue-600 active:scale-[0.98] transition-transform duration-200 self-center"
      >
        Entrar em contato
      </button>
    </motion.div>
  );
}
