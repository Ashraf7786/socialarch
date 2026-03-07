import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Code2, Layout, Smartphone, Zap, Search, ShieldCheck,
    ChevronDown, Lightbulb, Cpu
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

export function WebDesignContent() {
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
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Your Website is Your <span className="text-brand-red italic font-serif">Awe-Inspiring</span> Digital Front Door</h3>
                <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed max-w-4xl relative z-10">
                    <p>Think about the last time you visited a slow, ugly website. Did you trust that company? Did you buy from them? Probably not. <span className="text-white font-medium">Your website is the ultimate expression of your brand's credibility.</span></p>
                    <p>At Social Ark, we don't just build functional sites; we engineer digital experiences that combine stunning visual aesthetics with lightning-fast code.</p>
                    <p className="border-l-4 border-brand-red pl-6 mt-8">Stop settling for templates that ignore your brand's unique identity. Step into the future with a bespoke site that converts traffic into revenue while making your competitors sweat.</p>
                </div>
            </motion.section>

            {/* Core Pillars */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn} className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">The Foundations of a <span className="text-brand-red italic font-serif">Powerhouse</span> Website</h3>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">We combine design, psychology, and code to engineer the perfect online presence.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <Layout className="w-10 h-10" />, title: "Beautiful UI/UX", desc: "Crafting intuitive paths that guide visitors to purchase without friction." },
                        { icon: <Zap className="w-10 h-10" />, title: "Blazing Fast Speed", desc: "Optimizing code and assets so pages load in under a second." },
                        { icon: <Smartphone className="w-10 h-10" />, title: "Mobile Dominance", desc: "Pixel-perfect responsiveness across all devices, screens, and orientations." },
                        { icon: <Search className="w-10 h-10" />, title: "SEO Foundation", desc: "Built with readable architecture that search engines love." },
                        { icon: <Cpu className="w-10 h-10" />, title: "Modern Tech Stack", desc: "React, Next.js, and headless CMS systems that scale gracefully." },
                        { icon: <ShieldCheck className="w-10 h-10" />, title: "Ironclad Security", desc: "Protecting your data and your users with top-tier security standards." }
                    ].map((feature, i) => (
                        <motion.div key={i} variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-300 mb-6 group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                            <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Tech Stack Focus */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5"
            >
                <motion.div variants={fadeIn} className="relative z-10">
                    <Code2 className="w-12 h-12 text-brand-red mb-6" />
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for the Modern Web</h3>
                    <p className="text-lg leading-relaxed text-slate-400 mb-6">Gone are the days of clunky WordPress templates filled with messy plugins. We custom-code our experiences using modern JavaScript frameworks.</p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-red"></span><span className="text-white font-medium">GSAP Animations & Physics</span></li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-red"></span><span className="text-white font-medium">Headless Ecommerce (Shopify/Stripe)</span></li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-red"></span><span className="text-white font-medium">Global CDN Deployments</span></li>
                    </ul>
                </motion.div>
                <motion.div variants={fadeIn} className="relative flex justify-center items-center">
                    <div className="absolute inset-0 bg-brand-red/10 blur-[100px] rounded-full" />
                    <div className="w-full max-w-sm rounded-[2rem] overflow-hidden border-4 border-[#222] shadow-2xl relative z-10">
                        <div className="bg-[#222] p-4 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="bg-black p-6 font-mono text-sm text-green-400">
                            <p>~ npm run deploy</p>
                            <p className="text-slate-500 mt-2">{'>'} Compiling stunning UI...</p>
                            <p className="text-slate-500">{'>'} Integrating animations...</p>
                            <p className="text-brand-red font-bold mt-2">✓ Deployment successful.</p>
                            <p className="text-white mt-4 block animate-pulse">_</p>
                        </div>
                    </div>
                </motion.div>
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
                            question="Do you use templates or custom code?"
                            answer="We focus primarily on custom-coded websites tailored specifically to your brand. Custom code ensures faster load times, unique designs, and total control over animations."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="How long does a website project take?"
                            answer="A standard landing page can take 2-4 weeks, while comprehensive multi-page corporate sites or custom e-commerce stores can take 6-12 weeks from strategy to launch."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Will I be able to update content myself?"
                            answer="Yes! We integrate highly intuitive Headless Content Management Systems (CMS) so your team can effortlessly change text, swap images, and publish blogs without needing to touch code."
                        />
                    </motion.div>
                </div>
            </motion.section>

        </div>
    );
}
