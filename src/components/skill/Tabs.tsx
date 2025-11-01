interface TabsProps {
  activeTab: "frontend" | "backend" | "conceitos" | "exploracao";
  setActiveTab: (tab: "frontend" | "backend" | "conceitos" | "exploracao") => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = ["frontend", "backend", "conceitos", "exploracao"] as const;

  return (
    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${
            activeTab === tab
              ? "bg-blue-900 text-white"
              : "bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600"
          }`}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
