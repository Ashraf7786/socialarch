import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Film, Video, Clapperboard, MonitorPlay, Zap,
    ChevronDown, Lightbulb, Scissors, Mic, Maximize
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
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Video Editing & Production: <span className="text-brand-red italic font-serif">Cinematic Storytelling for the Digital Era</span></h3>
                <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed max-w-4xl relative z-10">
                    <p className="font-medium text-white">Don't Just Record. Create a Masterpiece.</p>
                    <p>Let’s be real—the human brain processes video 60,000 times faster than text. In a world where everyone is fighting for a "3-second attention span," your video needs to be more than just a sequence of clips. It needs to be an <strong className="text-white">experience</strong>. At Social Arch, we don't just "cut and join" videos; we architect emotions.</p>
                    <p className="border-l-4 border-brand-red pl-6 mt-8">From high-energy Instagram Reels that go viral to professional Corporate Documentaries that build trust, we provide elite video editing services that turn raw footage into a powerful brand asset. If you want your audience to stop scrolling and start watching, you’re in the right place.</p>
                </div>
            </motion.section>

            {/* The Power of "Pattern Interrupt" in Video */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5"
            >
                <motion.div variants={fadeIn}>
                    <Zap className="w-12 h-12 text-brand-red mb-6" />
                    <h3 className="text-4xl font-bold text-white mb-6">The Power of "Pattern Interrupt" in <span className="text-brand-red italic font-serif">Video</span></h3>
                    <p className="text-lg leading-relaxed mb-6 font-light">In 2026, the algorithm favors one thing above all else: <strong className="text-white">Retention</strong>. If people watch your video until the end, you win. At Social Arch, we use "Pattern Interrupt" techniques—strategic cuts, sound design, and visual cues—to keep the viewer’s brain engaged every single second.</p>
                    <p className="text-lg leading-relaxed mb-6 font-light">We specialize in the Dark & Cinematic Aesthetic. Our editing style isn't about flashy, distracting effects; it’s about <strong className="text-white">Seamless Flow</strong>. Whether it’s the color grading that matches your brand’s premium vibe or the sound engineering that hits the right emotional notes, we ensure your video looks like it belongs on the big screen.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="relative w-full aspect-square md:h-[450px] md:aspect-auto rounded-[2rem] overflow-hidden border border-white/10">
                    <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80" alt="Video Editing Timeline" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-brand-red/20 opacity-80" />
                </motion.div>
            </motion.section>

            {/* Our 360-Degree Video Production Services */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn} className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Our 360-Degree <span className="text-brand-red italic font-serif">Video Production Services</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* A */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl group-hover:bg-brand-red/20 group-hover:text-brand-red transition-all">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">A. Viral Short-Form Content</h4>
                        <p className="text-slate-400 font-light mb-4 text-sm leading-relaxed">Short-form video is the fastest way to grow organically. We take your raw mobile footage and turn it into high-impact content.</p>
                        <ul className="space-y-3 mt-auto">
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Fast-Paced Cutting:</strong> Keeping the energy high to prevent scrolls.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Dynamic Captions:</strong> Eye-catching on-screen text that keeps people engaged even without sound.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Trending Audio Integration:</strong> Matching your content with the right beats for maximum reach.
                            </li>
                        </ul>
                    </motion.div>

                    {/* B */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl group-hover:bg-brand-red/20 group-hover:text-brand-red transition-all">
                            <Video className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">B. Corporate & Brand Storytelling</h4>
                        <p className="text-slate-400 font-light mb-4 text-sm leading-relaxed">Your brand needs a voice. We create professional videos that explain your mission, showcase your team, and build long-term credibility.</p>
                        <ul className="space-y-3 mt-auto">
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Interview Editing:</strong> Removing the "umms" and "ahhs" to make you sound like an industry leader.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>B-Roll Integration:</strong> Using high-quality cinematic b-roll to add depth to your message.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Motion Graphics:</strong> Adding professional titles and animations to explain complex ideas simply.
                            </li>
                        </ul>
                    </motion.div>

                    {/* C */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl group-hover:bg-brand-red/20 group-hover:text-brand-red transition-all">
                            <Maximize className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">C. Real Estate & Hospitality Tours</h4>
                        <p className="text-slate-400 font-light mb-4 text-sm leading-relaxed">For our clients in the resort and property niche, we offer Elite Real Estate Video Editing.</p>
                        <ul className="space-y-3 mt-auto">
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Sky-High Drone Grading:</strong> Making your property look breathtaking from every angle.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Speed Ramping:</strong> Creating smooth transitions between rooms and landscapes.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Mood Lighting Correction:</strong> Ensuring every shot looks warm, inviting, and premium.
                            </li>
                        </ul>
                    </motion.div>

                    {/* D */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4 group">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl group-hover:bg-brand-red/20 group-hover:text-brand-red transition-all">
                            <MonitorPlay className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">D. Educational & YouTube Editing</h4>
                        <p className="text-slate-400 font-light mb-4 text-sm leading-relaxed">If you are a coach or an institute, we help you build an audience. We handle the heavy lifting of editing long-form videos so you can focus on teaching.</p>
                        <ul className="space-y-3 mt-auto">
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Multi-Camera Syncing:</strong> Smoothly switching between different angles.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Green Screen Removal:</strong> Placing you in a professional digital studio.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300 leading-relaxed font-light">
                                <span className="text-brand-red font-bold">▸</span> <strong>Thumbnail Integration:</strong> Designing a visual "hook" that increases your Click-Through Rate (CTR).
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </motion.section>

            {/* Workflow */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="bg-brand-red/10 border border-brand-red/20 rounded-[3rem] p-10 md:p-16 relative overflow-hidden"
            >
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />
                <motion.div variants={fadeIn} className="text-center mb-12 relative z-10">
                    <h3 className="text-4xl font-bold text-white mb-4">The "Social Arch" <span className="text-brand-red italic font-serif">Post-Production Workflow</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {[
                        { title: "The Narrative Cut", desc: "We start by finding the story. We go through hours of footage to find those 'golden moments' that truly matter. We build the 'Rough Cut' to ensure the message is clear.", icon: <Scissors className="w-6 h-6" /> },
                        { title: "Sound Engineering", desc: "A video is 50% what you see and 50% what you hear. We use Sound Design & Foley to add layers of depth. From background music to crisp voiceovers.", icon: <Mic className="w-6 h-6" /> },
                        { title: "Cinematic Color Grading", desc: "We apply professional color correction and grading to give your video a specific mood—be it luxury, energetic, or trustworthy. The signature Look.", icon: <Film className="w-6 h-6" /> },
                        { title: "Motion Graphics & VFX", desc: "We add the final touches—lower thirds, logo animations, and smooth transitions that make the video feel expensive and polished.", icon: <Zap className="w-6 h-6" /> }
                    ].map((step, i) => (
                        <motion.div key={i} variants={fadeIn} className="bg-[#151515] border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
                            <div className="text-brand-red/10 text-6xl font-black absolute -top-4 -right-4 transition-transform group-hover:scale-110">0{i + 1}</div>
                            <div className="text-brand-red mb-6 relative z-10 p-3 bg-brand-red/10 inline-block rounded-xl">{step.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Why Professional Editing Is Your Best Marketing ROI & Industry Insights */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
                {/* Why Professional Editing */}
                <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 p-10 md:p-14 rounded-[3rem]">
                    <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-6">Why Professional Editing Is <span className="text-brand-red italic font-serif">Your Best Marketing ROI</span></h3>
                    <p className="text-slate-400 font-light leading-relaxed mb-8">You might think, "I can just edit this on a free app." And sure, for a personal vlog, that works. But for a professional brand, the stakes are higher.</p>

                    <div className="space-y-6">
                        <div>
                            <strong className="text-white block mb-1">Brand Perception</strong>
                            <span className="text-sm text-slate-400 font-light">A poorly edited video makes your business look amateur. A Social Arch video makes you look like a market leader.</span>
                        </div>
                        <div>
                            <strong className="text-white block mb-1">SEO Benefits</strong>
                            <span className="text-sm text-slate-400 font-light">Google loves video. Pages with embedded video content often rank higher and keep users on the site longer (Dwell Time), a massive SEO ranking factor.</span>
                        </div>
                        <div>
                            <strong className="text-white block mb-1">Versatility</strong>
                            <span className="text-sm text-slate-400 font-light">We edit one long video into 5-10 "Micro-Content" pieces for your social media, giving you a month's worth of content from a single shoot.</span>
                        </div>
                    </div>
                </motion.div>

                {/* Industry Insights */}
                <motion.div variants={fadeIn} className="bg-gradient-to-br from-[#111] to-black border border-white/5 p-10 md:p-14 rounded-[3rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/50 rounded-full blur-[80px]" />
                    <Clapperboard className="w-12 h-12 text-brand-red mb-6 relative z-10" />
                    <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Industry Insights: <span className="text-brand-red italic font-serif">The Future of Video</span></h3>

                    <p className="text-slate-300 font-light leading-relaxed relative z-10 text-lg">As AI video tools become more common, the value of <strong className="text-white">Human Creativity</strong> is skyrocketing. AI can generate clips, but it can't understand the "Vibe" of your specific brand or the subtle humor of your audience.</p>

                    <p className="text-slate-300 font-light leading-relaxed relative z-10 text-lg mt-6">At Social Arch, we use AI as a tool to speed up the technical stuff, but the Creative Direction is always 100% human. We ensure your video feels personal, relatable, and authentic.</p>
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
                            question="Can you edit footage I shot on my phone?"
                            answer="Absolutely! Modern smartphones shoot incredible 4K footage. With our professional grading and editing, we can make mobile footage look like it was shot on a cinema camera."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="What is the typical turnaround time for a video?"
                            answer="Short-form reels usually take 24-48 hours. Larger projects like corporate videos or documentaries take 7-10 days, depending on the complexity of the motion graphics."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Do you provide the background music?"
                            answer="Yes, we use a library of Copyright-Free, Licensed Music so you never have to worry about your videos being taken down or demonetized on YouTube or Instagram."
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">Ready to <span className="text-brand-red font-serif italic">Go Viral?</span></h2>
                    <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto relative z-10 font-light">Stop letting your great ideas die in a messy camera roll. Your brand has a story that deserves to be seen in 4K glory. Let Social Arch be the director of your digital success.</p>
                    <a href="/contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-[#C8232B] text-white rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(232,49,58,0.3)] hover:shadow-[0_0_50px_rgba(232,49,58,0.5)]">
                        Start Production
                    </a>
                </div>
            </motion.section>

        </div>
    );
}
