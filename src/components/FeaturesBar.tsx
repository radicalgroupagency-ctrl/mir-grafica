import { siteData } from '../data/mockData';

export function FeaturesBar() {
    return (
        <section className="bg-slate-50 dark:bg-[#0f130c] border-y border-slate-200 dark:border-neutral-border py-12 relative z-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {siteData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-5 group">
                        <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-background-dark transition-all">
                            <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-500">{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
