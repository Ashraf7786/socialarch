import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Globe, Compass, ChevronDown, Lightbulb, Mic, MapPin,
    MonitorCheck
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

            {/* Intro Header */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="relative bg-gradient-to-br from-[#111] to-black border border-white/5 p-10 md:p-16 rounded-[3rem] overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Become The <span className="text-brand-red italic font-serif">Definitive Standard</span> in Your Market</h3>
                <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed max-w-4xl relative z-10">
                    <p>There is a massive difference between "Direct Response Ads" (getting a click today) and "Brand Advertising" (ensuring tomorrow's trust).</p>
                    <p>When someone is thirsty, they don't Google "sweet carbonated dark beverage." They ask for a Coke. <strong className="text-white">That is the sheer power of Brand Advertising.</strong></p>
                    <p className="border-l-4 border-brand-red pl-6 mt-8">At Social Ark, our high-level Brand Campaign strategies are built on deep storytelling, positioning, and omnipresence. We make your business impossible to ignore and difficult to compete against.</p>
                </div>
            </motion.section>

            {/* Core Capabilities */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn} className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Omnichannel <span className="text-brand-red italic font-serif">Brand Distribution</span></h3>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">We synchronize high-impact creative messaging across legacy and modern channels.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <MonitorCheck />, title: "Connected TV & OTT", desc: "Placing your TV-tier commercials on Hulu, Netflix, and Premium YouTube." },
                        { icon: <MapPin />, title: "OOH & Billboards", desc: "Striking local dominion with physical Out-Of-Home advertising and transit media." },
                        { icon: <Mic />, title: "Podcasts & Audio", desc: "Targeted audio advertising on Spotify and major business podcast syndicates." },
                        { icon: <Globe />, title: "Digital PR", desc: "Crafting narratives that get picked up by massive digital publications and news desks." }
                    ].map((feature, i) => (
                        <motion.div key={i} variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all text-center group">
                            <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-6 group-hover:bg-brand-red/10 group-hover:text-brand-red transition-all">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                            <p className="text-slate-400 text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* The Shift */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5"
            >
                <motion.div variants={fadeIn}>
                    <Compass className="w-12 h-12 text-brand-red mb-6" />
                    <h3 className="text-4xl font-bold text-white mb-6">Market <span className="text-brand-red italic font-serif">Positioning</span></h3>
                    <p className="text-lg leading-relaxed mb-6 font-light">Are you the cheapest choice, the fastest choice, or the luxury choice? If you try to be all three, you are nothing to nobody.</p>
                    <p className="text-lg leading-relaxed font-light">We conduct severe competitor analysis and workshop your Unique Value Proposition (UVP). By locking down a specific psychological anchor, we ensure your ad campaigns communicate extreme clarity and superiority over immediate rivals.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-[#181818] border border-white/10 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">The Trust Funnel Architecture</h4>
                    <div className="space-y-4">
                        <div className="p-4 bg-brand-red/10 border border-brand-red/20 rounded-xl">
                            <strong className="text-brand-red block mb-1">Top - Awareness</strong>
                            <span className="text-sm text-slate-300">Emotional cinematic video on Meta, YouTube, and Connected TV.</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl ml-4">
                            <strong className="text-white block mb-1">Middle - Consideration</strong>
                            <span className="text-sm text-slate-400">Educational carousels, PR validation, and TrustPilot reviews.</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl ml-8">
                            <strong className="text-white block mb-1">Bottom - Loyalty</strong>
                            <span className="text-sm text-slate-400">Exclusive VIP community offers and email marketing funnels.</span>
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
                            question="How do you measure Brand Advertising success?"
                            answer="Unlike Direct Ads (CPC/CPA), we measure Brand campaigns through 'Share of Voice', increase in brand-name search volume on Google, overall website traffic lift, and media reach metrics."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="What is the minimum budget for a real Brand Campaign?"
                            answer="Because Brand campaigns usually encompass high-end commercial video production and premium ad inventory placement (like OTT and OOH), budgets scale higher than standard social media retainers. We'll consult with you to build a structured financial plan."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Can you hire influencers for my brand?"
                            answer="Yes. Influencer Activation is a massive component of modern PR. We negotiate contracts, script talking points, and orchestrate massive synchronized creator drops on platforms like Instagram and YouTube."
                        />
                    </motion.div>
                </div>
            </motion.section>

        </div>
    );
}
