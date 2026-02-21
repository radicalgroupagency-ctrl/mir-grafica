import { siteData } from '../data/mockData';

export function Testimonials() {
    const { testimonials } = siteData;

    return (
        <section className="py-24 bg-slate-50 dark:bg-neutral-dark border-t border-slate-200 dark:border-neutral-border" id="depoimentos">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest mb-4">{testimonials.title}</h2>
                    <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white">
                        {testimonials.headline.split('Nossos Clientes')[0]}
                        <span className="text-outline">Nossos Clientes</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.items.map((item, idx) => (
                        <div key={idx} className="p-8 rounded-xl bg-white dark:bg-[#0f130c] border border-slate-200 dark:border-neutral-border hover:border-primary/50 transition-all">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-primary fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        star
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 italic mb-6">
                                {item.text}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/40 flex-shrink-0">
                                    {item.avatar ? (
                                        <img
                                            src={item.avatar}
                                            alt={item.author}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                            {item.initials}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-tight">{item.author}</h4>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
