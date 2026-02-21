import { siteData } from '../data/mockData';

export function Hero() {
    const { companyName, tagline, subTagline, marqueeText } = siteData;

    return (
        <section className="relative pt-20 md:pt-28 overflow-hidden min-h-[85vh] md:min-h-[80vh] flex flex-col">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10"></div>
                <img
                    className="w-full h-full object-cover opacity-70"
                    alt="Industrial printer"
                    src={siteData.heroImages.mainPlaceholder}
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 text-center flex-1 flex flex-col items-center justify-center py-16 md:py-20">
                <h2 className="text-primary text-xs md:text-base font-bold uppercase tracking-[0.25em] mb-3">
                    {tagline}
                </h2>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6 text-slate-100">
                    {companyName.split(' ')[0]} <span className="text-primary">{companyName.split(' ')[1]}</span>
                </h1>

                <p className="text-base md:text-2xl font-light max-w-2xl mx-auto mb-8 md:mb-10 text-slate-300 px-2">
                    {subTagline.split('Em Grande Formato')[0]}
                    <span className="font-bold text-white uppercase italic">Em Grande Formato</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
                    <a href="https://wa.me/258848380570" target="_blank" rel="noopener noreferrer" className="bg-primary text-background-dark px-6 py-3.5 rounded-xl font-black text-base uppercase tracking-tighter hover:bg-white transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-base">chat</span>
                        Fale Connosco
                    </a>
                    <a href="#servicos" className="border-2 border-white/30 hover:border-primary/50 text-white px-6 py-3.5 rounded-xl font-bold text-base uppercase tracking-tighter backdrop-blur-sm transition-all flex items-center justify-center">
                        Nossos Serviços
                    </a>
                </div>
            </div>

            <div className="relative w-full bg-primary py-1.5 overflow-hidden whitespace-nowrap border-y border-white/10 mt-auto">
                <div className="inline-block animate-marquee uppercase font-bold text-background-dark text-sm tracking-widest">
                    {marqueeText} {marqueeText}
                </div>
            </div>
        </section>
    );
}
