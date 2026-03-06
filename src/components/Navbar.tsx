import { useState } from 'react';
import { Phone, ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/#services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-8 md:py-6 bg-brand-dark/80 backdrop-blur-lg border-b border-white/5 md:bg-transparent md:backdrop-blur-none md:border-none">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 md:gap-3 cursor-pointer z-50 hover:opacity-80 transition-opacity"
                    onClick={() => navigate('/')}
                >
                    {/* SVG Logo approximating the image provided */}
                    <svg width="40" height="28" className="md:w-[48px] md:h-[32px]" viewBox="0 0 100 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 40 L35 25 L45 35 L33 50 Z" fill="#E8313A" />
                        <path d="M30 30 L40 20 L45 30 L35 40 Z" fill="#E8313A" />
                        <path d="M20 30 L25 40 L10 40 Z" fill="#E8313A" />
                        <path d="M43 45 L55 25 L80 15 L60 55 Z" fill="#333333" />
                        <path d="M70 20 L85 10 L80 30 Z" fill="#333333" />
                        <path d="M50 35 L65 15 L75 25 L80 15" stroke="#333333" strokeWidth="4" />
                    </svg>
                    <div className="flex flex-col">
                        <span className="text-white text-2xl md:text-3xl font-extrabold tracking-tight leading-none pt-1 md:pt-2">
                            Social <span className="text-brand-red">Arch</span>
                        </span>
                        <span className="text-white/60 text-[0.4rem] sm:text-[0.45rem] md:text-[0.55rem] font-bold tracking-[0.1em] uppercase mt-1 md:mt-1.5 ml-0.5">
                            A Digital Marketing Company
                        </span>
                    </div>
                </div>

                {/* Center Nav Pill */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-3">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/');
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`text-sm tracking-wide transition-colors ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Right side contact & Mobile Toggle */}
                <div className="flex items-center justify-end gap-4 text-sm z-50 ml-auto flex-shrink-0">
                    <div className="hidden xl:flex items-center gap-2 text-slate-300 mr-2">
                        <Phone className="w-4 h-4" />
                        <span>+0175-0050-088</span>
                    </div>

                    <div className="hidden md:block">
                        <InteractiveHoverButton text="Contact Us" onClick={() => navigate('/contact')} />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="flex lg:hidden p-2 text-white bg-white/5 rounded-md border border-white/10 hover:bg-white/10 transition-colors ml-4 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Navigation Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-brand-dark pt-24 px-6 flex flex-col gap-6 lg:hidden"
                    >
                        <div className="flex flex-col gap-4 text-xl">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-white hover:text-brand-red transition-colors py-2 border-b border-white/10"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-slate-300 pb-4">
                                <Phone className="w-5 h-5 text-brand-red" />
                                <span>+0175-0050-088</span>
                            </div>

                            <button className="bg-brand-red text-white font-medium px-6 py-4 rounded-full flex items-center justify-center gap-3 active:bg-[#C8232B] transition-colors w-full">
                                Contact Us
                                <span className="bg-white text-brand-red p-1.5 rounded-full">
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
