export default function SoftSkills() {
  const softSkills = [
    "Abertura a feedbacks",
    "Adaptabilidade",
    "Curiosidade técnica",
    "Organização pessoal",
    "Comunicação assíncrona",
    "Proatividade",
    "Pensamento crítico",
  ];

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl shadow-sm text-left">
      <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-400">
        Soft Skills
      </h3>
      <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
        Aspectos comportamentais que mantenho em evidência para colaborar bem com equipes multidisciplinares.
      </p>
      <div className="flex flex-wrap gap-2">
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-50 dark:bg-slate-700 text-blue-900 dark:text-blue-300 text-xs rounded-lg border border-blue-900/30 dark:border-blue-400/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
