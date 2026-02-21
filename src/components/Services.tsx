import { siteData } from '../data/mockData';

export function Services() {
    const { services } = siteData;

    return (
        <section className="py-24 bg-white dark:bg-neutral-dark relative" id="servicos">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest mb-4">
                        {services.title}
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white">
                        {services.headline.split(' ')[0]} <span className="text-outline">{services.headline.split(' ')[1]}</span>
                    </h3>
                    <p className="text-slate-400 mt-4 max-w-sm mx-auto">
                        {services.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.items.map((service, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-xl bg-slate-50 dark:bg-neutral-border/30 border border-slate-200 dark:border-neutral-border hover:border-primary/50 transition-all duration-500">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                                    src={service.img}
                                />
                            </div>
                            <div className="absolute bottom-0 p-8 pt-16 bg-gradient-to-t from-black/80 to-transparent w-full">
                                <span className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-2 block">
                                    {service.category}
                                </span>
                                <h4 className="text-2xl font-bold uppercase tracking-tighter mb-2 text-white">
                                    {service.title}
                                </h4>
                                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
