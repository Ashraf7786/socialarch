import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Layers, ChevronDown, Lightbulb, Hexagon,
    Crown, MonitorSmartphone, Image as ImageIcon
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
                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Graphic Design & Brand Identity: <span className="text-brand-red italic font-serif">Visuals That Command Attention</span></h3>
                <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed max-w-4xl relative z-10">
                    <p className="font-medium text-white">Design is the Silent Ambassador of Your Brand.</p>
                    <p>In a digital world where everyone is shouting, the loudest voice isn't always the one that wins—it’s the one that looks the most professional. At Social Arch, we believe that Graphic Design is not just about making things look "pretty." It’s about communication, psychology, and trust.</p>
                    <p className="border-l-4 border-brand-red pl-6 mt-8">When a potential client lands on your page, they judge your business in less than a second based on your visuals. If your design is generic, your brand is forgettable. We bridge that gap by creating 8K high-fidelity, cinematic, and hyper-realistic designs that don't just sit on a screen—they tell a story.</p>
                </div>
            </motion.section>

            {/* Beyond Pixels: The Psychology of Elite Design */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5"
            >
                <motion.div variants={fadeIn}>
                    <Hexagon className="w-12 h-12 text-brand-red mb-6" />
                    <h3 className="text-4xl font-bold text-white mb-6">Beyond Pixels: The Psychology of <span className="text-brand-red italic font-serif">Elite Design</span></h3>
                    <p className="text-lg leading-relaxed mb-6 font-light">Most people think graphic design is just about picking colors and fonts. It’s much deeper than that. Every color evokes an emotion; every font carries a personality.</p>
                    <p className="text-lg leading-relaxed mb-6 font-light">At Social Arch, we use Color Theory and Typography Psychology to influence how your customers feel.</p>

                    <ul className="space-y-4 mt-6">
                        <li className="flex gap-4 items-start">
                            <span className="w-2 h-2 rounded-full bg-brand-red mt-2 shrink-0" />
                            <div><strong className="text-white">Dark & Premium Aesthetics:</strong> We specialize in the "Dark-Mode" luxury look that communicates authority and tech-savviness.</div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="w-2 h-2 rounded-full bg-brand-red mt-2 shrink-0" />
                            <div><strong className="text-white">Minimalist Precision:</strong> We follow the "Less is More" rule. By removing clutter, we make sure your core message shines through.</div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="w-2 h-2 rounded-full bg-brand-red mt-2 shrink-0" />
                            <div><strong className="text-white">Brand Consistency:</strong> Whether it’s a business card or a massive billboard, your brand will look and feel the same everywhere.</div>
                        </li>
                    </ul>
                </motion.div>
                <motion.div variants={fadeIn} className="relative w-full aspect-square md:h-[500px] md:aspect-auto rounded-[2rem] overflow-hidden border border-white/10">
                    <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80" alt="Design Psychology" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-brand-red/20 opacity-80" />
                </motion.div>
            </motion.section>

            {/* Our Specialized Graphic Design Services */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn} className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Specialized <span className="text-brand-red italic font-serif">Graphic Design Services</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* A */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl group-hover:bg-brand-red/20 group-hover:text-brand-red transition-all">
                            <Crown className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">A. Premium Logo Design & Brand Identity</h4>
                        <p className="text-slate-400 font-light mb-4 text-sm leading-relaxed">Your logo is the face of your business. We don't do "clipart" or "template" logos. We build Iconic Identities.</p>
                        <ul className="space-y-3 mt-auto">
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Custom Lettermarks & Symbols:</strong> Unique shapes that represent your core values.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Full Brand Guidelines:</strong> A "Brand Bible" with your color codes, fonts, and usage rules.
                            </li>
                        </ul>
                    </motion.div>

                    {/* B */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl group-hover:bg-brand-red/20 group-hover:text-brand-red transition-all">
                            <ImageIcon className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">B. Social Media Creatives & Viral Assets</h4>
                        <p className="text-slate-400 font-light mb-4 text-sm leading-relaxed">Social media is a battlefield for attention. We design Scroll-Stopping Graphics for Instagram, Facebook, and LinkedIn.</p>
                        <ul className="space-y-3 mt-auto">
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Engagement-Driven Posts:</strong> Infographics and carousels people want to save and share.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Cinematic Story Designs:</strong> Turning daily updates into a premium brand experience.
                            </li>
                        </ul>
                    </motion.div>

                    {/* C */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl group-hover:bg-brand-red/20 group-hover:text-brand-red transition-all">
                            <Layers className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">C. High-End Marketing Collateral</h4>
                        <p className="text-slate-400 font-light mb-4 text-sm leading-relaxed">Digital is great, but physical and formal assets still matter. We design everything you need to close a deal.</p>
                        <ul className="space-y-3 mt-auto">
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Pitch Decks & Proposals:</strong> Helping you win clients with stunning presentations.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Brochures & Flyers:</strong> Tangible designs that leave a lasting impression.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>E-books & Lead Magnets:</strong> Designed to build your list and establish authority.
                            </li>
                        </ul>
                    </motion.div>

                    {/* D */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl group-hover:bg-brand-red/20 group-hover:text-brand-red transition-all">
                            <MonitorSmartphone className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">D. UI/UX Visual Assets</h4>
                        <p className="text-slate-400 font-light text-sm leading-relaxed mt-2">Building a website or an app? The visuals are what keep users engaged. We design icons, banners, and layout elements that make your digital products look like they belong in 2026.</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Methodology */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="bg-brand-red/10 border border-brand-red/20 rounded-[3rem] p-10 md:p-16 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
                <motion.div variants={fadeIn} className="text-center mb-12 relative z-10">
                    <h3 className="text-4xl font-bold text-white mb-4">The "Social Arch" <span className="text-brand-red italic font-serif">Creative Process</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {[
                        { title: "The Moodboard & Concept", desc: "We don't start with a blank canvas. We start by understanding your vibe. We build a Moodboard capturing the textures, colors, and emotions your brand reflects.", num: "1" },
                        { title: "The Sketch & First Draft", desc: "We brainstorm concepts looking for the 'Arch'—the unique curve or element that will make your design stand out perfectly from the competition.", num: "2" },
                        { title: "Refinement & Precision", desc: "We obsess over details. Is the spacing perfect? Is the contrast right for mobile screens? We polish the design until it’s 8K ready and visually flawless.", num: "3" },
                        { title: "Multi-Format Delivery", desc: "A design is only good if it’s usable. We provide your assets in every format you’ll ever need—SVG, PNG, JPG, and the raw Source Files.", num: "4" }
                    ].map((step, i) => (
                        <motion.div key={i} variants={fadeIn} className="bg-[#151515] border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
                            <div className="text-brand-red/10 text-6xl font-black absolute -top-4 -right-4 transition-transform group-hover:scale-110">0{step.num}</div>
                            <h4 className="text-xl font-bold text-white mb-3 mt-4 relative z-10">{step.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Why Your Business Needs Professional Design & Industry Specifics */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
                {/* Why Professional Design */}
                <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 p-10 md:p-14 rounded-[3rem]">
                    <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-6">Why Your Business Needs <span className="text-brand-red italic font-serif">Professional Design</span></h3>
                    <p className="text-slate-400 font-light leading-relaxed mb-6">Many businesses try to save money by using free online design tools. While those tools are okay for hobbies, they can hurt a professional brand.</p>

                    <div className="space-y-6">
                        <div>
                            <strong className="text-white block mb-1">Uniqueness</strong>
                            <span className="text-sm text-slate-400 font-light">If you use a template, your competitor is probably using it too.</span>
                        </div>
                        <div>
                            <strong className="text-white block mb-1">Scalability</strong>
                            <span className="text-sm text-slate-400 font-light">Professional designs are "Vector-based," meaning they look sharp on a tiny mobile screen and a giant highway billboard.</span>
                        </div>
                        <div>
                            <strong className="text-white block mb-1">SEO & User Experience</strong>
                            <span className="text-sm text-slate-400 font-light">High-quality images that are properly optimized for web speed help your site rank better on Google. Heavy, unoptimized images kill your SEO; we ensure every design is Web-Optimized.</span>
                        </div>
                    </div>
                </motion.div>

                {/* Industry Specific Exepertise */}
                <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 p-10 md:p-14 rounded-[3rem]">
                    <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-6">Industry-Specific <span className="text-brand-red italic font-serif">Expertise</span></h3>

                    <div className="space-y-8 mt-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 text-brand-red flex items-center justify-center shrink-0">1</div>
                            <div>
                                <strong className="text-xl text-white block mb-2">Hospitality & Resorts</strong>
                                <span className="text-slate-400 font-light leading-relaxed text-sm">Using cinematic imagery to sell an "Experience," not just a room.</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 text-brand-red flex items-center justify-center shrink-0">2</div>
                            <div>
                                <strong className="text-xl text-white block mb-2">Healthcare & Clinics</strong>
                                <span className="text-slate-400 font-light leading-relaxed text-sm">Using clean, trustworthy, and calming designs to build patient confidence.</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 text-brand-red flex items-center justify-center shrink-0">3</div>
                            <div>
                                <strong className="text-xl text-white block mb-2">Educational Institutes</strong>
                                <span className="text-slate-400 font-light leading-relaxed text-sm">Professional and modern visuals that appeal to the next generation of students.</span>
                            </div>
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
                            question="Do I own the copyrights to the designs?"
                            answer="Absolutely. Once the project is complete and paid for, the designs belong 100% to you. We provide all the source files so you have full control."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Can you redesign my existing brand?"
                            answer="Yes! We love 'Brand Revamps.' We take your existing identity and 'Arch' it into the modern era, keeping your core values while updating the look for a 2026 audience."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="What is the typical turnaround time?"
                            answer="For small tasks (social media posts), it's usually 24-48 hours. For full brand identities, it takes about 1-2 weeks of deep creative work."
                        />
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="text-center"
            >
                <div className="inline-block bg-[#111] border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-red/5 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">Ready to Make Your Brand <span className="text-brand-red font-serif italic">Look Iconic?</span></h2>
                    <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto relative z-10 font-light">Don't let bad design be the reason you lose a client. It’s time to move away from the "average" and embrace the "extraordinary." Let Social Arch handle your visual identity while you focus on the big picture.</p>
                    <a href="/contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-[#C8232B] text-white rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(232,49,58,0.3)] hover:shadow-[0_0_50px_rgba(232,49,58,0.5)]">
                        Get Started
                    </a>
                </div>
            </motion.section>

        </div>
    );
}
