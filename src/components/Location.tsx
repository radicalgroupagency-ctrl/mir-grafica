import { useEffect, useRef, useState } from 'react';
import { siteData } from '../data/mockData';

// Use every 3rd frame for smooth animation without overloading
const TOTAL_FRAMES = 288;
const STEP = 3;
const FRAMES: string[] = [];
for (let i = 1; i <= TOTAL_FRAMES; i += STEP) {
    FRAMES.push(`/mapa-animado/ezgif-frame-${String(i).padStart(3, '0')}.jpg`);
}

// Preload all frames into browser cache before animating
function preloadFrames(frames: string[]): Promise<void> {
    let loaded = 0;
    return new Promise((resolve) => {
        frames.forEach((src) => {
            const img = new Image();
            img.onload = img.onerror = () => {
                loaded++;
                if (loaded === frames.length) resolve();
            };
            img.src = src;
        });
    });
}

export function Location() {
    const { location } = siteData;
    const [currentFrame, setCurrentFrame] = useState(0);
    const [ready, setReady] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        let cancelled = false;

        // Preload all frames first, then start the infinite loop
        preloadFrames(FRAMES).then(() => {
            if (cancelled) return; // component unmounted before preload finished
            setReady(true);
            intervalRef.current = setInterval(() => {
                // % FRAMES.length guarantees infinite loop: 0 → 1 → ... → last → 0 → ...
                setCurrentFrame(f => (f + 1) % FRAMES.length);
            }, 100); // ~10 fps
        });

        return () => {
            cancelled = true; // prevent stale promise from starting a new interval
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
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
                        {/* Loading state while frames preload */}
                        {!ready && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-dark gap-3">
                                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                                <span className="text-slate-400 text-sm">A carregar mapa…</span>
                            </div>
                        )}
                        {/* Two stacked images for crossfade — no remount flicker */}
                        {ready && (
                            <>
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
                            </>
                        )}
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
