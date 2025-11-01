import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

import github from "../../assets/img/github.png";
import agencia from "../../assets/img/urban-roots-coffe.png";
import pokedex from "../../assets/img/pokedex.png";
import nexusvault from "../../assets/img/nexulvault.jpg";

interface Projeto {
  id: number;
  name: string;
  desc: string;
  stack: string[];
  img: string;
  link: string;
  repo: string;
  status: string;
  tipo: string;
  detalhes?: string[];
}

export default function Projects() {
  const [selected, setSelected] = useState<Projeto | null>(null);

  const projetos: Projeto[] = [
    {
      id: 1,
      name: "Urban Roots Coffe",
      desc: "Site de apresentação de marca e loja de café com interface moderna, design responsivo e navegação fluida.",
      stack: ["React", "TypeScript", "TailwindCSS"],
      img: agencia,
      link: "https://urban-roots-coffe.vercel.app",
      repo: "https://github.com/Guilherme-Henry-Dev/urban-roots-coffe",
      status: "Concluído",
      tipo: "Design + Front-end",
      detalhes: [
        "Design autoral e responsivo com TailwindCSS.",
        "SPA otimizada com React Router DOM.",
        "Animações sutis com Framer Motion.",
        "Deploy otimizado via Vercel.",
      ],
    },
    {
      id: 2,
      name: "GitHub Fetch API",
      desc: "App para buscar perfis e repositórios do GitHub. Consome a API e exibe dados em tempo real com TypeScript.",
      stack: ["HTML", "CSS", "JavaScript", "Fetch API"],
      img: github,
      link: "https://guilherme-henry-dev.github.io/GitHub-Fetch-API",
      repo: "https://github.com/Guilherme-Henry-Dev/GitHub-Fetch-API",
      status: "Concluído",
      tipo: "Front-end",
      detalhes: [
        "Integração com a API pública do GitHub.",
        "Exibição dinâmica de repositórios e perfis.",
        "Filtro em tempo real por linguagem.",
      ],
    },
    {
      id: 3,
      name: "My Pokédex",
      desc: "SPA criada em React + TypeScript, consumindo a API pública de Pokémon e exibindo dados em uma interface interativa e responsiva.",
      stack: ["React", "TypeScript", "TailwindCSS", "Context API"],
      img: pokedex,
      link: "https://my-pokedex-omega-nine.vercel.app",
      repo: "https://github.com/Guilherme-Henry-Dev/my-pokedex",
      status: "Concluído",
      tipo: "Front-end",
      detalhes: [
        "Gerenciamento de estado global com Context API.",
        "Consumo de API com tipagem forte em TypeScript.",
        "Design minimalista inspirado em apps mobile.",
      ],
    },
    {
      id: 4,
      name: "NexusVault",
      desc: "Plataforma full-stack para organização e descoberta de conteúdos sobre games, animes e séries. O projeto combina um front-end moderno com um back-end robusto e tipado, garantindo desempenho, escalabilidade e design imersivo.",
      stack: [ "React", "TypeScript", "TailwindCSS", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Docker" ],
      img: nexusvault,
      link: "https://github.com/Guilherme-Henry-Dev/nexusvault-ui",
      repo: "https://github.com/Guilherme-Henry-Dev/nexusvault-api",
      status: "Concluído",
      tipo: "Full-Stack",
      detalhes: [
        "Arquitetura full-stack com comunicação entre React + API Express.",
        "Banco de dados PostgreSQL com ORM Prisma e ambiente containerizado via Docker.",
        "Design autoral e responsivo desenvolvido com TailwindCSS e animações Framer Motion.",
        "Sistema de cadastro e exibição de conteúdos (games, animes e séries) com rotas dinâmicas e filtros por categoria.",
        "Estrutura de código escalável, com tipagem completa em TypeScript e padrões RESTful para manutenção e expansão futura."
      ],
    },

  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        <span className="text-blue-400">Projetos</span> em destaque
      </h2>

      <div className="max-w-6xl mx-auto grid gap-12 md:gap-16">
        {projetos.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/60 hover:bg-gray-800 transition-all rounded-2xl shadow-lg overflow-hidden border border-gray-700 hover:border-blue-500"
          >
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-medium">
                    {p.tipo}
                  </span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-medium">
                    {p.status}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3">{p.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700 px-3 py-1 rounded-full text-gray-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setSelected(p)}
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    <FaExternalLinkAlt /> Detalhes
                  </button>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    <FaGithub /> Código
                  </a>
                </div>
              </div>

              <div className="flex justify-center items-center bg-gray-900/60">
                <img
                  src={p.img}
                  alt={p.name}
                  className="rounded-xl object-cover w-full h-64 md:h-72 lg:h-80 shadow-xl hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            <motion.div
              className="fixed inset-0 flex justify-center items-center z-50 px-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="relative bg-gray-900 text-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-gray-700">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                >
                  <FaTimes />
                </button>

                <img
                  src={selected.img}
                  alt={selected.name}
                  className="rounded-lg mb-6 w-full shadow-lg"
                />

                <h3 className="text-2xl font-bold mb-2">{selected.name}</h3>
                <p className="text-gray-300 mb-6">{selected.desc}</p>

                <h4 className="text-lg font-semibold mb-2 text-blue-400">
                  Tecnologias utilizadas
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700 px-3 py-1 rounded-full text-gray-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {selected.detalhes && (
                  <>
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">
                      Principais recursos
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
                      {selected.detalhes.map((det, i) => (
                        <li key={i}>{det}</li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="flex gap-4">
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    <FaExternalLinkAlt /> Ver projeto
                  </a>
                  <a
                    href={selected.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    <FaGithub /> Repositório
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
