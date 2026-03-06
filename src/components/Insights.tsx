import { ArrowUpRight } from 'lucide-react';

export function Insights() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white border-y border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        Why Your Brand Needs a <span className="font-serif italic text-brand-red font-light">Digital Partner</span>
                    </h2>
                    <div className="flex gap-4 items-center mt-12 group cursor-pointer w-fit">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                        <span className="text-sm uppercase tracking-widest font-semibold text-slate-400 group-hover:text-white transition-colors duration-300">Read More Insights</span>
                    </div>
                </div>

                <div className="space-y-8 bg-black p-10 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none rounded-[2.5rem]" />
                    <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                        The digital landscape is changing every 24 hours. Algorithms update, consumer habits shift, and new platforms emerge overnight. For a business owner, keeping up is a full-time job. Partnering with a <strong className="text-white font-medium">professional digital marketing agency</strong> like SocialArk allows you to focus on your product while we focus on the audience.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed relative z-10">
                        Effective <strong className="text-white font-medium">social media marketing</strong> is no longer about posting three times a week. It’s about <strong className="text-white font-medium">omnichannel presence</strong>, <strong className="text-white font-medium">brand sentiment</strong>, and <strong className="text-white font-medium">customer lifetime value (CLV)</strong>. By leveraging advanced tools and creative talent, we ensure your brand remains relevant, relatable, and, most importantly, profitable.
                    </p>
                </div>
            </div>
        </section>
    );
}
