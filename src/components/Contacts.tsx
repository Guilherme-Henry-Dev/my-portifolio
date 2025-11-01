import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-10 max-w-4xl mx-auto text-slate-900 dark:text-white"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="uppercase text-xs tracking-widest text-slate-500 mb-2">
          Contato
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Vamos conversar sobre o próximo projeto?
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          Prefere pular o formulário? Fica tranquilo 😎  
          Me chama direto no WhatsApp ou nas redes, bora trocar uma ideia sobre o seu projeto.
        </p>
      </motion.div>

      <motion.div
        className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start md:items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex-1 space-y-4">
          <p className="uppercase text-xs font-medium tracking-widest text-blue-900 dark:text-blue-400">
            Resposta rápida
          </p>
          <h3 className="text-2xl font-bold">
            Atendimento direto com{" "}
            <span className="text-blue-900 dark:text-blue-400">
              Guilherme Henry
            </span>
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            Vamos revisar seu design, discutir melhorias no seu site ou pensar
            juntos no próximo passo da sua marca?  
            Me manda uma mensagem, respondo rapidinho e já alinhamos o que precisa ser feito.  
            Disponível para projetos remotos ou presenciais em Belo Horizonte.
          </p>

          <motion.a
            href="https://wa.me/5531987985524"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-900 text-white font-medium shadow-md hover:bg-blue-800 transition relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(30, 58, 138, 0.5)",
                "0 0 10px rgba(30, 58, 138, 0.6)",
                "0 0 0px rgba(30, 58, 138, 0.5)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
          >
            <FaWhatsapp className="text-lg" />
            Falar com Guilherme no WhatsApp
          </motion.a>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {[
            {
              icon: <FaEnvelope />,
              text: "Email",
              href: "mailto:guilherme.henrydesigner@gmail.com",
            },
            {
              icon: <FaLinkedin />,
              text: "LinkedIn",
              href: "https://www.linkedin.com/in/guilhermehenryf",
            },
            {
              icon: <FaGithub />,
              text: "GitHub",
              href: "https://github.com/Guilherme-Henry-Dev",
            },
            {
              icon: <FaMapMarkerAlt />,
              text: "Belo Horizonte • Disponível para remoto",
              href: null,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 dark:bg-slate-700/40 border border-slate-200 dark:border-slate-600 rounded-xl p-4 flex items-start sm:items-center gap-3 transition-all duration-300 hover:border-blue-900/60 dark:hover:border-blue-400/50"
            >
              <div className="text-blue-900 dark:text-blue-400 text-xl flex-shrink-0 mt-0.5">
                {item.icon}
              </div>

              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-blue-900 dark:hover:text-blue-300 break-words leading-snug flex items-center gap-1"
                >
                  {item.text}
                  <span className="text-blue-900 dark:text-blue-400 text-xs">
                    🔗
                  </span>
                </a>
              ) : (
                <p className="text-sm font-medium break-words leading-snug text-slate-800 dark:text-slate-200">
                  {item.text}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
