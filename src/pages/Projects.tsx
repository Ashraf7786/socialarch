import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Play, ExternalLink } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

// --- Custom Sphere Gen (to avoid maath esm vite crashes) ---
function generateSpherePositions(count: number, radius: number) {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random()) * radius;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
}

// --- ThreeJS Background Starfield ---
function Starfield(props: any) {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => generateSpherePositions(1000, 1.5));

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent color="#E8313A" size={0.005} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    );
}

// --- Mock Data ---
const categories = ['All', 'UX/UI Design', 'Development', 'Graphic Design', 'SEO Marketing', 'Video Production'];

const allProjects = [
    {
        id: 1,
        title: 'Fintech Mobile App Rebrand',
        category: 'UX/UI Design',
        image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=1200&q=80',
        client: 'PayGlobal',
        year: '2025'
    },
    {
        id: 2,
        title: 'E-Commerce Platform Architecture',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        client: 'StyleStore',
        year: '2024'
    },
    {
        id: 3,
        title: 'AI Trading Dashboard',
        category: 'UX/UI Design',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        client: 'TradeNode',
        year: '2026'
    },
    {
        id: 4,
        title: 'Global SEO Campaign',
        category: 'SEO Marketing',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        client: 'EcoGrow',
        year: '2023'
    },
    {
        id: 5,
        title: 'Corporate Web Transformation',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
        client: 'TechCorp',
        year: '2025'
    },
    {
        id: 6,
        title: 'SaaS Component Library',
        category: 'UX/UI Design',
        image: 'https://images.unsplash.com/photo-1507238692062-5a042e9eec62?auto=format&fit=crop&w=1200&q=80',
        client: 'DesignShift',
        year: '2025'
    },
    {
        id: 7,
        title: 'Healthcare Patient Portal',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
        client: 'MediCare',
        year: '2024'
    },
    {
        id: 8,
        title: 'Luxury Property Ecosystem',
        category: 'UX/UI Design',
        image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?auto=format&fit=crop&w=1200&q=80',
        client: 'Opal Estates',
        year: '2026'
    },
    {
        id: 9,
        title: 'B2B Logistics Dashboard',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        client: 'FreightFlow',
        year: '2025'
    },
    {
        id: 10,
        title: 'Cyberpunk Event Poster Series',
        category: 'Graphic Design',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        client: 'Neon Nights Festival',
        year: '2026'
    },
    {
        id: 11,
        title: 'Minimalist Coffee Packaging',
        category: 'Graphic Design',
        image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=1200&q=80',
        client: 'Roast & Co.',
        year: '2024'
    },
    {
        id: 12,
        title: 'Abstract Magazine Layout',
        category: 'Graphic Design',
        image: 'https://images.unsplash.com/photo-1544377193-33dce4ea9a78?auto=format&fit=crop&w=1200&q=80',
        client: 'Avant Garde Issue',
        year: '2025'
    }
];

