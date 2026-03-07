import { useState } from 'react';
import { ArrowUpRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription logic here
        setEmail('');
    };

    const footerNavLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/#services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact Us', path: '/contact' }
    ];

    return (
        <footer className="relative w-full bg-[#030303] pt-32 overflow-hidden border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none z-0" />

            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

            <div className="relative max-w-[1400px] mx-auto px-6 z-10">

                {/* Massive Top CTA */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 border-b border-white/10 pb-20 mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter leading-none mb-4 md:mb-0">
                            Let's <span className="text-transparent" style={{ WebkitTextStroke: '2px #E8313A' }}>Talk</span>
                        </h2>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-tight mt-2">
                            About Your Project<span className="text-brand-red">.</span>
                        </h2>
                    </motion.div>

                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 15 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group flex items-center justify-center w-36 h-36 md:w-48 md:h-48 bg-transparent border border-white/20 rounded-full hover:bg-brand-red hover:border-brand-red transition-all duration-500 overflow-hidden shrink-0 mt-8 md:mt-0"
                        >
                            <span className="absolute inset-0 bg-brand-red translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            <ArrowUpRight className="relative z-10 text-white w-12 h-12 md:w-16 md:h-16 group-hover:scale-125 transition-transform duration-500" />

                            {/* Circular text wrapper could go here if using a library for circling text */}
                            <div className="absolute inset-0 rounded-full border border-dashed border-white/30 animate-[spin_15s_linear_infinite]" />
                        </motion.button>
                    </Link>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-10 lg:pr-8">
                        <a href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity w-fit">
                            <img
                                src="/logo.png"
                                alt="Social Arch Logo"
                                className="h-14 w-auto bg-white/95 p-2 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                            />
                        </a>

                        <p className="text-slate-400 text-base leading-relaxed">
                            Pioneering digital excellence through uncompromising design, engineering, and strategic marketing for brands that refuse to settle.
                        </p>

                        <div className="flex items-center gap-3">
                            {[
                                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                                { icon: <Facebook className="w-5 h-5" />, href: "#" },
                                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                                { icon: <Linkedin className="w-5 h-5" />, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-red hover:border-brand-red hover:-translate-y-1 transition-all duration-300 shadow-lg"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-6 lg:px-4">
                        <h4 className="text-white font-semibold tracking-widest text-xs uppercase mb-2">Explore</h4>
                        <ul className="flex flex-col gap-4">
                            {footerNavLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 text-base hover:text-white transition-all duration-300 flex items-center gap-2 group w-fit"
                                    >
                                        <ArrowUpRight className="w-4 h-4 text-brand-red opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        <span className="-translate-x-6 group-hover:translate-x-0 transition-transform duration-300">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Office Details */}
                    <div className="flex flex-col gap-6 lg:px-4">
                        <h4 className="text-white font-semibold tracking-widest text-xs uppercase mb-2">Headquarters</h4>
                        <div className="flex flex-col gap-4">
                            <p className="text-slate-400 text-base leading-relaxed hover:text-white transition-colors cursor-pointer">
                                120 Digital Avenue <br />
                                Suite 450, Tech District<br />
                                San Francisco, CA 94105
                            </p>
                            <a href="mailto:hello@socialark.com" className="text-brand-red hover:text-white text-base transition-colors inline-block mt-1 font-medium">
                                hello@socialark.com
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col gap-6 lg:pl-4">
                        <h4 className="text-white font-semibold tracking-widest text-xs uppercase mb-2">Newsletter</h4>
                        <p className="text-slate-400 text-base leading-relaxed">
                            Insights, strategies, and exclusive digital trends delivered directly to your inbox.
                        </p>

                        <form onSubmit={handleSubscribe} className="relative mt-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-red transition-all"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-red transition-colors duration-300"
                            >
                                <ArrowUpRight className="w-6 h-6" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className="relative z-10 w-full border-t border-white/10 bg-[#030303]/50 backdrop-blur-md">
                <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-xs tracking-wider text-slate-500 uppercase">
                        &copy; {new Date().getFullYear()} SocialArk Agency. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8 text-xs tracking-wider text-slate-500 uppercase">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
