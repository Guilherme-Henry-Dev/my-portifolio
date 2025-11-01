import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import avatar from "../assets/img/avatar.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">

        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
            Olá, eu sou{" "}
            <span className="text-blue-900 dark:text-blue-400">Guilherme</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
            Desenvolvedor{" "}
            <span className="text-blue-900 dark:text-blue-400">Full-Stack</span>
          </h2>

          <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            Apaixonado por criar interfaces modernas e funcionais, com foco em
            performance, acessibilidade e boas práticas de desenvolvimento.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 justify-center md:justify-start">
            <a
              href="/cv/Desenvolvedor-FrontEnd - Guilherme Henry.pdf"
              download
              className="px-6 py-3 rounded-xl bg-blue-900 text-white font-medium shadow-md hover:bg-blue-800 hover:scale-[1.02] transition-transform duration-200"
            >
              Download CV
            </a>

            <div className="flex gap-5 text-2xl text-blue-900 dark:text-blue-400">
              <a
                href="https://github.com/Guilherme-Henry-Dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:scale-110 hover:text-blue-700 dark:hover:text-blue-300 transition-transform"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/guilhermehenryf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-110 hover:text-blue-700 dark:hover:text-blue-300 transition-transform"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/5531987985524"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:scale-110 hover:text-blue-700 dark:hover:text-blue-300 transition-transform"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative group">
            {/* Glow suave e dinâmico */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-900 via-blue-600 to-blue-400 blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500 scale-110"></div>

            {/* Anel de contorno interno */}
            <div className="absolute inset-1 rounded-full border-4 border-blue-700 opacity-60 group-hover:opacity-80 transition-all duration-500"></div>

            {/* Imagem principal (maior agora) */}
            <img
              src={avatar}
              alt="Foto de Guilherme Henry, desenvolvedor Full-Stack"
              className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover shadow-xl border-2 border-blue-800 group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
