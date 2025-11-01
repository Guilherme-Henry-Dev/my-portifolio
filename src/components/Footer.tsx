export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-slate-500">
                <p className="text-lg">© {new Date().getFullYear()} Guilherme Henry</p>
                <div className="flex items-center gap-4 text-lg">
                    <a className="hover:text-slate-800" href="https://www.linkedin.com/in/guilhermehenryf" target="_blank">LinkedIn</a>
                    <a className="hover:text-slate-800" href="https://github.com/Guilherme-Henry-Dev" target="_blank">GitHub</a>
                    <a className="hover:text-slate-800" href="https://www.behance.net/guilhermehenry3#" target="_black">Behance</a>
                </div>
            </div>
        </footer>
    );
}