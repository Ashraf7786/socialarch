import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MonitorSmartphone, Palette, Rocket } from 'lucide-react';

const features = [
    {
        title: "Brand Identity",
        subtitle: "2D & 3D Animation",
        description: "We craft visually stunning, unforgettable brand identities that resonate deeply logically and emotionally with your target audience.",
        icon: <Palette className="w-8 h-8 text-brand-red" />,
        colSpan: "col-span-1 lg:col-span-2",
        rowSpan: "row-span-1 lg:row-span-2",
        bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Web Design",
        subtitle: "Art Direction",
        description: "Immersive, high-performance web experiences engineered for absolute perfection and conversion.",
        icon: <MonitorSmartphone className="w-8 h-8 text-brand-red" />,
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        bgGradient: "bg-gradient-to-br from-[#181818] to-[#0A0A0A]"
    },
    {
        title: "Digital Platform",
        subtitle: "Product Development",
        description: "Scalable, secure, and robust digital platforms built on cutting-edge architectures.",
        icon: <Rocket className="w-8 h-8 text-brand-red" />,
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        bgGradient: "bg-gradient-to-tl from-[#181818] to-black"
    }
];

export function Features() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section id="features" ref={sectionRef} className="relative w-full bg-[#050505] py-8 md:py-16 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20 text-center md:text-left">
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
                        >
                            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>OUR</span>
                            <br className="hidden md:block" />
                            <span className="text-white ml-0 md:ml-4">FEATURES</span>
                            <span className="text-brand-red">.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-sm text-slate-400 text-lg mx-auto md:mx-0"
                    >
                        Pioneering the next era of digital excellence through uncompromising design and engineering.
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 lg:grid-rows-2 gap-6 h-auto lg:h-[700px]">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                            className={`group relative overflow-hidden rounded-[2rem] border border-white/10 ${feature.colSpan} ${feature.rowSpan} bg-[#0A0A0A] p-8 md:p-12 flex flex-col justify-end`}
                        >
                            {/* Background Handling */}
                            {feature.bgImage ? (
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <img
                                        src={feature.bgImage}
                                        alt={feature.title}
                                        className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
                                </div>
                            ) : (
                                <div className={`absolute inset-0 z-0 ${feature.bgGradient} opacity-50`} />
                            )}

                            {/* Inner Content */}
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                {/* Top Icon */}
                                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center mb-12 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                                    {feature.icon}
                                </div>

                                {/* Bottom Text */}
                                <div>
                                    <div className="mb-4">
                                        <p className="text-brand-red font-semibold tracking-widest uppercase text-xs mb-2">
                                            {feature.subtitle}
                                        </p>
                                        <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                                            {feature.title}
                                        </h3>
                                    </div>

                                    <div className="flex items-end justify-between gap-4">
                                        <p className="text-slate-400 text-sm md:text-base max-w-sm leading-relaxed">
                                            {feature.description}
                                        </p>

                                        {/* Hover Arrow */}
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 overflow-hidden group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-300 relative">
                                            <ArrowUpRight className="w-5 h-5 text-white absolute transition-transform duration-500 group-hover:-translate-y-12 group-hover:translate-x-12" />
                                            <ArrowUpRight className="w-5 h-5 text-white absolute translate-y-12 -translate-x-12 transition-transform duration-500 group-hover:translate-y-0 group-hover:translate-x-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover subtle glow */}
                            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem] shadow-[inset_0_0_0_1px_rgba(232,49,58,0.5)] z-20" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
