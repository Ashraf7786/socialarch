import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Target, LineChart, Zap, Image as ImageIcon, Video, MessageSquare,
    Instagram, Linkedin, Facebook, BarChart3, ShieldCheck,
    Lightbulb, ChevronDown
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

export function SocialMediaContent() {
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
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">The Truth About Social Media in <span className="text-brand-red italic font-serif">2026</span></h3>
                <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed max-w-4xl relative z-10">
                    <p>Let’s be honest for a second. Most brands treat social media like a digital billboard—they just post and pray. But in an era where attention is the new currency, <span className="text-white font-medium">"just posting" is a waste of time.</span></p>
                    <p>At Social Ark, we believe your social media should be your most active sales channel, your 24/7 customer service desk, and your brand’s strongest voice.</p>
                    <p className="text-brand-red font-medium border-l-4 border-brand-red pl-6 mt-8">As a leading social media marketing agency, we don’t just manage accounts; we build digital empires. Whether you are a local business in Jaipur or a global e-commerce brand, our mission is to make sure when people scroll, they stop for you.</p>
                </div>
            </motion.section>

            {/* Why Strategies Fail Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
                <motion.div variants={fadeIn} className="relative">
                    <div className="absolute -left-10 top-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Why Most Strategies <span className="text-brand-red italic font-serif">Fail</span></h3>
                    <p className="text-xl leading-relaxed mb-6 font-light">Social media isn't just about pretty pictures. It’s about <strong className="text-white font-medium">Psychology</strong>. Most strategies fail because they focus on "Vanity Metrics"—likes and followers that don't buy.</p>
                    <p className="text-xl leading-relaxed font-light">At Social Ark, our approach is different. We focus on <strong className="text-brand-red">Digital Results.</strong> We look at the data: Who is your audience? When are they most active? What triggers them to click 'Buy' or 'Book Now'? We bridge the gap between "being seen" and "being remembered." Our management style is proactive, not reactive. We don’t wait for trends; we anticipate them.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6">
                    <div className="bg-[#111] p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-brand-red/30 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                            <Target className="w-8 h-8" />
                        </div>
                        <h4 className="text-white font-bold text-lg">Vanity Metrics</h4>
                        <p className="text-sm text-slate-400">Likes that don't pay bills</p>
                    </div>
                    <div className="bg-[#111] p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-brand-red/30 transition-colors mt-8">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <LineChart className="w-8 h-8" />
                        </div>
                        <h4 className="text-white font-bold text-lg">Digital Results</h4>
                        <p className="text-sm text-slate-400">Targeted conversions</p>
                    </div>
                </motion.div>
            </motion.section>

            {/* 360 Services Grid */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn} className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Our <span className="text-brand-red italic font-serif">360-Degree</span> Management</h3>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">A comprehensive ecosystem designed to dominate every facet of your digital presence.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { icon: <ImageIcon className="w-10 h-10" />, title: "Content Strategy & Aesthetics", desc: "Your profile is your digital storefront. We curate a high-end visual aesthetic that matches your brand’s DNA with custom visuals, consistent branding, and authentic storytelling." },
                        { icon: <Video className="w-10 h-10" />, title: "Viral-Ready Short-Form Video", desc: "The algorithm loves video. Our team specializes in producing high-engagement Reels and short-form content. We handle everything from the script and trending audio selection to the final edit." },
                        { icon: <MessageSquare className="w-10 h-10" />, title: "Community Management", desc: "Social media is a two-way street. We engage with your followers, reply to comments, manage DMs, and build Brand Trust—the fastest way to increase customer lifetime value." },
                        { icon: <Zap className="w-10 h-10" />, title: "Paid Social Acceleration", desc: "We integrate Meta Ads and LinkedIn Ads into your management plan to reach a laser-targeted audience, optimizing for the lowest Cost Per Lead (CPL) while maximizing your reach." }
                    ].map((feature, i) => (
                        <motion.div key={i} variants={fadeIn} className="bg-gradient-to-b from-[#151515] to-[#0A0A0A] border border-white/5 rounded-3xl p-10 hover:border-brand-red/30 transition-all duration-300 group">
                            <div className="w-20 h-20 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mb-8 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4">{feature.title}</h4>
                            <p className="text-lg text-slate-400 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Platform Dominance */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="py-16 border-y border-white/10"
            >
                <motion.div variants={fadeIn} className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Platform-Specific <span className="text-brand-red italic font-serif">Dominance</span></h3>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">We understand that every platform has a different "language."</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <motion.div variants={fadeIn} className="p-8">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-6 shadow-xl">
                            <Instagram className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">Instagram</h4>
                        <p className="text-slate-400 leading-relaxed">We focus on visual storytelling, Reels, and highly interactive Stories to keep your brand consistently top-of-mind.</p>
                    </motion.div>
                    <motion.div variants={fadeIn} className="p-8 md:border-x border-white/10">
                        <div className="w-16 h-16 mx-auto bg-[#0A66C2] rounded-full flex items-center justify-center text-white mb-6 shadow-xl">
                            <Linkedin className="w-8 h-8 fill-current" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">LinkedIn</h4>
                        <p className="text-slate-400 leading-relaxed">For our B2B clients, we focus on Thought Leadership, professional networking, and long-term authority building.</p>
                    </motion.div>
                    <motion.div variants={fadeIn} className="p-8">
                        <div className="w-16 h-16 mx-auto bg-[#1877F2] rounded-full flex items-center justify-center text-white mb-6 shadow-xl">
                            <Facebook className="w-8 h-8 fill-current" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">Facebook</h4>
                        <p className="text-slate-400 leading-relaxed">We leverage active community groups and highly targeted ad sets to drive both local and global traffic efficiently.</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Reporting & Why Us */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
                <motion.div variants={fadeIn} className="bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5">
                    <BarChart3 className="w-12 h-12 text-brand-red mb-8" />
                    <h3 className="text-3xl font-bold text-white mb-6">Data-Driven Reporting</h3>
                    <p className="text-lg leading-relaxed mb-8">We hate "black box" marketing. Every month, you’ll receive a detailed performance report that breaks down:</p>
                    <ul className="space-y-6">
                        {[
                            { title: "Reach & Impressions", desc: "How many new eyes saw your brand." },
                            { title: "Engagement Rate", desc: "How many people actually interacted with your content." },
                            { title: "Conversion Tracking", desc: "How many social visits turned into actual leads or sales." },
                            { title: "Competitor Analysis", desc: "What your rivals are doing and exactly how we are beating them." }
                        ].map((li, i) => (
                            <li key={i} className="flex gap-4">
                                <span className="w-2 h-2 mt-2.5 rounded-full bg-brand-red shrink-0" />
                                <div>
                                    <strong className="text-white block font-semibold mb-1">{li.title}</strong>
                                    <span className="text-slate-400">{li.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-[80px] rounded-full pointer-events-none" />
                    <ShieldCheck className="w-12 h-12 text-brand-red mb-8 relative z-10" />
                    <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Why Work With Us?</h3>
                    <p className="text-lg leading-relaxed mb-8 relative z-10">You’ve seen the "Social Ark" design—it’s sleek, dark, and professional. That’s the level of quality we bring to your brand. We aren't a factory that churns out generic posts. We are a boutique digital marketing company that treats your business like our own.</p>
                    <ul className="space-y-6 relative z-10">
                        {[
                            { title: "Human-Centric Approach", desc: "We write for people, not just algorithms." },
                            { title: "Tech-Forward Tools", desc: "We use the latest AI and analytics tools to stay ahead of the curve." },
                            { title: "Deep Industry Knowledge", desc: "From healthcare to hospitality, we know what works in your specific niche." }
                        ].map((li, i) => (
                            <li key={i} className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-5 h-5 text-brand-red" />
                                </div>
                                <div>
                                    <strong className="text-white block text-sm">{li.title}</strong>
                                    <span className="text-slate-400 text-sm">{li.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
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
                            question="Do I need to be on every social media platform?"
                            answer="No. It’s better to dominate two platforms than to be mediocre on five. We help you identify where your 'ideal customer' hangs out and focus our energy there."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="How often should my brand post?"
                            answer="Quality always beats quantity. We focus on a consistent schedule—usually 4 to 5 high-quality posts per week—ensuring each one serves a specific purpose (Educate, Entertain, or Convert)."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Can social media really help with SEO?"
                            answer="Yes! While social signals aren't a direct ranking factor, the traffic and brand searches generated by social media help Google see your website as an authority, which improves your overall search engine rankings."
                        />
                    </motion.div>
                </div>
            </motion.section>

        </div>
    );
}
