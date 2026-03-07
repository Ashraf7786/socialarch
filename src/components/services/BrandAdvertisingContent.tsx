import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Brain, Fingerprint, Camera,
    Globe, ShieldCheck, Target, TrendingUp,
    ChevronDown, Lightbulb, Building
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

export function BrandAdvertisingContent() {
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
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Brand Advertising: <span className="text-brand-red italic font-serif">Elevating Your Identity from Known to Iconic</span></h3>
                <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed max-w-4xl relative z-10">
                    <p className="font-medium text-white">Beyond the Transaction: Building a Legacy.</p>
                    <p>Let’s be honest—most marketing is just shouting into a void. "Buy this," "Discount that," "Limited offer." While those tactics might get you a quick sale, they don't build a brand. A brand is what people say about you when you aren't in the room. At Social Arch, we don't just run ads; we engineer <strong className="text-white">Brand Authority</strong>.</p>
                    <p className="border-l-4 border-brand-red pl-6 mt-8">We believe that Brand Advertising is the art of telling a story that people want to be a part of. We bridge the gap between a business that exists and a brand that inspires. If you want to stop competing on price and start competing on Value, you’re in the right place.</p>
                </div>
            </motion.section>

            {/* The "Arch" of Brand Perception */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5"
            >
                <motion.div variants={fadeIn}>
                    <Brain className="w-12 h-12 text-brand-red mb-6" />
                    <h3 className="text-4xl font-bold text-white mb-6">The "Arch" of <span className="text-brand-red italic font-serif">Brand Perception</span></h3>
                    <p className="text-lg leading-relaxed mb-6 font-light">In the digital era, your brand identity is your most valuable asset. But a brand isn't just a logo or a catchy tagline; it's an emotional connection. At Social Arch, we use Psychology-Based Advertising to ensure that your audience doesn't just see your ads—they feel them.</p>
                    <p className="text-lg leading-relaxed mb-6 font-light">We focus on the "Premium Quotient." By utilizing dark, sleek aesthetics and cinematic storytelling (like the vibe of our own platform), we position your business as the leader in its niche. Whether you are a specialized clinic or a luxury resort, we make sure your brand carries a weight of "Elite Professionalism."</p>
                </motion.div>
                <motion.div variants={fadeIn} className="relative w-full aspect-square md:h-[450px] md:aspect-auto rounded-[2rem] overflow-hidden border border-white/10">
                    <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80" alt="Brand Strategy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-brand-red/20 opacity-80" />
                </motion.div>
            </motion.section>

            {/* Our 360-Degree Brand Advertising Services */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn} className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Our 360-Degree <span className="text-brand-red italic font-serif">Brand Advertising Services</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* A */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl group-hover:bg-brand-red/20 group-hover:text-brand-red transition-all">
                            <Fingerprint className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">A. Core Brand Identity & Positioning</h4>
                        <p className="text-slate-400 font-light mb-4 text-sm leading-relaxed">Before we launch a single ad, we define who you are. We find your "Unique Arch"—the specific strength that sets you apart from every competitor.</p>
                        <ul className="space-y-3 mt-auto">
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Value Proposition:</strong> Defining exactly why a customer should choose you over anyone else.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Voice & Tone:</strong> Crafting a brand personality that sounds human, authoritative, and relatable.
                            </li>
                        </ul>
                    </motion.div>

                    {/* B */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl group-hover:bg-brand-red/20 group-hover:text-brand-red transition-all">
                            <Camera className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">B. Cinematic Visual Advertising</h4>
                        <p className="text-slate-400 font-light mb-4 text-sm leading-relaxed">Static images are good, but cinematic visuals are better. We create high-fidelity, 8K-ready imagery and video assets that scream quality.</p>
                        <ul className="space-y-3 mt-auto">
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Cinematic Grading:</strong> Using colors and lighting to evoke specific brand moods.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Lifestyle Photography:</strong> Showing your product or service in action, creating a desire for the "Brand Lifestyle."
                            </li>
                        </ul>
                    </motion.div>

                    {/* C */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl group-hover:bg-brand-red/20 group-hover:text-brand-red transition-all">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">C. Omnichannel Awareness Campaigns</h4>
                        <p className="text-slate-400 font-light mb-4 text-sm leading-relaxed">A brand needs to be everywhere your customer is. We synchronize your messaging across all touchpoints.</p>
                        <ul className="space-y-3 mt-auto">
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Meta (FB & Instagram) Awareness:</strong> Building a community around your brand values.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>YouTube Brand Stories:</strong> Long-form content that establishes you as an industry expert.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>LinkedIn Thought Leadership:</strong> Positioning your founders and leaders as visionaries in their field.
                            </li>
                        </ul>
                    </motion.div>

                    {/* D */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl group-hover:bg-brand-red/20 group-hover:text-brand-red transition-all">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">D. Reputation & Sentiment Management</h4>
                        <p className="text-slate-400 font-light text-sm leading-relaxed mt-2">What people say about you matters. We monitor brand sentiment and manage reviews and PR to ensure your digital footprint is untarnished. We turn "Happy Customers" into "Brand Advocates."</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Top of Mind Awareness */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="bg-brand-red/10 border border-brand-red/20 rounded-[3rem] p-10 md:p-16 relative overflow-hidden"
            >
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />
                <motion.div variants={fadeIn} className="mb-12 relative z-10 text-center max-w-3xl mx-auto">
                    <Target className="w-12 h-12 text-brand-red mx-auto mb-6" />
                    <h3 className="text-4xl font-bold text-white mb-6">The Psychology of <span className="text-brand-red italic font-serif">"Top of Mind"</span> Awareness</h3>
                    <p className="text-lg text-slate-300 font-light">Why do you choose certain brands over others? It’s rarely about the price. It’s about Trust and Familiarity. This is the core of Brand Advertising. While "Direct Response" ads aim for a click right now, "Brand Ads" aim for a permanent spot in the consumer's brain.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    {[
                        { title: "The Introduction", desc: "A high-impact visual that introduces your brand’s 'Why'.", num: "1" },
                        { title: "The Education", desc: "Content that solves a problem or provides value, proving your expertise.", num: "2" },
                        { title: "The Reinforcement", desc: "Retargeting ads that remind the customer of your brand’s premium status.", num: "3" }
                    ].map((step, i) => (
                        <motion.div key={i} variants={fadeIn} className="bg-[#151515] border border-white/5 rounded-3xl p-8 relative overflow-hidden group text-center">
                            <div className="w-12 h-12 mx-auto bg-brand-red/20 text-brand-red rounded-full flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors">{step.num}</div>
                            <h4 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div variants={fadeIn} className="mt-12 text-center relative z-10">
                    <p className="inline-block bg-[#111] text-brand-red border border-brand-red/30 px-6 py-3 rounded-full text-lg font-medium">This method ensures that when a customer is finally ready to make a purchase, yours is the only name they remember. We don't just chase clicks; we chase <strong className="text-white">Brand Equity</strong>.</p>
                </motion.div>
            </motion.section>

            {/* Long-Term Investment & Industry Specifics */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
                {/* Why Brand Ads */}
                <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 p-10 md:p-14 rounded-[3rem]">
                    <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-6">Why "Brand Ads" are Your Best <span className="text-brand-red italic font-serif">Long-Term Investment</span></h3>
                    <p className="text-slate-400 font-light leading-relaxed mb-8">Many agencies will tell you to only spend money on ads that have a "Buy Now" button. We disagree. If you only run sales ads, you are always chasing the next customer. But when you invest in Brand Advertising:</p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <TrendingUp className="w-6 h-6 text-brand-red shrink-0" />
                            <div>
                                <strong className="text-white block mb-1">You Can Charge More</strong>
                                <span className="text-sm text-slate-400 font-light">Strong brands don't have to participate in "price wars."</span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <TrendingUp className="w-6 h-6 text-brand-red shrink-0" />
                            <div>
                                <strong className="text-white block mb-1">Lower Ad Costs</strong>
                                <span className="text-sm text-slate-400 font-light">Over time, your Click-Through Rate (CTR) increases because people already know and trust your name.</span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <TrendingUp className="w-6 h-6 text-brand-red shrink-0" />
                            <div>
                                <strong className="text-white block mb-1">Talent Attraction & Business Longevity</strong>
                                <span className="text-sm text-slate-400 font-light">Top-tier brands attract top-tier employees. Trends fade, but iconic brands survive for decades.</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Industry Specifics */}
                <motion.div variants={fadeIn} className="bg-gradient-to-br from-[#111] to-black border border-white/5 p-10 md:p-14 rounded-[3rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/50 rounded-full blur-[80px]" />
                    <Building className="w-12 h-12 text-brand-red mb-6 relative z-10" />
                    <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-6 relative z-10">Industry-Specific <span className="text-brand-red italic font-serif">Brand Arching</span></h3>

                    <div className="space-y-8 mt-8 relative z-10">
                        <div>
                            <strong className="text-xl text-white block mb-2">Hospitality (Resorts & Travel)</strong>
                            <span className="text-slate-400 font-light leading-relaxed text-sm">We sell the "Dream," not just the room. Using high-fidelity visuals to create an emotional pull.</span>
                        </div>
                        <div>
                            <strong className="text-xl text-white block mb-2">Healthcare (Clinics & Doctors)</strong>
                            <span className="text-slate-400 font-light leading-relaxed text-sm">We sell "Trust and Care." Focus on professional authority and patient success stories.</span>
                        </div>
                        <div>
                            <strong className="text-xl text-white block mb-2">Educational Institutes</strong>
                            <span className="text-slate-400 font-light leading-relaxed text-sm">We sell "Future and Career." Building an identity that parents trust and students admire.</span>
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
                            question="How do you measure the success of a Brand Campaign?"
                            answer="While sales are a part of it, we look at 'Brand Lift' metrics—increase in direct searches for your name, engagement rates, sentiment analysis, and long-term Customer Acquisition Cost (CAC) reduction."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Is Brand Advertising only for large companies?"
                            answer="No. In fact, small businesses need it more. In a local market like Jaipur, being the 'Most Trusted Brand' is your biggest competitive advantage over global giants."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Do you handle the creative production?"
                            answer="Yes. We are a full-service creative powerhouse. From the 8K cinematic shoots to the final brand copy, we handle every pixel and every word."
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
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">Ready to Become a <span className="text-brand-red font-serif italic">Market Leader?</span></h2>
                    <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto relative z-10 font-light">Don't just be a business. Be a Brand. Stop blending into the background and start building the arch that supports your future growth. Let Social Arch handle the technical and creative complexity while you watch your brand authority skyrocket.</p>
                    <a href="/contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-[#C8232B] text-white rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(232,49,58,0.3)] hover:shadow-[0_0_50px_rgba(232,49,58,0.5)]">
                        Launch Your Brand
                    </a>
                </div>
            </motion.section>

        </div>
    );
}
