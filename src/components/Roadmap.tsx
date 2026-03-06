const steps = [
    { num: '01', title: 'Discovery & Audit', text: 'We dive deep into your current metrics and competitor landscape.' },
    { num: '02', title: 'Strategy Blueprint', text: 'A custom-tailored 90-day plan focused on your specific KPIs.' },
    { num: '03', title: 'Creative Execution', text: 'Launching high-impact visuals and copy that resonate.' },
    { num: '04', title: 'Optimization', text: 'Real-time adjustments to maximize budget efficiency.' },
    { num: '05', title: 'Scaling', text: "Doubling down on what works to skyrocket your brand's reach." }
];

export function Roadmap() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#050505] text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">The <span className="text-brand-red font-serif italic">SocialArk</span> Roadmap</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">How we work—building trust and clarity every step of the way.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col relative group">
                            {/* Line connecting steps */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-[40px] left-[50%] w-full h-[2px] bg-white/10 overflow-hidden">
                                    <div className="w-full h-full bg-brand-red -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                                </div>
                            )}
                            <div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-3xl font-bold font-serif mb-8 mx-auto group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 relative z-10 shadow-lg">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                            <p className="text-slate-400 text-center text-sm leading-relaxed">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
