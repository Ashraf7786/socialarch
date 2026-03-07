import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Film, Scissors, Layers, PlayCircle,
    ChevronDown, Lightbulb, Clapperboard, MonitorIcon
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

export function VideoEditingContent() {
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
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Cinematic Edits Designed for <span className="text-brand-red italic font-serif">A World with Zero Attention Span</span></h3>
                <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed max-w-4xl relative z-10">
                    <p>In 2026, the internet is video. Consumers don't want to read a paragraph about a product; they want an immersive 15-second visual demonstration to validate it.</p>
                    <p>But slapping clips together on a phone app isn't enough. <span className="text-white font-medium">Poorly edited video harms your brand perception.</span></p>
                    <p className="border-l-4 border-brand-red pl-6 mt-8">Social Ark’s editing suites run like cinematic studios. We cut the fluff, manipulate the pacing, execute high-end motion graphics, and mix incredible audio to create hypnotic hooks that algorithms love.</p>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
                {[
                    { title: "Hook", icon: <Film />, desc: "The first 3 seconds decide your video's fate. We write visual interruptions that stop the eternal scroll." },
                    { title: "Retention", icon: <Layers />, desc: "Fast cuts, subtle zooming variations, and perfectly timed typography keep the viewer locked until the end." },
                    { title: "Action", icon: <PlayCircle />, desc: "A strong call-out or subliminal direction compelling the viewer to like, share, buy, or subscribe." }
                ].map((col, i) => (
                    <motion.div key={i} variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all">
                        <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-6 shadow-xl">
                            {col.icon}
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">{col.title}</h4>
                        <p className="text-slate-400 leading-relaxed text-sm">{col.desc}</p>
                    </motion.div>
                ))}
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="bg-brand-red/10 border border-brand-red/20 rounded-[3rem] p-10 md:p-20 relative overflow-hidden"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div variants={fadeIn} className="relative z-10 hidden lg:block">
                        <div className="relative w-full aspect-[9/16] rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                            <Clapperboard className="w-20 h-20 text-brand-red/30 absolute" />
                            <div className="absolute top-0 right-0 left-0 h-20 bg-gradient-to-b from-black/80 to-transparent" />
                            <div className="absolute bottom-0 right-0 left-0 h-40 bg-gradient-to-t from-black to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden mb-2">
                                    <div className="h-full bg-brand-red w-[65%]" />
                                </div>
                                <div className="flex text-xs font-mono text-white/50 justify-between">
                                    <span>00:15 / 00:30</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeIn} className="relative z-10 text-white">
                        <Scissors className="w-12 h-12 text-brand-red mb-6" />
                        <h3 className="text-4xl font-bold text-white mb-8">What We Edit</h3>
                        <ul className="space-y-6">
                            {[
                                { title: "Short-Form Social (Reels & TikTok)", desc: "Optimized 9:16 vertical video designed purely for algorithm penetration and virality." },
                                { title: "Cinematic Podcasts / Vlogs", desc: "Multi-camera angle switching, color correction, and broadcast-level audio mixing." },
                                { title: "Commercial Ad Films", desc: "Corporate storytelling, product reveals, and luxury real estate tour edits." },
                                { title: "Motion Graphics & VFX", desc: "Adding advanced green screen replacement, tracking, and breathtaking animated titles." }
                            ].map((li, i) => (
                                <li key={i} className="flex gap-4">
                                    <MonitorIcon className="w-6 h-6 text-brand-red shrink-0" />
                                    <div>
                                        <strong className="block text-xl mb-1">{li.title}</strong>
                                        <span className="text-slate-300">{li.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
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
                            question="How do I get my raw video files to you?"
                            answer="We set up a secure, dedicated cloud repository (Google Drive, Frame.io, or Dropbox) specifically for your brand where your team can effortlessly upload massive raw files."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Can you repurpose an old webinar into Shorts/Reels?"
                            answer="Yes, highly popular! We run 1-hour webinars or podcasts through our editing pipeline to extract the absolute best 15-second to 60-second viral nuggets, complete with high-visibility captions."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Do you help with music licensing?"
                            answer="We never use copyrighted music without permission. We pull from massive royalty-free libraries and utilize Meta/TikTok trending audio natively to ensure your videos are never blocked or muted."
                        />
                    </motion.div>
                </div>
            </motion.section>

        </div>
    );
}
