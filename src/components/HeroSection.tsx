import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export const HeroSection: React.FC = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.hero-text', {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: 'power4.out',
        });
        gsap.from('.hero-sub', {
            y: 40,
            opacity: 0,
            duration: 1.2,
            delay: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative z-10 min-h-screen flex items-center justify-center pt-20 pointer-events-auto">
            <div className="container mx-auto px-4 text-center mt-32">
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
                    <span className="block hero-text bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-500 drop-shadow-lg">
                        Your Social Media
                    </span>
                    <span className="block hero-text text-white">
                        Noah's Ark
                    </span>
                </h1>
                <p className="hero-sub text-xl md:text-2xl text-blue-200/80 max-w-2xl mx-auto mb-12 font-medium">
                    Saving brands from the digital flood. Creating lasting impact through strategy, design, and analytics.
                </p>
                <div className="flex justify-center gap-6">
                    <button className="hero-sub bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/50 transition-all flex items-center gap-2 group transform hover:-translate-y-1 cursor-pointer">
                        Board the Ark <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <button className="hero-sub glass-panel text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-white/20 transition-all transform hover:-translate-y-1 cursor-pointer">
                        View Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
};