const videoReels = [
    { id: 'v1', title: 'Summer Campaign', client: 'Nike', image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=600&h=1066&q=80', video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
    { id: 'v2', title: 'Product Launch', client: 'Apple', image: 'https://images.unsplash.com/photo-1526512340740-9217d0159da9?auto=format&fit=crop&w=600&h=1066&q=80', video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' },
    { id: 'v3', title: 'Brand Anthem', client: 'RedBull', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&h=1066&q=80', video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' },
    { id: 'v4', title: 'Social Story', client: 'Spotify', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&h=1066&q=80', video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
    { id: 'v5', title: 'Documentary Mini', client: 'Patagonia', image: 'https://images.unsplash.com/photo-1504280502226-f4c6881a179c?auto=format&fit=crop&w=600&h=1066&q=80', video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
];

function ReelCard({ reel }: { reel: typeof videoReels[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            // Note: Modern browsers require the user to have interacted with the website 
            // before sound is allowed to autoplay via script.
            videoRef.current.play().catch(() => {
                console.log("Autoplay blocked: User must interact with the document first.");
            });
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="reel-card group relative w-[280px] h-[500px] md:w-[320px] md:h-[570px] rounded-[2.5rem] overflow-hidden cursor-pointer shrink-0 border border-white/10 shadow-2xl bg-black"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={reel.image}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0"
            />
            {/* Hover Video Layer */}
            <video
                ref={videoRef}
                src={reel.video}
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity z-20" />

            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:opacity-0 group-hover:scale-150 transition-all duration-500 z-30">
                <Play className="w-6 h-6 text-white ml-1 fill-white" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-30">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white font-medium tracking-wider mb-3 border border-white/20">
                    {reel.client}
                </span>
                <h4 className="text-2xl font-bold text-white tracking-tight">
                    {reel.title}
                </h4>
            </div>
        </div>
    );
}

export function Projects() {
    const [activeTab, setActiveTab] = useState('All');
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredProjects = activeTab === 'All'
        ? allProjects
        : activeTab === 'Video Production'
            ? []
            : allProjects.filter(p => p.category === activeTab);

    useGSAP(() => {
        // Hero Intro Animation
        gsap.from(".hero-text", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.2
        });

        gsap.from(".tab-pill", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power3.out",
            delay: 0.6
        });

    }, { scope: containerRef });

    // Separate effect for horizontal scroll
    useGSAP(() => {
        if (activeTab === 'Video Production' || activeTab === 'All') {
            const reelsContainer = document.querySelector('.reels-container');
            if (reelsContainer) {
                gsap.from(".reel-card", {
                    scrollTrigger: {
                        trigger: ".reels-wrapper",
                        start: "top 75%",
                    },
                    x: 100,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out"
                });
            }
        }
    }, { dependencies: [activeTab], scope: containerRef });

    return (
        <main ref={containerRef} className="min-h-screen bg-[#050505] relative overflow-hidden pt-32">

            {/* 3D Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Starfield />
                </Canvas>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <div className="overflow-hidden mb-4">
                        <h1 className="hero-text text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-white leading-none">
                            SELECTED <span className="font-serif italic text-brand-red font-light">Works</span>
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <p className="hero-text text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                            A curated collection of our finest digital experiences, engineered precisely to elevate and inspire modern businesses.
                        </p>
                    </div>
                </div>

                {/* Categories Tab */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-16 md:mb-24 px-4">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(cat)}
                            className={`tab-pill px-6 py-3 rounded-full text-sm tracking-wide font-medium transition-all duration-300 ${activeTab === cat
                                ? 'bg-brand-red text-white shadow-[0_0_20px_rgba(232,49,58,0.3)]'
                                : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid (Standard) */}
                {(activeTab !== 'Video Production') && (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-32"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    key={project.id}
                                    className={`project-card group relative flex flex-col gap-6 cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
                                >
                                    <div className="w-full h-[400px] lg:h-[550px] overflow-hidden rounded-[2rem] relative bg-[#111] border border-white/5">
                                        <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
                                        />

                                        {/* Hover Center Button */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                                            <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                                                <ExternalLink className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start justify-between gap-4 px-2">
                                        <div>
                                            <p className="text-brand-red font-medium tracking-widest uppercase text-xs mb-2">
                                                {project.category}
                                            </p>
                                            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight group-hover:text-brand-red transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="text-slate-500 font-serif italic text-lg pt-1 shrink-0">
                                            {project.year}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {/* Video Reels Section */}
                {(activeTab === 'Video Production' || activeTab === 'All') && (
                    <div className="reels-wrapper relative pt-10">

                        {(activeTab === 'All') && (
                            <div className="flex items-center justify-between mb-12">
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Video <span className="text-brand-red italic font-serif">Reels</span></h3>
                                <button className="hidden md:flex text-slate-400 hover:text-white items-center gap-2 group transition-colors">
                                    View All Reels <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-red transition-all" />
                                </button>
                            </div>
                        )}

                        <div className="w-full overflow-x-auto pb-12 hide-scrollbar mask-gradient-horizontal">
                            <div className="reels-container flex gap-6 md:gap-8 w-max px-4">
                                {videoReels.map((reel) => (
                                    <ReelCard key={reel.id} reel={reel} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* CSS for scrollbar hiding and mask */}
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .mask-gradient-horizontal {
                    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 1%, black 99%, transparent);
                }
            `}</style>
        </main>
    );
}
