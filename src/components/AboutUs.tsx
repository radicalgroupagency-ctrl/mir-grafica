import { siteData } from '../data/mockData';

export function AboutUs() {
    const { aboutUs } = siteData;

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-neutral-dark" id="sobre">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-primary font-bold uppercase tracking-widest mb-3 text-xs md:text-sm text-center">{aboutUs.title}</h2>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white mb-6 md:mb-8 text-center">
                            {aboutUs.headline.split('\n')[0]} <br />
                            <span className="text-outline">{aboutUs.headline.split('\n')[1]}</span>
                        </h3>
                        <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                            {aboutUs.description.map((paragraph, idx) => {
                                if (idx === 0) {
                                    const splitText = paragraph.split(siteData.companyName);
                                    return (
                                        <p key={idx}>
                                            {splitText[0]}<span className="text-primary font-bold">{siteData.companyName}</span>{splitText[1]}
                                        </p>
                                    );
                                }
                                return <p key={idx}>{paragraph}</p>;
                            })}
                        </div>

                        <div className="mt-10 flex gap-8">
                            {aboutUs.stats.map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-3xl font-black text-primary italic tracking-tighter">{stat.value}</div>
                                    <div className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            alt="Equipa MIR GRÁFICA trabalhando"
                            className="rounded-xl transition-all duration-700 w-full h-[500px] object-cover border-0 outline-none"
                            src={aboutUs.imageRef}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
