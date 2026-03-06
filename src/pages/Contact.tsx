import { useRef } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Animate headers
        tl.from(".contact-header", {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
            delay: 0.2
        });

        // Animate contact info items
        tl.from(".info-item", {
            x: -50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6");

        // Animate form fields
        if (formRef.current) {
            const formElements = formRef.current.elements;
            gsap.from(Array.from(formElements), {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.4
            });
        }
    }, { scope: containerRef });

    return (
        <main ref={containerRef} className="min-h-screen pt-32 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red rounded-full blur-[150px] opacity-10 pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red rounded-full blur-[120px] opacity-10 pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

                {/* Left Column: Info */}
                <div className="lg:w-5/12 flex flex-col justify-center">
                    <div className="overflow-hidden mb-6">
                        <h1 className="contact-header text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-tight text-white">
                            Let's build <br />
                            <span className="font-serif italic text-brand-red">something</span><br />
                            great together.
                        </h1>
                    </div>

                    <div className="overflow-hidden mb-12">
                        <p className="contact-header text-slate-400 text-lg md:text-xl max-w-md leading-relaxed">
                            Ready to take your digital presence to the next level? Drop us a line and let's talk about your project.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 mt-4">
                        <div className="info-item flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-500">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-1">Email Us</p>
                                <a href="mailto:hello@socialark.com" className="text-xl md:text-2xl text-white font-medium hover:text-brand-red transition-colors">hello@socialark.com</a>
                            </div>
                        </div>

                        <div className="info-item flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-500">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-1">Call Us</p>
                                <a href="tel:+01750050088" className="text-xl md:text-2xl text-white font-medium hover:text-brand-red transition-colors">+0175-0050-088</a>
                            </div>
                        </div>

                        <div className="info-item flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-500">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-1">Visit Us</p>
                                <p className="text-xl md:text-2xl text-white font-medium">123 Ark Street, Digital City, NY 10012</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="lg:w-7/12 mt-10 lg:mt-0 relative">
                    <div className="bg-[#111111] border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">

                        {/* Subtle inner corner glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 blur-[50px] pointer-events-none rounded-full" />

                        <h3 className="text-3xl font-medium text-white mb-10 tracking-tight">Send an Enquiry</h3>

                        <form ref={formRef} className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-slate-400 uppercase tracking-widest">First Name *</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="John"
                                        className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/20 text-lg"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-slate-400 uppercase tracking-widest">Last Name *</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Doe"
                                        className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/20 text-lg"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-400 uppercase tracking-widest">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@company.com"
                                        className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/20 text-lg"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="service" className="text-sm font-medium text-slate-400 uppercase tracking-widest">Service of Interest</label>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-brand-red transition-colors appearance-none text-lg cursor-pointer"
                                        >
                                            <option value="" className="bg-[#111]">Select a Service</option>
                                            <option value="brand" className="bg-[#111]">Brand Strategy</option>
                                            <option value="web" className="bg-[#111]">Web Development</option>
                                            <option value="marketing" className="bg-[#111]">SEO & Marketing</option>
                                            <option value="video" className="bg-[#111]">Video Production</option>
                                        </select>
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-red pb-3">
                                            ▼
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mt-4">
                                <label htmlFor="message" className="text-sm font-medium text-slate-400 uppercase tracking-widest">Project Details *</label>
                                <textarea
                                    id="message"
                                    placeholder="Tell us about your project goals and timeline..."
                                    rows={4}
                                    className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/20 text-lg resize-none"
                                    required
                                ></textarea>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button type="submit" className="group relative w-48 h-14 overflow-hidden rounded-full border border-brand-red bg-brand-red text-white flex items-center justify-center gap-2 font-medium hover:bg-transparent hover:text-brand-red transition-colors duration-500">
                                    <span className="relative z-10">Send Message</span>
                                    <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
