import { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        category: 'Mobile Application',
        title: 'Fintech App Redesign',
        tags: ['Mobile UX', 'Development'],
        bgColor: 'from-white to-gray-300',
        laptopImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=800&q=80',
    },
    {
        category: 'Product Advertisement',
        title: 'Brand Identity Concept',
        tags: ['UI/UX Design', 'Branding'],
        bgColor: 'from-[#D4FF15] to-[#8ca80a]',
        laptopImg: 'https://images.unsplash.com/photo-1542744094-24638ea0b3b5?ixlib=rb-4.0.3&w=800&q=80',
    },
    {
        category: 'Mock-up Design',
        title: 'Creative Web Design',
        tags: ['UI/UX Design', 'Branding'],
        bgColor: 'from-slate-400 to-slate-600',
        laptopImg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&w=800&q=80',
    },
    {
        category: 'Digital Branding',
        title: 'Marketing Strategy',
        tags: ['Marketing', 'Strategy'],
        bgColor: 'from-brand-red to-[#B71C1C]',
        laptopImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=800&q=80',
    }
];

export function Projects() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(".proj-header", {
                y: 30, opacity: 0, duration: 0.6, stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });

            // individual project cards fade up on scroll
            gsap.utils.toArray('.proj-card').forEach((card: any) => {
                gsap.fromTo(card,
                    { y: 80, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="projects" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto text-white">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

                {/* Left Info Column (Sticky) */}
                <div className="lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 relative z-20">
                    <div className="flex items-center gap-2 mb-6 text-sm text-slate-300 tracking-widest font-medium proj-header">
                        <SparklesIcon />
                        PROJECTS
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 proj-header">
                        Discover the artistry behind <span className="font-serif italic text-brand-red">our projects</span>
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-12 proj-header">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                    </p>

                    <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-brand-gray flex flex-col items-center justify-center text-white cursor-pointer hover:bg-brand-red hover:text-white transition-colors duration-500 group proj-header">
                        <span className="text-sm tracking-wide mb-2 opacity-80 group-hover:opacity-100 font-medium">View Portfolio</span>
                        <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                </div>

                {/* Right Projects Vertical List */}
                <div className="lg:w-2/3 flex flex-col gap-12 md:gap-24 pb-8 w-full z-10">
                    {projects.map((proj, i) => (
                        <div
                            key={i}
                            className="w-full bg-[#0d0d0d] rounded-[2rem] overflow-hidden group border border-white/5 relative shrink-0 proj-card shadow-lg hover:-translate-y-2 transition-transform duration-500 cursor-pointer"
                        >
                            {/* Inner Padding wrapper (matching image ratio roughly) */}
                            <div className="p-4 sm:p-8 h-[350px] sm:h-[450px] md:h-[600px] pt-12 md:pt-16 relative">
                                {/* Top Badges */}
                                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex gap-2 sm:gap-3 z-10 flex-wrap">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="bg-white text-black px-4 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-wide shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Main Image Container */}
                                <div className={`w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${proj.bgColor} relative`}>
                                    {/* Dark gradient overlay for bottom text pop */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                    <img
                                        src={proj.laptopImg}
                                        alt={proj.title}
                                        className="w-full h-full object-cover mix-blend-overlay opacity-70 group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Bottom Title & Arrow */}
                                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-20 flex justify-between items-end">
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white group-hover:text-brand-red transition-colors w-2/3 leading-tight">
                                            {proj.category}
                                        </h3>
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#D4FF15] text-black flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SparklesIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#D4FF15" />
        </svg>
    )
}
