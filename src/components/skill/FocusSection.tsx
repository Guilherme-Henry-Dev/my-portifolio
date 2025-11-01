interface FocusSectionProps {
  title: string;
  text: string;
  tags: string[];
}

export default function FocusSection({ title, text, tags }: FocusSectionProps) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-400">{title}</h3>
      <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">{text}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 border border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-300 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
