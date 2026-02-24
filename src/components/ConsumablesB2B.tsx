import { siteData } from '../data/mockData';

export function ConsumablesB2B() {
    const { consumables, b2b, cta } = siteData;

    return (
        <>
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#0f130c]" id="consumiveis">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="mb-10 text-center">
                        <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Loja de Materiais</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter dark:text-white">
                            Nossos <span className="text-outline">Consumíveis</span>
                        </h3>
                    </div>

                    <div className="relative w-full rounded-2xl overflow-hidden mb-8 md:mb-10 h-48 md:h-80">
                        <img
                            src="/images/consumiveis.webp"
                            alt="Consumíveis MIR GRÁFICA"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {consumables.map((item, idx) => (
                            <div key={idx} className="p-5 rounded-xl bg-white dark:bg-neutral-dark border border-slate-200 dark:border-neutral-border text-center hover:border-primary/50 transition-colors">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                                <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-neutral-dark" id="b2b">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-slate-50 dark:bg-neutral-dark p-12 rounded-3xl border border-primary/20">
                        <div>
                            <h2 className="text-primary font-bold uppercase tracking-widest mb-4">{b2b.title}</h2>
                            <h3 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white mb-6">
                                {b2b.headline}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-300 text-lg mb-8">
                                {b2b.description}
                            </p>
                            <ul className="space-y-4 text-slate-800 dark:text-white font-bold">
                                {b2b.perks.map((perk, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        {perk}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-center bg-primary p-10 rounded-2xl">
                            <span className="text-background-dark text-base font-black">{b2b.discount}</span>
                            <p className="text-background-dark font-bold uppercase mt-2 text-xs">{b2b.discountLabel}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-primary relative z-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                    <h2 className="text-background-dark text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">
                        {cta.headline.split('projeto?')[0]}
                        <br /><span className="bg-background-dark text-primary px-4">projeto?</span>
                    </h2>
                    <p className="text-background-dark/80 text-lg md:text-xl font-medium max-w-2xl mb-12">
                        {cta.description}
                    </p>
                </div>
            </section>
        </>
    );
}
