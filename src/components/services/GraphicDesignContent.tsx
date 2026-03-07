import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Palette, Image as ImageIcon, Box,
    Droplet, ChevronDown, Lightbulb, Hexagon, Component
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

export function GraphicDesignContent() {
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
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Your Brand Is <span className="text-brand-red italic font-serif">A Visual Identity</span>, Not Just a Logo</h3>
                <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed max-w-4xl relative z-10">
                    <p>Colors evoke feelings. Typography establishes authority. Layouts command focus. <span className="text-white font-medium">Humans are deeply visual creatures, and first impressions are usually the only ones that matter.</span></p>
                    <p>A cluttered, inconsistent design language tells your customers you don't care about the details. If your business looks cheap, consumers assume your product is cheap.</p>
                    <p className="border-l-4 border-brand-red pl-6 mt-8">Social Ark engineers cohesive visual languages that communicate your brand's true value at a glance. We blend modern creative strategy with flawless execution.</p>
                </div>
            </motion.section>

            {/* Visual Services Grid */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn} className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Mastering the <span className="text-brand-red italic font-serif">Art</span> of Execution</h3>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">From pixels to print, we provide industry-leading creative assets.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { icon: <Droplet className="w-10 h-10" />, title: "Brand Identity Packages", desc: "Logos, dynamic color palettes, and comprehensive brand guidelines that ensure your team stays on brand forever." },
                        { icon: <Component className="w-10 h-10" />, title: "Typography & Layout", desc: "Creating bespoke typographical combinations to elevate authority on web interfaces, billboards, and pitch decks." },
                        { icon: <ImageIcon className="w-10 h-10" />, title: "Digital Ad Creatives", desc: "High-performance graphic assets optimized directly for Facebook, LinkedIn, Google Display, and X algorithms." },
                        { icon: <Box className="w-10 h-10" />, title: "Premium Packaging", desc: "Making products look too good to leave on the shelf. Luxurious tactile print and packaging designs for e-commerce." }
                    ].map((feature, i) => (
                        <motion.div key={i} variants={fadeIn} className="bg-gradient-to-tr from-[#151515] to-[#0d0d0d] border border-white/5 rounded-3xl p-10 hover:border-brand-red/30 transition-all duration-300 group">
                            <div className="w-20 h-20 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mb-8 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                            <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Design Process */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5"
            >
                <motion.div variants={fadeIn} className="relative z-10">
                    <Palette className="w-12 h-12 text-brand-red mb-6" />
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Creative Process</h3>
                    <div className="space-y-6">
                        {[
                            { title: "Discovery & Moodboarding", desc: "Understanding the psychology of your target audience and exploring visual directions." },
                            { title: "Concept Generation", desc: "Drawing upon thousands of creative iterations to produce the perfect visual concepts." },
                            { title: "Refinement & Polish", desc: "Meticulously adjusting whitespace, kerning, and color balances." },
                            { title: "Delivery & Guidelines", desc: "Providing all necessary file formats along with a robust Brand Rulebook." }
                        ].map((li, i) => (
                            <div key={i} className="flex gap-4">
                                <span className="text-brand-red font-bold font-mono">0{i + 1}</span>
                                <div>
                                    <h4 className="text-white font-medium mb-1">{li.title}</h4>
                                    <p className="text-slate-400 text-sm">{li.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div variants={fadeIn} className="relative flex justify-center items-center">
                    <div className="absolute inset-0 bg-brand-red/10 blur-[100px] rounded-full" />
                    <div className="w-full h-[400px] border border-white/10 rounded-[2rem] bg-gradient-to-tr from-[#111] to-[#222] relative overflow-hidden group">
                        <Hexagon className="absolute text-white/5 w-[500px] h-[500px] -right-32 -bottom-32 group-hover:rotate-12 transition-transform duration-1000 ease-out" />
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <h4 className="text-4xl font-serif text-white opacity-80 backdrop-blur-md mix-blend-difference group-hover:scale-110 transition-transform duration-700 font-bold border-l-4 border-brand-red pl-6">Less, but <span className="italic">better.</span></h4>
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
                            question="Do I get the source files?"
                            answer="Absolutely. Upon completion and payment, you own your brand completely. We provide open files (AI, PSD, Figma) as well as production-ready formats like PNGs, SVG vectors, and PDFs."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="How many revisions are included?"
                            answer="Most branding packages include 2-3 substantial revision rounds. The goal is perfection, and our discovery phase ensures we hit the mark very early in the process."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Can you redesign an existing, outdated logo?"
                            answer="Yes, a Brand Refresh is very common. We can maintain the heritage and core elements of an old logo while optimizing its typography, curves, and colors to function gracefully in a modern, mobile-first ecosystem."
                        />
                    </motion.div>
                </div>
            </motion.section>

        </div>
    );
}
