import { useEffect, useRef, useState } from 'react';

const ALL_IMAGES = [
    "/images/portifolio.png",
    "/images/portifolio (2).png",
    "/images/portifolio (3).png",
    "/images/portifolio (4).png",
    "/images/portifolio (5).png",
    "/images/portifolio (6).png",
    "/images/portifolio (7).png",
    "/images/portifolio (8).png",
    "/images/portifolio (9).png",
    "/images/portifolio (10).png",
    "/images/portifolio (11).png",
    "/images/portifolio (12).png",
    "/images/portifolio (13).png",
    "/images/portifolio (14).png",
    "/images/portifolio (15).png",
    "/images/portifolio (16).png",
    "/images/portifolio (17).png",
    "/images/portifolio (18).png",
    "/images/portifolio (19).png",
    "/images/portifolio (20).png",
];

const CARD_WIDTH = 280;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;
const SPEED = 1.2; // px per frame — always running
// Triplicate so we always have content on both sides
const IMAGES = [...ALL_IMAGES, ...ALL_IMAGES, ...ALL_IMAGES];
const LOOP_LENGTH = ALL_IMAGES.length * STEP;

export function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(900);
    const offsetRef = useRef(0);
    const [, forceRender] = useState(0);
    const rafRef = useRef<number | null>(null);

    // Measure container width on mount and resize
    useEffect(() => {
        const measure = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.clientWidth);
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    // Autonomous animation loop — no mouse interaction
    useEffect(() => {
        const loop = () => {
            offsetRef.current += SPEED;
            if (offsetRef.current >= LOOP_LENGTH) {
                offsetRef.current -= LOOP_LENGTH;
            }
            forceRender(n => n + 1);
            rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, []);

    const centerX = containerWidth / 2;
    const offset = offsetRef.current;

    return (
        <section
            className="py-16 md:py-24 bg-white dark:bg-neutral-dark border-t border-slate-100 dark:border-neutral-border"
            id="portfolio"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest mb-3 text-xs md:text-sm">Galeria de Trabalhos</h2>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white">
                        Nosso <span className="text-outline">Portfólio</span>
                    </h3>
                    <p className="text-slate-400 mt-4 max-w-sm mx-auto text-sm">
                        Conheça a excelência e a diversidade dos nossos projetos realizados.
                    </p>
                </div>
            </div>

            {/* Full-width strip */}
            <div
                ref={containerRef}
                className="relative w-full overflow-hidden"
                style={{ height: 320 }}
            >
                {/* Edge fade */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-40 bg-gradient-to-r from-white dark:from-neutral-dark to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-40 bg-gradient-to-l from-white dark:from-neutral-dark to-transparent" />

                <div
                    className="absolute flex items-center"
                    style={{
                        top: 0,
                        left: 0,
                        height: '100%',
                        transform: `translateX(${-offset}px)`,
                        willChange: 'transform',
                        gap: GAP,
                    }}
                >
                    {IMAGES.map((src, idx) => {
                        // Calculate center of this card in the container coordinate system
                        const cardLeft = idx * STEP - offset;
                        const cardCenterX = cardLeft + CARD_WIDTH / 2;
                        const dist = Math.abs(cardCenterX - centerX);

                        // Scale: 1.0 at center, 0.7 at > 1.2 cards away
                        const maxDist = STEP * 1.2;
                        const t = Math.max(0, 1 - dist / maxDist);
                        const scale = 0.70 + 0.30 * t;
                        const opacity = 0.50 + 0.50 * t;

                        return (
                            <div
                                key={idx}
                                className="flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl"
                                style={{
                                    width: CARD_WIDTH,
                                    height: 360,
                                    transform: `scale(${scale})`,
                                    opacity,
                                    zIndex: Math.round(t * 10),
                                    transformOrigin: 'center center',
                                    transition: 'none',
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`Portfólio ${(idx % ALL_IMAGES.length) + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    draggable={false}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10 md:mt-16 text-center">
                <a
                    href="https://wa.me/258848380570"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wider hover:bg-neutral-dark hover:text-primary border-2 border-primary transition-all"
                >
                    <span className="material-symbols-outlined">chat</span>
                    Solicitar Orçamento no WhatsApp
                </a>
            </div>
        </section>
    );
}
