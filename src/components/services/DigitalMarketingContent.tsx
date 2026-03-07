import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    TrendingUp, Search, MousePointerClick, Heart,
    ChevronDown, Lightbulb, Target, Layout, Rocket, LineChart
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

            {/* Intro Header */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="relative bg-gradient-to-br from-[#111] to-black border border-white/5 p-10 md:p-16 rounded-[3rem] overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Digital Marketing That Delivers: <span className="text-brand-red italic font-serif">The Social Arch Blueprint for Growth</span></h3>
                <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed max-w-4xl relative z-10">
                    <p>The digital world is moving faster than ever. Every day, a new platform emerges, an algorithm updates, and your competitors find a new way to reach your customers. In this chaos, most businesses feel overwhelmed. They try a bit of everything but see no real Digital Results.</p>
                    <p className="border-l-4 border-brand-red pl-6 mt-8">At Social Arch, we don’t just "do digital marketing." We build predictable growth engines. We are a results-first digital marketing company that believes in the power of data, the impact of elite design, and the psychology of sales. Whether you are a local service provider in Jaipur or a global brand, we bridge the gap between your potential and your profit.</p>
                </div>
            </motion.section>

            {/* Why Standard Marketing Is Dead */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5"
            >
                <motion.div variants={fadeIn}>
                    <TrendingUp className="w-12 h-12 text-brand-red mb-6" />
                    <h3 className="text-4xl font-bold text-white mb-6">Why "Standard" Marketing Is <span className="text-brand-red italic font-serif">Dead</span></h3>
                    <p className="text-lg leading-relaxed mb-6 font-light">The days of "post and pray" are over. If you aren't using data to drive your decisions, you are just gambling with your budget. Most agencies focus on "Vanity Metrics"—likes, shares, and followers. While these look good on paper, they don't pay the bills.</p>
                    <p className="text-lg leading-relaxed font-light">At Social Arch, our philosophy is different. We focus on <strong className="text-white">Business Impact</strong>. We look at your sales funnel, your customer lifetime value (CLV), and your cost per acquisition (CPA). We understand that every brand has a unique "Arch"—a specific trajectory of growth. Our job is to build that arch with precision, ensuring every marketing dollar you spend works twice as hard for you.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="relative w-full aspect-square md:h-[400px] md:aspect-auto rounded-[2rem] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Data and Analytics" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-red/20 mix-blend-overlay" />
                </motion.div>
            </motion.section>

            {/* Our Full-Spectrum Digital Marketing Services */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn} className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Full-Spectrum <span className="text-brand-red italic font-serif">Digital Marketing Services</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* SEO */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl">
                            <Search className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">Search Engine Optimization (SEO)</h4>
                        <p className="text-slate-400 font-light mb-4">If you aren't on the first page of Google, you don't exist for 90% of your customers. We specialize in Technical and Local SEO that actually ranks.</p>
                        <ul className="space-y-3 mt-auto">
                            <li className="flex gap-3 text-sm text-slate-300">
                                <span className="text-brand-red">▸</span> <strong>Keyword Intelligence:</strong> Finding high-intent terms your customers are searching for.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300">
                                <span className="text-brand-red">▸</span> <strong>On-Page & Technical Mastery:</strong> Ensuring your site is fast, secure, and easily readable.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300">
                                <span className="text-brand-red">▸</span> <strong>Link Building & Authority:</strong> Establishing leadership via high-quality backlinks.
                            </li>
                        </ul>
                    </motion.div>

                    {/* Paid Ads */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl">
                            <Target className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">High-Conversion Paid Advertising</h4>
                        <p className="text-slate-400 font-light mb-4">Want traffic today? Paid ads are the answer. But without a strategy, it’s easy to burn cash. We build ROI-focused ad campaigns that scale.</p>
                        <ul className="space-y-3 mt-auto">
                            <li className="flex gap-3 text-sm text-slate-300">
                                <span className="text-brand-red">▸</span> <strong>Precision Targeting:</strong> Reaching the right person, at the right time, on the right device.
                            </li>
                            <li className="flex gap-3 text-sm text-slate-300">
                                <span className="text-brand-red">▸</span> <strong>Retargeting Funnels:</strong> Following up with visitors who didn't convert the first time, turning "maybe" into "yes."
                            </li>
                        </ul>
                    </motion.div>

                    {/* Content Creation & Social Media */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl">
                            <Layout className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">Content Creation & Social Media</h4>
                        <p className="text-slate-400 font-light">In a world of scrolling, your content needs to be a "Pattern Interrupt." We produce 8K high-fidelity visuals, cinematic videos, and copy that triggers emotional responses. We manage your presence across Instagram, Facebook, and LinkedIn, ensuring your brand voice is consistent and commanding.</p>
                    </motion.div>

                    {/* CRO */}
                    <motion.div variants={fadeIn} className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-brand-red/30 transition-all flex flex-col gap-4">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-2 shadow-xl">
                            <MousePointerClick className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">Conversion Rate Optimization (CRO)</h4>
                        <p className="text-slate-400 font-light">Getting people to your site is only half the battle. Making them buy is the other half. We analyze user behavior to remove friction from your website, making the "Buy Now" or "Book Now" process seamless.</p>
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
                <motion.div variants={fadeIn} className="text-center mb-12 relative z-10">
                    <h3 className="text-4xl font-bold text-white mb-4">The "Social Arch" <span className="text-brand-red italic font-serif">Methodology</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {[
                        { title: "Deep Discovery & Audit", desc: "We look under the hood. What’s working? What’s broken? We analyze competitors and find gaps. A customized roadmap for your brand.", icon: <Search /> },
                        { title: "The Foundation", desc: "Optimizing site speed, setting up tracking pixels, and creating the 'Social Arch' aesthetic for your visuals—dark, premium, authoritative.", icon: <Layout /> },
                        { title: "Launch & Testing", desc: "We launch campaigns with multiple A/B tests. We test headlines, images, and audiences. We don't guess; we let data declare the winner.", icon: <Rocket /> },
                        { title: "Optimization & Scaling", desc: "Once we find the Winning Formula, we double down. We optimize budget for lowest CPL while scaling reach. Delivering Digital Results.", icon: <LineChart /> }
                    ].map((step, i) => (
                        <motion.div key={i} variants={fadeIn} className="bg-[#151515] border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
                            <div className="text-brand-red/10 text-6xl font-black absolute -top-4 -right-4 transition-transform group-hover:scale-110">0{i + 1}</div>
                            <div className="text-brand-red mb-6 relative z-10">{step.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* The Human Side of Digital Growth */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="max-w-5xl mx-auto text-center"
            >
                <motion.div variants={fadeIn}>
                    <Heart className="w-12 h-12 text-brand-red mx-auto mb-6" />
                    <h3 className="text-4xl font-bold text-white mb-6">The Human Side of <span className="text-brand-red italic font-serif">Digital Growth</span></h3>
                    <p className="text-xl leading-relaxed text-slate-300 font-light mb-6">At the end of every click is a human being. We never forget that. Our marketing isn't just about bots and algorithms; it’s about human connection. We write copy that speaks to people’s desires, fears, and dreams. We design visuals that evoke pride and trust.</p>
                    <p className="text-lg leading-relaxed text-slate-400">When you partner with Social Arch, you aren't just getting a service provider. You are getting a team of designers, data nerds, and storytellers who are obsessed with your success. We treat your business like it’s our own, which is why our clients stay with us for the long term.</p>
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
                            question="How long does it take to see results from Digital Marketing?"
                            answer="Paid Ads can deliver results within 24-48 hours. SEO and organic brand building typically take 3 to 6 months to show significant momentum. We provide a balanced strategy that gives you both short-term wins and long-term stability."
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Why should I choose Social Arch over a cheaper agency?"
                            answer="In marketing, you get what you pay for. A 'cheap' agency often uses outdated methods that can actually hurt your brand’s reputation or get your site penalized by Google. We offer premium expertise and a bespoke strategy that focuses on ROI, not just 'cheap clicks.'"
                        />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <FaqItem
                            question="Do you work with local businesses or only global brands?"
                            answer="We love both. We have specialized strategies for Local SEO and Google Business Profile optimization for local clinics and resorts, as well as scalable global strategies for e-commerce and ed-tech brands."
                        />
                    </motion.div>
                </div>
            </motion.section>

            {/* Let's Build Your Digital Empire Today */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="text-center"
            >
                <div className="inline-block bg-[#111] border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">Let’s Build Your Digital Empire <span className="text-brand-red font-serif italic">Today</span></h2>
                    <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto relative z-10">The internet isn't getting any less competitive. Every day you wait is a day your competitors are getting ahead. It’s time to stop the guesswork and start the growth. Let Social Arch be the architecture behind your digital success.</p>
                    <a href="/contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-[#C8232B] text-white rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(232,49,58,0.3)] hover:shadow-[0_0_50px_rgba(232,49,58,0.5)]">
                        Start Growing Now
                    </a>
                </div>
            </motion.section>

        </div>
    );
}
