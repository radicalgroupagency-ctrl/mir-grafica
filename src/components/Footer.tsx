import { siteData } from '../data/mockData';

export function Footer() {
    const { footerText, navigation } = siteData;

    return (
        <footer className="bg-slate-50 dark:bg-[#0f130c] pt-12 md:pt-16 pb-6 md:pb-8 border-t border-slate-200 dark:border-neutral-border" id="contacto">
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">

                <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xl font-black text-primary uppercase tracking-tighter">MIR GRÁFICA</span>
                    </div>
                    <p className="text-slate-400 text-base max-w-sm mb-6">
                        Líderes em soluções de impressão de grande formato e design criativo. Elevamos a presença da sua marca com qualidade superior.
                    </p>
                    <div className="flex gap-3">
                        <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-neutral-dark border border-slate-200 dark:border-neutral-border flex items-center justify-center text-slate-600 dark:text-white hover:bg-primary hover:text-background-dark transition-all" href="#">
                            <span className="material-symbols-outlined text-sm">social_leaderboard</span>
                        </a>
                        <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-neutral-dark border border-slate-200 dark:border-neutral-border flex items-center justify-center text-slate-600 dark:text-white hover:bg-primary hover:text-background-dark transition-all" href="#">
                            <span className="material-symbols-outlined text-sm">camera_enhance</span>
                        </a>
                        <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-neutral-dark border border-slate-200 dark:border-neutral-border flex items-center justify-center text-slate-600 dark:text-white hover:bg-primary hover:text-background-dark transition-all" href="https://wa.me/258848380570" target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined text-sm">chat</span>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold uppercase tracking-tighter mb-4 text-primary">Links Rápidos</h4>
                    <ul className="space-y-2">
                        {navigation.slice(0, 4).map((link, idx) => (
                            <li key={idx}>
                                <a className="text-slate-400 hover:text-primary transition-colors" href={link.path}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold uppercase tracking-tighter mb-4 text-primary">Contacto</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-slate-400 text-sm">
                            <span className="material-symbols-outlined text-primary text-base mt-0.5">call</span>
                            <div>
                                <a href="tel:+258876984490" className="hover:text-primary transition-colors block">+258 87 698 4490</a>
                                <a href="https://wa.me/258848380570" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">+258 84 838 0570 (WhatsApp)</a>
                            </div>
                        </li>
                        <li className="flex items-center gap-2 text-slate-400 text-sm">
                            <span className="material-symbols-outlined text-primary text-base">mail</span>
                            <a href="mailto:info@mir-lda.com" className="hover:text-primary transition-colors">info@mir-lda.com</a>
                        </li>
                        <li className="flex items-start gap-2 text-slate-400 text-sm">
                            <span className="material-symbols-outlined text-primary text-base mt-0.5">location_on</span>
                            <span>Meia Via, Nampula,<br />Moçambique</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-200 dark:border-neutral-border flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-xs">{footerText}</p>
                <div className="flex gap-8">
                    <a className="text-xs text-slate-500 hover:text-primary uppercase tracking-widest" href="#">Política de Privacidade</a>
                    <a className="text-xs text-slate-500 hover:text-primary uppercase tracking-widest" href="#">Termos de Uso</a>
                </div>
            </div>
        </footer>
    );
}
