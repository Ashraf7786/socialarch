import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Eye } from 'lucide-react';

const servicesData = [
    {
        id: '01',
        title: 'Social Media Management',
        description: 'Social media is your digital storefront. We manage your presence across Instagram, Facebook, LinkedIn, and TikTok with a focus on community building.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&w=1000&q=80',
        subServices: [
            'CONTENT PILLARS', 'COMMUNITY BUILDING',
            'ENGAGEMENT GROWTH', 'MONTHLY REPORTS',
            'ANALYTICS TRACKING'
        ]
    },
    {
        id: '02',
        title: 'Paid Advertising',
        description: 'Stop "boosting" posts and start building funnels. We specialize in Meta Ads and Google Ads that focus on one thing: ROI.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=1000&q=80',
        subServices: [
            'A/B TESTING', 'META ADS',
            'RETARGETING FUNNELS', 'GOOGLE ADS',
            'CONVERSION RATE OPTIMIZATION', 'CREATIVE STRATEGY'
        ]
    },
    {
        id: '03',
        title: 'Elite Content Creation',
        description: "Your brand's visual identity is its first impression. Our creative studio produces scroll-stopping content designed for modern algorithms.",
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&w=1000&q=80',
        subServices: [
            'VIRAL-READY REELS', 'SHORT-FORM VIDEO',
            'HIGH-END GRAPHIC DESIGN', 'MINIMALIST VISUALS',
            'COPYWRITING THAT CONVERTS', 'STORYTELLING'
        ]
    },
    {
        id: '04',
        title: 'SEO & Search Strategy',
        description: 'What good is a beautiful brand if no one can find it? We integrate SEO best practices to ensure your brand ranks for profitable keywords.',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&w=1000&q=80',
        subServices: [
            'SEO BEST PRACTICES', 'KEYWORD OPTIMIZATION',
            'SEARCH ALGORITHMS', 'ORGANIC REACH',
            'BOTTOM LINE STRATEGY', 'RANKING REPORTS'
        ]
    }
];

export function Services() {
    const [activeId, setActiveId] = useState('01');
    const activeService = servicesData.find(s => s.id === activeId) || servicesData[0];

    return (
        <section id="services" className="relative py-16 md:py-20 px-6 md:px-12 bg-black text-white overflow-hidden min-h-screen">
            {/* Background glowing orb element */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-red rounded-full blur-[100px] md:blur-[150px] opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Left Column */}
                <div className="lg:w-1/2 flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] mb-8 text-white">
                        <span className="text-brand-red"><Plus className="w-4 h-4 inline-block" /></span> SERVICES
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-20 text-white pr-10">
                        We Provide Digital<br />
                        Services <span className="text-brand-red">for You</span>
                    </h2>

                    <div className="flex flex-col border-t border-white/10">
                        {servicesData.map((service) => {
                            const isActive = service.id === activeId;
                            return (
                                <div
                                    key={service.id}
                                    className={`group flex items-center gap-8 py-8 md:py-10 border-b border-white/10 cursor-pointer transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                                    onClick={() => setActiveId(service.id)}
                                >
                                    <span className="text-lg md:text-2xl font-semibold shrink-0">
                                        &#123;{service.id}&#125;
                                    </span>
                                    <h3 className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight transition-colors duration-300 ${isActive ? 'text-brand-red' : 'text-white'}`}>
                                        {service.title}
                                    </h3>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:w-[45%] flex flex-col lg:ml-auto pt-0 lg:pt-10">

                    {/* Top description and button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-12 border-b border-white/10 pb-12 lg:border-none lg:pb-0">
                        <p className="text-slate-300 text-lg md:text-xl max-w-sm leading-relaxed">
                            {activeService.description}
                        </p>

                        <button className="flex items-center gap-4 bg-brand-red hover:bg-[#C8232B] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 w-fit shrink-0">
                            All Services
                            <span className="bg-[#111] text-white w-8 h-8 flex items-center justify-center rounded-full">
                                <Eye className="w-4 h-4" />
                            </span>
                        </button>
                    </div>

                    {/* Image and Floating Button */}
                    <div className="relative mb-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl relative"
                            >
                                <img
                                    src={activeService.image}
                                    alt={activeService.title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Floating Action Button */}
                        <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-brand-red text-white w-24 h-24 md:w-32 md:h-32 rounded-[2rem] flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 shadow-xl border-4 border-black z-20">
                            <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                    </div>

                    {/* Sub-services Tags */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService.id + "-tags"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8"
                        >
                            {activeService.subServices.map((sub, i) => (
                                <div key={i} className="text-sm md:text-[15px] font-bold tracking-widest text-[#Eaeaea] uppercase">
                                    {sub}
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
}
