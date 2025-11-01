import { useParams, Link } from "react-router-dom";


export default function ProjectDetails() {
  const { id } = useParams();



  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-blue-400">
        Detalhes do projeto {id}
      </h1>

      <p className="text-slate-700 dark:text-slate-300 mb-6">
        Aqui você pode exibir descrição completa, stack usada, screenshots,
        desafios, aprendizados e links (live/repo).
      </p>

      {/* {project && <img src={project.image} alt={project.title} className="rounded-xl mb-6" />} */}

      <div className="flex gap-3">
        <Link to="/projects" className="px-4 py-2 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800">
          ← Voltar para projetos
        </Link>
        <Link to="/" className="px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800">
          Ir para Home
        </Link>
      </div>
    </section>
  );
}
