import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../data/services';

export function Services() {
    const [activeId, setActiveId] = useState('web-design');
    const activeService = servicesData.find(s => s.id === activeId) || servicesData[0];
    const navigate = useNavigate();

    return (
        <section id="services" className="relative py-16 md:py-20 px-6 md:px-12 bg-black text-white overflow-hidden min-h-screen">
            {/* Background glowing orb element */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-red rounded-full blur-[100px] md:blur-[150px] opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16">

                {/* Left Column */}
                <div className="lg:w-1/2 flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] mb-4 text-white">
                        <span className="text-brand-red"><Plus className="w-4 h-4 inline-block" /></span> SERVICES
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-10 text-white pr-10">
                        We Provide Digital<br />
                        Services <span className="text-brand-red">for You</span>
                    </h2>

                    <div className="flex flex-col border-t border-white/10">
                        {servicesData.map((service) => {
                            const isActive = service.id === activeId;
                            return (
                                <div
                                    key={service.id}
                                    className={`group flex items-center gap-8 py-6 md:py-8 border-b border-white/10 cursor-pointer transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                                    onClick={() => setActiveId(service.id)}
                                >
                                    <span className="text-lg md:text-2xl font-semibold shrink-0">
                                        &#123;{service.displayId}&#125;
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
                <div className="lg:w-[45%] flex flex-col lg:ml-auto pt-0">

                    {/* Top description and button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-10 border-b border-white/10 pb-8 lg:border-none lg:pb-0">
                        <p className="text-slate-300 text-lg md:text-xl max-w-sm leading-relaxed">
                            {activeService.description}
                        </p>

                        <button
                            onClick={() => navigate('/services')}
                            className="flex items-center gap-4 bg-brand-red hover:bg-[#C8232B] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 w-fit shrink-0"
                        >
                            All Services
                            <span className="bg-[#111] text-white w-8 h-8 flex items-center justify-center rounded-full">
                                <Eye className="w-4 h-4" />
                            </span>
                        </button>
                    </div>

                    {/* Image and Floating Button */}
                    <div className="relative mb-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl relative"
                            >
                                <img
                                    src={activeService.image}
                                    alt={activeService.title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Floating Action Button */}
                        <div
                            onClick={() => navigate(`/services/${activeService.id}`)}
                            className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-brand-red text-white w-24 h-24 md:w-32 md:h-32 rounded-[2rem] flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 shadow-xl border-4 border-black z-20 group/fab"
                        >
                            <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover/fab:rotate-12 group-hover/fab:scale-110" />
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
