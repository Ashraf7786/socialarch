import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, Layout, Video, LineChart, ShieldCheck, Zap, TrendingUp, Target, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

export function About() {
    const mainRef = useRef(null);

    useGSAP(() => {
        gsap.from(".fade-up", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".fade-up",
                start: "top 80%",
            }
        });
    }, { scope: mainRef });

    return (
        <main ref={mainRef} className="w-full bg-[#050505] text-white overflow-hidden font-sans">
            <Helmet>
                <title>About Us | SocialArk Digital Marketing Agency</title>
                <meta name="description" content="Meet the minds behind SocialArk. We mix creative brilliance with psychological triggers and precise data to scale ambitious brands to industry leaders." />
                <meta name="keywords" content="about SocialArk, digital marketing experts, social media strategists, creative agency, growth marketing team, SocialArk methodology" />
            </Helmet>

            {/* 1. THE HEADER: OUR IDENTITY */}
            <section className="relative w-full min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                            <SparklesIcon />
                            <span className="text-sm font-semibold tracking-widest uppercase text-brand-red">Our Identity</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
                            The Architects of <span className="font-serif italic text-brand-red font-light">Digital Growth.</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Meet <strong className="text-white font-semibold">SocialArk</strong>—A premier <strong className="text-white font-semibold">social media marketing agency</strong> dedicated to bridging the gap between ambitious visions and measurable digital reality. We don’t just follow trends; we set the blueprint for them.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. OUR ORIGIN STORY */}
            <section className="py-24 px-6 md:px-12 relative z-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="fade-up relative">
                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 relative">
                            <div className="absolute inset-0 bg-brand-red/10 z-10 mix-blend-overlay" />
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Agency Setup"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Floating box */}
                        <div className="absolute -bottom-10 -right-10 bg-[#111] p-8 rounded-3xl border border-white/10 shadow-2xl hidden md:block max-w-sm">
                            <h4 className="text-xl font-bold mb-2">Digital Marketing Excellence</h4>
                            <p className="text-slate-400 text-sm">Prioritizing real Digital Results over empty vanity metrics.</p>
                        </div>
                    </div>

                    <div className="fade-up space-y-8 lg:pl-10">
                        <div className="text-sm font-bold tracking-widest uppercase text-brand-red mb-4">Our Origin Story</div>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Why We Built SocialArk</h2>
                        <div className="w-20 h-1 bg-brand-red rounded-full" />

                        <p className="text-slate-300 text-lg leading-relaxed">
                            In a digital world cluttered with "noise," most brands struggle to be heard. <strong className="text-white font-semibold">SocialArk</strong> was founded on a single, powerful realization: <strong className="text-brand-red font-serif italic font-normal text-xl">Visibility without Strategy is Vanity.</strong> We saw countless businesses investing in social media without seeing a single dollar in return. They had the "Social," but they lacked the "Arch"—the structural support needed to reach their goals.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            We started as a small team of creators and data scientists who were tired of the "one-size-fits-all" approach of traditional agencies. We wanted to build something different—a <strong className="text-white font-medium">digital marketing company</strong> that prioritizes <strong className="text-white font-medium">Digital Results</strong> over empty metrics. Today, SocialArk stands as a beacon for brands that demand excellence. We combine the soul of a creative boutique with the precision of a data-tech firm.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. METHODOLOGY */}
            <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 max-w-3xl mx-auto fade-up">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">The "SocialArk" <span className="text-brand-red font-serif italic font-light">Methodology</span></h2>
                        <p className="text-slate-400 text-lg">
                            Our name isn't just a label; it’s our philosophy. An arch is one of the strongest structures in architecture, capable of supporting immense weight through balance and precision. We apply this same principle to your brand's digital presence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Phase 1 */}
                        <div className="bg-[#111] border border-white/5 p-10 md:p-12 rounded-[2rem] hover:border-brand-red/30 transition-colors duration-500 fade-up group">
                            <div className="w-16 h-16 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                                <Search className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Phase 1: The Foundation</h3>
                            <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-6 font-semibold">Discovery & Audit</h4>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Every great structure needs a solid base. We begin by auditing your current <strong className="text-white font-medium">social media performance</strong>, analyzing your competitors, and identifying untapped opportunities in your niche. We don't guess; we use <strong className="text-white font-medium">advanced SEO tools</strong> and social listening to understand your audience's heartbeat.
                            </p>
                        </div>

                        {/* Phase 2 */}
                        <div className="bg-[#111] border border-white/5 p-10 md:p-12 rounded-[2rem] hover:border-brand-red/30 transition-colors duration-500 fade-up group md:translate-y-12">
                            <div className="w-16 h-16 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                                <Layout className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Phase 2: The Framework</h3>
                            <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-6 font-semibold">Strategy & Identity</h4>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Once we have the data, we build the frame. This involves defining your brand voice, visual aesthetic (like the premium dark theme you see here), and your <strong className="text-white font-medium">content pillars</strong>. We ensure that your brand story is consistent across all touchpoints—from <strong className="text-white font-medium">Instagram Reels</strong> to <strong className="text-white font-medium">LinkedIn thought leadership</strong>.
                            </p>
                        </div>

                        {/* Phase 3 */}
                        <div className="bg-[#111] border border-white/5 p-10 md:p-12 rounded-[2rem] hover:border-brand-red/30 transition-colors duration-500 fade-up group">
                            <div className="w-16 h-16 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                                <Video className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Phase 3: The Keystone</h3>
                            <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-6 font-semibold">Execution & Creative</h4>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                The keystone is the piece that holds the arch together. For us, that’s <strong className="text-white font-medium">Content</strong>. We produce high-fidelity visuals, viral-ready videos, and persuasive copy designed to stop the scroll and trigger action.
                            </p>
                        </div>

                        {/* Phase 4 */}
                        <div className="bg-[#111] border border-white/5 p-10 md:p-12 rounded-[2rem] hover:border-brand-red/30 transition-colors duration-500 fade-up group md:translate-y-12">
                            <div className="w-16 h-16 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                                <LineChart className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Phase 4: The Ascent</h3>
                            <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-6 font-semibold">Scaling & ROI</h4>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                A successful arch leads somewhere. Our goal is to drive your brand upward. By utilizing <strong className="text-white font-medium">AI-driven ad optimization</strong> and <strong className="text-white font-medium">Conversion Rate Optimization (CRO)</strong>, we turn your social media traffic into a predictable revenue stream.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MISSION & VISION directly to 5. WHY CHOOSE US */}
            <section className="py-24 px-6 md:px-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 fade-up">

                    {/* Mission & Vision */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center"><Target className="w-5 h-5 text-white" /></span>
                                Our Mission
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed bg-[#111] p-8 rounded-3xl border border-white/5">
                                To empower businesses by providing them with the elite tools and strategies necessary to dominate their digital landscape. We aim to be the silent engine behind the world’s most influential brands.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-6 flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/20 flex items-center justify-center"><Globe className="w-5 h-5 text-brand-red" /></span>
                                Our Vision
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed bg-[#111] p-8 rounded-3xl border border-white/5">
                                To redefine the standards of the <strong className="text-white font-medium">digital marketing industry</strong>. We envision a future where marketing isn't intrusive but inspirational. At SocialArk, we are constantly innovating—integrating <strong className="text-white font-medium">AI, machine learning, and psychological triggers</strong> into our campaigns to ensure our clients are always two steps ahead of the competition.
                            </p>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="bg-[#0a0a0a] rounded-[2.5rem] p-10 md:p-12 border border-brand-red/20 shadow-[0_0_50px_rgba(232,49,58,0.05)] relative overflow-hidden">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px]" />

                        <h2 className="text-4xl font-bold mb-10 relative z-10">Why Choose Us? <span className="block text-xl font-normal text-slate-400 mt-2 font-serif italic text-brand-red/80">The Competitive Edge</span></h2>

                        <div className="space-y-10 relative z-10">
                            <div className="flex gap-6 items-start group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                                    <ShieldCheck className="w-6 h-6 text-slate-300 group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Transparency First</h4>
                                    <p className="text-slate-400">No "black box" marketing. You get real-time dashboards and honest reporting.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                                    <Zap className="w-6 h-6 text-slate-300 group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Creative Radicals</h4>
                                    <p className="text-slate-400">We hate "boring." Our design team pushes boundaries to ensure your brand looks like a market leader.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                                    <TrendingUp className="w-6 h-6 text-slate-300 group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Result-Obsessed</h4>
                                    <p className="text-slate-400">If it doesn’t move the needle (Sales, Leads, or Brand Equity), we don't do it.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 6. MEET THE MINDS */}
            <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5 text-center">
                <div className="max-w-4xl mx-auto fade-up">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Meet the Minds Behind <span className="font-serif italic text-brand-red font-light">the Arch.</span></h2>
                    <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-light mb-12">
                        Our team is a global collective of <strong className="text-white font-medium">social media strategists, content creators, and performance marketers</strong>. We are united by a shared obsession: Growth. From our lead designers who craft your visual identity to our analysts who crunch the numbers, every member of the SocialArk family is a master of their craft.
                    </p>

                    <Link to="/contact">
                        <button className="inline-flex items-center gap-3 bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-red transition-colors duration-300 group shadow-xl shadow-brand-red/20">
                            Work With Our Experts
                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                        </button>
                    </Link>
                </div>
            </section>

        </main>
    );
}

function SparklesIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" />
        </svg>
    )
}
