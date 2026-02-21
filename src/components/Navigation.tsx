import { useState } from 'react';
import { siteData } from '../data/mockData';

export function Navigation() {
    const { navigation } = siteData;
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-neutral-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-neutral-border">
            <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img alt="MIR GRÁFICA Logo" className="h-10 w-auto" src={siteData.logo} />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navigation.map((link, idx) => (
                        <a
                            key={idx}
                            className="text-xs font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                            href={link.path}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        aria-label="Alternar modo escuro/claro"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-background-dark border border-slate-200 dark:border-neutral-border text-slate-600 dark:text-slate-400 hover:text-primary transition-all flex items-center justify-center"
                    >
                        <span className="material-symbols-outlined text-base dark:hidden">light_mode</span>
                        <span className="material-symbols-outlined text-base hidden dark:block text-primary">dark_mode</span>
                    </button>

                    {/* Hamburger (mobile only) */}
                    <button
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label="Abrir menu"
                        className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-background-dark border border-slate-200 dark:border-neutral-border text-slate-700 dark:text-white flex items-center justify-center"
                    >
                        <span className="material-symbols-outlined text-base">
                            {menuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-neutral-dark border-t border-slate-200 dark:border-neutral-border px-4 py-4 flex flex-col gap-4 shadow-lg">
                    {navigation.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.path}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm font-semibold uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:text-primary transition-colors py-2 border-b border-slate-100 dark:border-neutral-border last:border-0"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/258848380570"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-primary text-background-dark px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-tighter mt-2"
                    >
                        <span className="material-symbols-outlined text-base">chat</span>
                        Falar no WhatsApp
                    </a>
                </div>
            )}
        </nav>
    );
}
