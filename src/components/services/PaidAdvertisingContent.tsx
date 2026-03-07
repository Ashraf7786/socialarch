import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Target, TrendingUp, Search, MousePointerClick, RefreshCw,
    SearchCode, Megaphone, Zap, Building2, Stethoscope, GraduationCap,
    ChevronDown, Lightbulb, PieChart, Crosshair, Filter
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

export function PaidAdvertisingContent() {
    return (
        <div className="space-y-32 text-slate-300 mt-20">

            {/* Intro Header */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="relative bg-gradient-to-br from-[#111] to-black border border-white/5 p-10 md:p-16 rounded-[3rem] overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Paid Ad Campaigns: Precision Targeting for Explosive Growth</h3>
                <h4 className="text-2xl text-brand-red font-medium mb-8">Stop Spending. Start Investing.</h4>
                <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed max-w-4xl relative z-10">
                    <p>Let’s cut to the chase—running ads is easy, but running profitable ads is an art. Most businesses "boost" a post, spend a few thousand, and wonder why the phone isn't ringing.</p>
                    <p>At Social Ark, we don’t believe in "throwing spaghetti at the wall to see what sticks." We believe in data-backed, laser-targeted Paid Ad Campaigns that turn every rupee of ad spend into a measurable business result.</p>
                    <p className="border-l-4 border-brand-red pl-6 mt-8">As a specialized digital marketing company, we focus on one thing: <strong className="text-white">ROI (Return on Investment)</strong>. Whether you want more leads for your clinic, more bookings for your resort, or more sales for your e-commerce store, our ad strategies are built to scale.</p>
                </div>
            </motion.section>

            {/* The Problem with Generic Ads */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
                <motion.div variants={fadeIn}>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">The Problem with <span className="text-brand-red italic font-serif">"Generic"</span> Ads</h3>
                    <p className="text-xl leading-relaxed mb-6 font-light">The digital space is noisier than ever. Your customers are seeing hundreds of ads every single day. If your ad looks like everyone else’s, it’s invisible. Most agencies focus on "Clicks," but at Social Arch, we focus on <strong className="text-white">Conversions</strong>.</p>
                    <p className="text-xl leading-relaxed font-light">A click is just a visitor; a conversion is a customer. We bridge that gap by creating ads that don't just look good but are psychologically designed to trigger action. We understand the nuances of <strong className="text-brand-red">A/B testing, Audience Segmentation, and Retargeting</strong>—the three pillars of a successful campaign.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6 relative">
                    <div className="absolute inset-0 bg-brand-red/5 blur-[80px] rounded-full pointer-events-none" />
                    <div className="bg-[#111] p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-brand-red/30 transition-colors z-10">
                        <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                            <MousePointerClick className="w-8 h-8" />
                        </div>
                        <h4 className="text-white font-bold text-lg">Just Clicks</h4>
                        <p className="text-sm text-slate-400">Visitors who bounce</p>
                    </div>
                    <div className="bg-[#111] p-8 rounded-3xl border border-brand-red/30 flex flex-col items-center text-center gap-4 shadow-[0_0_30px_rgba(200,35,43,0.15)] z-10 mt-8">
                        <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center text-white">
                            <Target className="w-8 h-8" />
                        </div>
                        <h4 className="text-white font-bold text-lg">Conversions</h4>
                        <p className="text-sm text-slate-200">Paying customers</p>
                    </div>
                </motion.div>
            </motion.section>

            {/* Multi-Channel Ad Expertise */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn} className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Our <span className="text-brand-red italic font-serif">Multi-Channel</span> Expertise</h3>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">Wherever your customers are, we build the perfect funnel to capture their intent.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div variants={fadeIn} className="bg-gradient-to-b from-[#151515] to-[#0A0A0A] border border-white/5 rounded-3xl p-10 hover:border-brand-red/30 transition-all duration-300">
                        <Megaphone className="w-12 h-12 text-brand-red mb-6" />
                        <h4 className="text-2xl font-bold text-white mb-4">Meta Ads</h4>
                        <p className="text-slate-400 mb-6">With billions of active users, Meta is the king of "Interruption Marketing."</p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex gap-2"><Crosshair className="w-5 h-5 text-brand-red shrink-0" /> <span className="text-slate-300">Granular Targeting</span></li>
                            <li className="flex gap-2"><PieChart className="w-5 h-5 text-brand-red shrink-0" /> <span className="text-slate-300">Creative Excellence</span></li>
                            <li className="flex gap-2"><Target className="w-5 h-5 text-brand-red shrink-0" /> <span className="text-slate-300">Lookalike Audiences</span></li>
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeIn} className="bg-gradient-to-b from-[#151515] to-[#0A0A0A] border border-white/5 rounded-3xl p-10 hover:border-brand-red/30 transition-all duration-300">
                        <Search className="w-12 h-12 text-brand-red mb-6" />
                        <h4 className="text-2xl font-bold text-white mb-4">Google Search Ads</h4>
                        <p className="text-slate-400 mb-6">When someone searches, they are ready to buy. We put you at the top.</p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex gap-2"><SearchCode className="w-5 h-5 text-brand-red shrink-0" /> <span className="text-slate-300">High-Intent Keywords</span></li>
                            <li className="flex gap-2"><Filter className="w-5 h-5 text-brand-red shrink-0" /> <span className="text-slate-300">Negative Keyword Mgt</span></li>
                            <li className="flex gap-2"><Zap className="w-5 h-5 text-brand-red shrink-0" /> <span className="text-slate-300">Ad Extensions</span></li>
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeIn} className="bg-gradient-to-b from-[#151515] to-[#0A0A0A] border border-white/5 rounded-3xl p-10 hover:border-brand-red/30 transition-all duration-300">
                        <RefreshCw className="w-12 h-12 text-brand-red mb-6" />
                        <h4 className="text-2xl font-bold text-white mb-4">Retargeting Funnels</h4>
                        <p className="text-slate-400 mb-6">97% leave without buying. We follow them and bring them back.</p>
                        <div className="p-4 bg-brand-red/10 rounded-xl border border-brand-red/20 text-brand-red text-sm font-medium">
                            "This is where the real profit is made."
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Methodology & Why it's the fastest way */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
                <motion.div variants={fadeIn} className="bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5">
                    <h3 className="text-3xl font-bold text-white mb-8">The Social Arch Methodology</h3>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                        {[
                            { num: "01", title: "Audit & Research", desc: "We analyze competitors to find gaps we can exploit for your benefit." },
                            { num: "02", title: "Creative & Copywriting", desc: "Visuals that stop the scroll. Headlines that hook the mind." },
                            { num: "03", title: "Technical Setup", desc: "Pixels and Tracking. If you can’t measure it, you can’t manage it." },
                            { num: "04", title: "Optimization & Scaling", desc: "We monitor CPC/CPL daily. When we find a winning ad, we scale." }
                        ].map((phase, i) => (
                            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-red bg-[#111] group-hover:bg-brand-red text-slate-400 group-hover:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors duration-300">
                                    <span className="text-sm font-bold">{phase.num}</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black/40 p-4 rounded-xl border border-white/5 group-hover:border-brand-red/30 transition-colors">
                                    <h4 className="font-bold text-white mb-1">{phase.title}</h4>
                                    <p className="text-sm text-slate-400">{phase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5 relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
                    <TrendingUp className="w-16 h-16 text-emerald-500 mb-8 relative z-10" />
                    <h3 className="text-3xl font-bold text-white mb-6 relative z-10">The Fastest Way to Scale</h3>
                    <p className="text-lg leading-relaxed mb-6 relative z-10 text-slate-400">While SEO is a long-term game, Paid Ads provide instant gratification. If you have a new product launch or a seasonal offer, you can't wait months for Google to rank you. You need traffic today.</p>
                    <p className="text-lg leading-relaxed relative z-10 text-white font-medium border-l-4 border-emerald-500 pl-4">By combining the two, you create a "Digital Powerhouse." Your ads bring in immediate revenue, while your SEO builds long-term authority. At Social Arch, we synchronize these two forces to ensure your brand is omnipresent.</p>
                </motion.div>
            </motion.section>

            {/* Industry Specific */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="py-16 border-y border-white/10"
            >
                <div className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Industry-Specific <span className="text-brand-red italic font-serif">Success</span></h3>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">We’ve spent years mastering the ad algorithms for different industries so you don't have to.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div variants={fadeIn} className="flex items-start gap-4 bg-[#111] p-6 rounded-2xl border border-white/5">
                        <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center shrink-0"><Stethoscope /></div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">Clinics</h4>
                            <p className="text-slate-400 text-sm">Focusing on trust-building ads and high-quality lead forms.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn} className="flex items-start gap-4 bg-[#111] p-6 rounded-2xl border border-white/5">
                        <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center shrink-0"><Building2 /></div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">Resorts</h4>
                            <p className="text-slate-400 text-sm">Using cinematic video ads to showcase luxury and experience.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn} className="flex items-start gap-4 bg-[#111] p-6 rounded-2xl border border-white/5">
                        <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-full flex items-center justify-center shrink-0"><GraduationCap /></div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">Education</h4>
                            <p className="text-slate-400 text-sm">Targeting parents and students with value-driven messaging.</p>
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
                className="max-w-4xl mx-auto pb-10"
            >
                <motion.h3 variants={fadeIn} className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-4">
                    <Lightbulb className="w-10 h-10 text-brand-red" />
                    Frequently Asked Questions
                </motion.h3>
                <div className="space-y-4">
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="How much budget do I need to start with?"
                            answer="There is no 'perfect' number. We recommend starting with a budget that allows for testing. Once we find what works, we scale. Our goal is always to make the ads pay for themselves."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Why are my current ads not working?"
                            answer="Usually, it’s one of three things: wrong audience, boring creative, or a landing page that doesn't convert. We perform a full audit to find the 'leak' in your funnel."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Do you provide the ad designs and videos?"
                            answer="Yes. We are a full-service digital marketing agency. From the script to the final graphic, our in-house creative team handles it all."
                        />
                    </motion.div>
                </div>

                <motion.div variants={fadeIn} className="mt-20 text-center bg-brand-red/10 border border-brand-red/20 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 text-white">Ready to Stop Guessing and Start Growing?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">Your competitors are already running ads. Are you going to let them take your customers? Let Social Arch build an ad machine that works while you sleep.</p>
                </motion.div>
            </motion.section>

        </div>
    );
}
