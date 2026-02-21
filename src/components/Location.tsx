import { useEffect, useRef, useState } from 'react';
import { siteData } from '../data/mockData';

// Use every 3rd frame for smooth animation without overloading (96 frames total)
const TOTAL_FRAMES = 288;
const STEP = 3;
const FRAMES: string[] = [];
for (let i = 1; i <= TOTAL_FRAMES; i += STEP) {
    FRAMES.push(`/mapa-animado/ezgif-frame-${String(i).padStart(3, '0')}.jpg`);
}

export function Location() {
    const { location } = siteData;
    const [currentFrame, setCurrentFrame] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentFrame(f => (f + 1) % FRAMES.length);
        }, 80); // ~12.5 fps
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, []);

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-[#0f130c] border-t border-slate-100 dark:border-neutral-border" id="localizacao">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest mb-3 text-xs md:text-sm">
                        {location.title}
                    </h2>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white">
                        {location.headline.split('Encontrar')[0]} <span className="text-outline">Encontrar</span>
                    </h3>
                    <p className="mt-4 text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-primary text-base">location_on</span>
                        {location.address}
                    </p>
                    <p className="text-primary font-bold mt-1 flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-base">schedule</span>
                        {location.hours}
                    </p>
                </div>

                {/* Animated map — clickable link to Google Maps */}
                <div className="relative max-w-5xl mx-auto">
                    <a
                        href={location.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Abrir no Google Maps"
                        className="block relative rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-border bg-neutral-dark aspect-video cursor-pointer"
                    >
                        {/* Two stacked images for crossfade — no remount flicker */}
                        <img
                            src={FRAMES[(currentFrame - 1 + FRAMES.length) % FRAMES.length]}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            draggable={false}
                            aria-hidden="true"
                        />
                        <img
                            src={FRAMES[currentFrame]}
                            alt="Mapa Animado - MIR GRÁFICA Meia Via Nampula"
                            className="absolute inset-0 w-full h-full object-cover"
                            draggable={false}
                        />
                        {/* Tiny bouncing pin */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="material-symbols-outlined animate-bounce text-primary drop-shadow-lg" style={{ fontSize: '20px' }}>location_on</span>
                        </div>
                        {/* Corner label */}
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg border border-white/10">
                            <span className="font-bold text-primary">MIR GRÁFICA</span> — Meia Via, Nampula
                        </div>
                    </a>
                </div>

                <div className="mt-10 text-center">
                    <a
                        className="inline-flex items-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-xl font-black text-lg uppercase tracking-tighter hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors shadow-lg"
                        href={location.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="material-symbols-outlined">directions</span>
                        Chegar com GPS
                    </a>
                </div>

            </div>
        </section>
    );
}
