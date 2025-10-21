import github from '../../assets/img/github.png'
import agencia from '../../assets/img/urban-roots-coffe.png'
import pokedex from '../../assets/img/pokedex.png'

interface Projeto {
  id: number
  name: string
  desc: string
  stack: string
  img: string
  link: string
  repo: string
}

export default function Projects() {
  const projetos: Projeto[] = [
    {
      id: 1,
      name: "Urban Roots Coffe",
      desc: "Site de apresentação de marca e loja de café, com interface moderna, design responsivo e navegação fluida. O usuário pode explorar produtos, saber mais sobre a marca e seus espaços.",
      stack: "React, TypeScript, TailwindCSS.",
      img: agencia,
      link: "https://urban-roots-coffe.vercel.app",
      repo: "https://github.com/Guilherme-Henry-Dev/urban-roots-coffe"
    },
    {
      id: 2,
      name: "GitHub Fetch API",
      desc: "App para buscar perfis e repositórios do GitHub. Consome a API do GitHub e exibe dados em tempo real com TypeScript.",
      stack: "HTML, CSS, JavaScript, Fetch API.",
      img: github, 
      link: "https://guilherme-henry-dev.github.io/GitHub-Fetch-API",
      repo: "https://github.com/Guilherme-Henry-Dev/GitHub-Fetch-API"
    },
    {
      id: 3,
      name: "My Pokédex",
      desc: "SPA criado em React + TypeScript, consumindo a API pública de Pokémon e exibindo dados em uma UI interativa.",
      stack: "React, TypeScript, TailwindCSS, Context API.",
      img: pokedex, 
      link: "https://my-pokedex-omega-nine.vercel.app",
      repo: "https://github.com/Guilherme-Henry-Dev/my-pokedex"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Projeto <span className="text-blue-400">mais recente</span>
      </h2>

      <div className="max-w-6xl mx-auto space-y-24">
        {projetos.map((p) => (
          <div
            key={p.id}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-6xl font-extrabold text-gray-700 dark:text-gray-500 mb-4">
                {String(p.id).padStart(2, "0")}
              </h3>
              <h4 className="text-2xl md:text-3xl font-bold mb-4">{p.name}</h4>
              <p className="text-gray-300 mb-4">{p.desc}</p>
              <p className="text-blue-400 font-mono text-sm">{p.stack}</p>

              <div className="flex items-center gap-4 mt-6">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-500 rounded-full hover:bg-green-400 transition"
                >
                  🔗
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                >
                  🐙
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={p.img}
                alt={p.name}
                className="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
