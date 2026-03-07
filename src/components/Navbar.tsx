import { useState } from 'react';
import { Phone, ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { servicesData } from '../data/services';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
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
                    <img
                        src="/logo.png"
                        alt="Social Arch Logo"
                        className="h-10 md:h-12 w-auto bg-white/95 p-1.5 rounded-md shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    />
                </div>

                {/* Center Nav Pill */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-3">
                    {navItems.map((item) => {
                        const isActive = location.pathname.startsWith(item.path) && item.path !== '/' || (location.pathname === '/' && item.path === '/');

                        if (item.name === 'Services') {
                            return (
                                <div key={item.name} className="relative group/nav z-50 py-2">
                                    <Link
                                        to={item.path}
                                        className={`flex items-center gap-1 text-sm tracking-wide transition-colors ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                                    >
                                        {item.name}
                                        <ChevronDown className="w-4 h-4 transition-transform group-hover/nav:-rotate-180" />
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300">
                                        <div className="bg-[#111] border border-white/10 rounded-2xl p-2 w-[280px] shadow-2xl flex flex-col gap-1 relative overflow-hidden">
                                            {servicesData.map((service) => (
                                                <Link
                                                    key={service.id}
                                                    to={`/services/${service.id}`}
                                                    className="px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-sm text-slate-300 hover:text-white flex items-center justify-between group/item"
                                                >
                                                    {service.title}
                                                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-brand-red" />
                                                </Link>
                                            ))}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 blur-[50px] rounded-full pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`text-sm tracking-wide transition-colors py-2 ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
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
                            {navItems.map((item) => {
                                if (item.name === 'Services') {
                                    return (
                                        <div key={item.name} className="flex flex-col border-b border-white/10">
                                            <div
                                                className="flex items-center justify-between py-2 text-white hover:text-brand-red transition-colors cursor-pointer"
                                                onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpenMobile ? 'rotate-180 text-brand-red' : ''}`} />
                                            </div>

                                            <AnimatePresence>
                                                {isServicesOpenMobile && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden flex flex-col gap-3 pl-4 pb-4 mt-2"
                                                    >
                                                        <Link
                                                            to="/services"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="text-white font-semibold text-lg hover:text-brand-red"
                                                        >
                                                            All Services Overview
                                                        </Link>
                                                        {servicesData.map((service) => (
                                                            <Link
                                                                key={service.id}
                                                                to={`/services/${service.id}`}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="text-slate-400 text-[1.1rem] hover:text-white transition-colors flex items-center gap-2"
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-brand-red/50"></span>
                                                                {service.title}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                }

                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-white hover:text-brand-red transition-colors py-2 border-b border-white/10"
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
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
