import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AboutUs() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                end: "bottom 80%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(".about-header", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2 })
            .from(".about-circles", { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4")
            .from(".about-text", { y: 30, opacity: 0, duration: 0.6, stagger: 0.2 }, "-=0.4")
            .from(".about-image", { y: 100, opacity: 0, duration: 0.8 }, "-=0.2");
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="about" className="py-24 px-8 max-w-7xl mx-auto text-white">
            {/* Top Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-20 relative">
                <div className="md:w-2/3 about-header">
                    <div className="flex items-center gap-2 mb-6 text-sm text-brand-red tracking-widest font-bold uppercase">
                        <SparklesIcon />
                        The Philosophy
                    </div>
                    <motion.h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                        Why <span className="font-serif italic text-brand-red font-light">SocialArk?</span>
                    </motion.h2>
                </div>

                {/* Right side circles */}
                <div className="md:w-1/3 flex justify-end mt-12 md:mt-0 about-circles relative">
                    <div className="relative flex items-center">
                        {/* Dark Circle */}
                        <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-brand-gray flex flex-col items-center justify-center relative z-10 -mr-6 md:-mr-10 shadow-2xl border border-white/5">
                            <span className="text-slate-400 text-xs uppercase tracking-widest mb-1">Established</span>
                            <span className="text-3xl font-bold">2010</span>
                        </div>
                        {/* Red Circle */}
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-brand-red text-white flex flex-col items-center justify-center z-0 shadow-[0_0_40px_rgba(232,49,58,0.3)]">
                            <span className="text-sm mb-1 opacity-90 font-medium">Digital Awards</span>
                            <span className="text-5xl font-bold font-serif italic">89+</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid Layout below */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                {/* Left Column Text */}
                <div className="lg:col-span-6 flex flex-col justify-center about-text pr-0 lg:pr-8">
                    <div className="space-y-8">
                        <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-normal">
                            In an era of endless scrolling, being "online" isn't enough. You need to be <strong className="text-white font-semibold">unforgettable</strong>. At <strong className="text-white font-semibold">SocialArk</strong>, we bridge the gap between your brand’s current state and its peak potential. We believe that every brand has a unique "Arch"—a trajectory of growth that requires the right support, structure, and momentum to reach the top.
                        </p>
                        <p className="text-slate-400 leading-relaxed text-lg font-normal">
                            As a full-service <strong className="text-white font-medium">social media marketing agency</strong>, we don’t just offer services; we offer partnerships. Our methodology combines <strong className="text-white font-medium">psychology-based marketing</strong> with <strong className="text-white font-medium">advanced data analytics</strong>. Whether you are a startup looking for market entry or an established enterprise aiming for digital transformation, we provide the architectural blueprint for your success. We focus on <strong className="text-white font-medium">organic reach</strong>, <strong className="text-white font-medium">paid scalability</strong>, and <strong className="text-white font-medium">brand loyalty</strong> to ensure your business doesn't just grow—it dominates.
                        </p>
                    </div>

                    <div className="mt-12 flex items-center gap-8">
                        <button className="bg-brand-red text-white font-medium px-8 py-4 rounded-full flex items-center gap-4 hover:bg-white hover:text-brand-red transition-all duration-300 shadow-lg group">
                            Partner With Us
                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Center Image Component & Stats */}
                <div className="lg:col-span-6 relative about-image mt-12 lg:mt-0">
                    <div className="rounded-[2.5rem] overflow-hidden h-full min-h-[500px] border border-white/10 relative group">
                        <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Agency Team collaboration"
                            className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
                        />
                    </div>

                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-8 left-8 right-8 md:right-auto md:-bottom-12 md:-left-12 bg-[#111] border border-white/10 text-white p-6 md:p-8 rounded-3xl md:w-80 shadow-2xl backdrop-blur-xl z-20">
                        <div className="flex flex-col gap-4">
                            <div>
                                <h3 className="text-5xl font-bold text-brand-red mb-1">
                                    10M+
                                </h3>
                                <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold">
                                    Revenue Generated
                                </p>
                            </div>
                            <div className="w-full h-px bg-white/10 my-2" />
                            {/* Avatar group */}
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[...Array(4)].map((_, i) => (
                                        <img
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-[#111]"
                                            src={`https://i.pravatar.cc/100?img=${i + 20}`}
                                            alt="Client Avatar"
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-slate-400 font-medium">Trusted by leading brands</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function SparklesIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" />
        </svg>
    )
}

