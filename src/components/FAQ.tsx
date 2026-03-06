import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "How long does it take to see results from social media marketing?",
        a: "While organic growth is a marathon, our paid strategies usually show positive data trends within the first 30 days. Complete brand authority typically builds over a 3-to-6-month period."
    },
    {
        q: "Which social media platform is best for my business?",
        a: "It depends on your audience. B2B brands often thrive on LinkedIn, while lifestyle and e-commerce brands see the highest ROI on Instagram and TikTok. We help you choose the right mix."
    },
    {
        q: "Do you handle content creation or do I provide it?",
        a: "We offer end-to-end solutions. Our team of designers and videographers can handle everything from scratch, or we can polish and strategize the content you already have."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Frequently Asked <span className="text-brand-red font-serif italic font-light">Questions</span>
                    </h2>
                    <p className="text-slate-400 text-lg font-light tracking-wide">
                        Everything you need to know about partnering with SocialArk.
                    </p>
                </div>

                <div className="space-y-4 relative z-10">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="border border-white/10 rounded-2xl bg-[#080808] overflow-hidden hover:border-brand-red/50 transition-colors duration-300">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                >
                                    <span className="text-lg md:text-xl font-medium pr-8">{faq.q}</span>
                                    <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-brand-red text-white' : 'bg-white/5 text-slate-400'}`}>
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 md:px-8 pb-8 text-slate-400 leading-relaxed font-light text-lg">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
