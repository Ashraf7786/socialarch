import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Services as ServicesComponent } from '../components/Services';
import { SocialShowcase } from '../components/SocialShowcase';
import { Link } from 'react-router-dom';

export function Services() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.hero-text span',
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const processSteps = [
        { title: "Discovery & Strategy", desc: "We dive deep into your brand, audience, and goals to build a custom roadmap." },
        { title: "Creative Production", desc: "Our team produces high-end assets, from short-form videos to ad graphics." },
        { title: "Execution & Management", desc: "We handle posting, community engagement, and ad campaign structure." },
        { title: "Analysis & Scaling", desc: "Constant A/B testing and reporting to ensure month-over-month growth." }
    ];

    return (
        <div className="min-h-screen bg-brand-dark pt-24">
            <Helmet>
                <title>Our Services - SocialArk | Social Media Agency</title>
                <meta name="description" content="Explore our premium social media marketing, paid advertising, and content creation services designed to build your brand and drive ROI." />
            </Helmet>

            {/* Hero Section */}
            <section ref={heroRef} className="relative py-24 px-6 md:px-12 overflow-hidden flex flex-col items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-brand-red rounded-full blur-[120px] opacity-20 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
                >
                    <span className="text-brand-red text-sm font-semibold tracking-wider uppercase">What We Do</span>
                </motion.div>

                <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 overflow-hidden flex flex-wrap justify-center gap-x-4">
                    <span>Strategic</span> <span>Growth.</span><br />
                    <span className="text-brand-red font-serif italic">Creative</span> <span>Excellence.</span>
                </h1>

                <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
                    We don't just post content; we engineer attention. Explore our suite of elite services designed to scale modern brands.
                </p>
            </section>

            {/* Core Services Component */}
            <ServicesComponent />

            {/* Process Section */}
            <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] relative border-y border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16 md:mb-24">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            How We <span className="text-brand-red font-serif italic">Operate</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl text-lg">A proven, systematic approach to scaling your brand's digital presence predictably.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
                            >
                                <div className="text-brand-red text-6xl font-bold opacity-20 mb-6 group-hover:opacity-40 transition-opacity">
                                    0{index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Showcase Component */}
            <SocialShowcase />

            {/* Call to Action */}
            <section className="py-32 px-6 md:px-12 relative overflow-hidden flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-brand-red/5" />

                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 relative z-10">
                    Ready to <span className="text-brand-red font-serif italic">Dominate?</span>
                </h2>

                <p className="max-w-xl mx-auto text-slate-400 text-lg mb-12 relative z-10">
                    Stop leaving money on the table with mediocre content and unoptimized campaigns. Let's scale your brand to the next level.
                </p>

                <Link to="/contact" className="relative z-10 inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-red hover:bg-[#C8232B] text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95">
                    Book a Discovery Call
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>
        </div>
    );
}
