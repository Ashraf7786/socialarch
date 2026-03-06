import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phones = [
    {
        id: 1,
        video: "https://videos.pexels.com/video-files/853889/853889-sd_640_360_25fps.mp4",
        rotation: -5,
        yOffset: 20
    },
    {
        id: 2,
        video: "https://videos.pexels.com/video-files/2871908/2871908-sd_360_640_25fps.mp4",
        rotation: 0,
        yOffset: 0
    },
    {
        id: 3,
        video: "https://videos.pexels.com/video-files/3206300/3206300-sd_360_640_25fps.mp4",
        rotation: 5,
        yOffset: 20
    }
];

export function SocialShowcase() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const phonesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background text animation
            gsap.fromTo('.bg-text',
                { x: '10%' },
                {
                    x: '-20%',
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                }
            );

            // Phones entrance and float animation
            phonesRef.current.forEach((phone, index) => {
                if (!phone) return;

                // Entrance
                gsap.fromTo(phone,
                    {
                        y: 150,
                        opacity: 0,
                        rotation: phones[index].rotation * 2
                    },
                    {
                        y: phones[index].yOffset,
                        opacity: 1,
                        rotation: phones[index].rotation,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 70%",
                        }
                    }
                );

                // Continuous subtle floating
                gsap.to(phone, {
                    y: `+=${15}`,
                    duration: 2 + index * 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 1.2
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full bg-[#0d0d0d] py-24 md:py-32 overflow-hidden">
            {/* Massive Background Text moving on scroll */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full whitespace-nowrap pointer-events-none z-0 overflow-hidden mix-blend-overlay opacity-20">
                <h2 className="bg-text text-[15rem] md:text-[25rem] font-bold text-white tracking-tighter leading-none select-none">
                    SOCIAL CONTENT
                </h2>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center">

                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
                    >
                        <span className="text-brand-red text-sm font-semibold tracking-wider uppercase">Social Media</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
                    >
                        Viral <span className="text-brand-red font-serif italic">Showreels</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-xl mx-auto text-slate-400 text-lg md:text-xl"
                    >
                        High-retention short-form content designed to dominate the algorithmic feeds and drive authentic engagement.
                    </motion.p>
                </div>

                {/* Phones Container */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full max-w-5xl mx-auto perspective-1000">
                    {phones.map((phone, i) => (
                        <div
                            key={phone.id}
                            ref={el => { phonesRef.current[i] = el; }}
                            className="relative w-[300px] h-[630px] shrink-0"
                            style={{
                                transform: `rotate(${phone.rotation}deg)`
                            }}
                        >
                            {/* iPhone Frame */}
                            <div
                                className="absolute inset-0 bg-black rounded-[3.5rem] border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden z-10 custom-shadow ring-1 ring-white/10 group/phone cursor-pointer"
                                onMouseEnter={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    if (video) video.play().catch(() => { });
                                }}
                                onMouseLeave={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    if (video) video.pause();
                                }}
                            >
                                {/* Dynamic Island (iPhone 14 Pro - 17 Pro style) */}
                                <div className="absolute top-3 inset-x-0 flex justify-center z-50 pointer-events-none">
                                    <div className="w-[100px] h-[30px] bg-black rounded-full flex items-center justify-between px-2 shadow-sm border border-white/5">
                                        <div className="w-2 h-2 rounded-full bg-[#111] opacity-60"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#141414] opacity-80 border border-white/10"></div>
                                    </div>
                                </div>

                                {/* Video Player / Screen */}
                                <div className="absolute inset-0 w-full h-full bg-brand-dark overflow-hidden rounded-[3rem]">
                                    <video
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover scale-105 filter contrast-125 brightness-110 saturate-[1.2] transition-transform duration-700 group-hover/phone:scale-110"
                                        poster="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop"
                                    >
                                        <source src={phone.video} type="video/mp4" />
                                    </video>

                                    {/* Overlay UI (Optional purely aesthetic for "social post" look) */}
                                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 flex flex-col justify-end">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-brand-red overflow-hidden border border-white/20">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-white text-sm font-semibold">@socialark</span>
                                        </div>
                                        <p className="text-white/80 text-xs mb-2">Elevating brand presence one reel at a time. 🚀</p>
                                    </div>

                                    {/* Sidebar actions */}
                                    <div className="absolute right-3 bottom-20 flex flex-col gap-4 z-20 items-center">
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">❤️</div>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">💬</div>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">↗️</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Glow Behind Phone */}
                            <div className="absolute inset-[-2rem] bg-brand-red/10 blur-3xl rounded-[3rem] -z-10 opacity-50 pointer-events-none" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
