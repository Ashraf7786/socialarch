import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Search, Mail, MousePointerClick, TrendingUp,
    ChevronDown, Lightbulb, Globe, Target
} from 'lucide-react';
import { useState } from 'react';

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

function FaqItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#111] hover:bg-[#151515] transition-colors">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
            >
                <h4 className="text-xl font-bold text-white">{question}</h4>
                <ChevronDown className={`w-6 h-6 text-brand-red transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
            >
                <div className="px-8 pb-6 text-lg text-slate-400">
                    {answer}
                </div>
            </motion.div>
        </div>
    );
}

export function DigitalMarketingContent() {
    return (
        <div className="space-y-32 text-slate-300 mt-20">

            {/* Intro Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="relative bg-gradient-to-br from-[#111] to-black border border-white/5 p-10 md:p-16 rounded-[3rem] overflow-hidden"
            >
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Full-Stack Digital <span className="text-brand-red italic font-serif">Domination</span></h3>
                <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed max-w-4xl relative z-10">
                    <p>Digital Marketing in 2026 isn't just about throwing money at ads or stuffing keywords on a page. It's about engineering an omnipresent ecosystem that captures traffic and forcefully converts it into revenue.</p>
                    <p>We build <strong className="text-white">high-velocity acquisition systems</strong> relying on pristine SEO, hyper-targeted email sequences, and relentless conversion optimization.</p>
                    <p className="border-l-4 border-brand-red pl-6 mt-8">Stop treating digital channels as isolated experiments. Social Ark fuses every aspect of digital marketing into one devastatingly effective growth machine.</p>
                </div>
            </motion.section>

            {/* Core Pillars */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {[
                    { title: "Search Engine Optimization", icon: <Search />, desc: "We don't just optimize meta tags. We execute deep technical SEO, programmatic content strategies, and high-authority link-building campaigns to secure the #1 position on Google for extreme-intent keywords." },
                    { title: "Email & SMS Automation", icon: <Mail />, desc: "Your list is your most valuable asset. We build intricate, behavioral-triggered email and SMS flows that nurture cold leads into fanatic buyers, drastically increasing your Customer Lifetime Value (LTV)." },
                    { title: "Conversion Rate Optimization", icon: <MousePointerClick />, desc: "Traffic means nothing if it doesn't convert. We utilize heatmapping, A/B testing, and psychological UX nudges to aggressively push your landing page conversion rates to the absolute limit." },
                    { title: "Performance Analytics", icon: <TrendingUp />, desc: "Marketing without data is just gambling. We construct proprietary dashboards utilizing GA4 and severe attribution modeling so you know exactly which marketing dollar yielded which result." }
                ].map((pillar, i) => (
                    <motion.div key={i} variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-10 hover:border-brand-red/30 transition-all flex flex-col gap-6 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors shadow-xl">
                            {pillar.icon}
                        </div>
                        <h4 className="text-2xl font-bold text-white">{pillar.title}</h4>
                        <p className="text-slate-400 leading-relaxed text-lg">{pillar.desc}</p>
                    </motion.div>
                ))}
            </motion.section>

            {/* Visual Funnel Representation */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="bg-brand-red/10 border border-brand-red/20 rounded-[3rem] p-10 md:p-20 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] opacity-5 mix-blend-luminosity bg-cover bg-center" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div variants={fadeIn} className="text-white">
                        <Target className="w-12 h-12 text-brand-red mb-6" />
                        <h3 className="text-4xl font-bold text-white mb-6">The Infinite <span className="text-brand-red italic font-serif">Growth Loop</span></h3>
                        <p className="text-xl text-slate-300 font-light leading-relaxed mb-6">Traditional marketing relies on linear funnels that bleed leads at every step. We engineer holistic ecosystems where traffic is continuously recycled and remarketed to.</p>
                        <p className="text-xl text-slate-300 font-light leading-relaxed">Once a user enters our digital atmosphere—whether through an organic search query, a lead magnet, or an affiliate link—they are enveloped in omnipresent, highly personalized messaging until the point of conversion.</p>
                    </motion.div>

                    <motion.div variants={fadeIn} className="relative z-10 w-full aspect-square md:aspect-auto md:h-[400px] border border-white/10 rounded-full flex items-center justify-center overflow-hidden bg-[#050505]">
                        {/* Circular graphic representation */}
                        <div className="absolute inset-4 rounded-full border border-brand-red/20 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-12 rounded-full border border-brand-red/40 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-20 rounded-full border border-white/10 animate-[spin_30s_linear_infinite]" />
                        <div className="w-32 h-32 bg-brand-red rounded-full flex flex-col items-center justify-center text-white shadow-[0_0_50px_rgba(232,49,58,0.5)] z-20">
                            <Globe className="w-8 h-8 mb-2" />
                            <span className="font-bold tracking-widest text-xs">CONVERT</span>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* FAQs */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="max-w-4xl mx-auto"
            >
                <motion.h3 variants={fadeIn} className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-4">
                    <Lightbulb className="w-10 h-10 text-brand-red" />
                    Frequently Asked Questions
                </motion.h3>
                <div className="space-y-4">
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="How long does it take to see results from SEO?"
                            answer="While initial technical fixes can yield quick traffic bumps within 30 days, true, defensible SEO that targets high-competition keywords typically takes 3 to 6 months of aggressive, sustained effort and authority building. SEO is a long-term equity investment in your brand."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Why do I need Email Automation if I have good social media?"
                            answer="You don't own your social media followers; the platforms do, and they aggressively throttle your organic reach. By contrast, an email list is a direct, owned asset. Automated flows trigger massive conversions mechanically while you sleep without ad spend."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="What exactly is Conversion Rate Optimization (CRO)?"
                            answer="It's the science of making your website better at selling. If your site currently converts 1% of visitors into buyers, doubling that to 2% through intelligent UI/UX tweaks, faster load times, and better copywriting effectively doubles your digital revenue without spending a single dollar more on ads."
                        />
                    </motion.div>
                </div>
            </motion.section>

        </div>
    );
}
