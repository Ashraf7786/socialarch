import { HeroGeometric } from "./ui/shape-landing-hero";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <section id="home">
            <HeroGeometric
                badge={
                    <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs md:text-sm">
                        <span className="text-base leading-none">🔥</span>
                        <span className="text-brand-red font-semibold">Premium</span>
                        <span className="text-white">Social Media Marketing Agency</span>
                    </div>
                }
                title1="Master the Digital Landscape"
                title2={
                    <>
                        <span className="text-white">with a </span>
                        <span className="text-brand-red font-serif italic pr-4">Premium</span>
                        <span>Agency.</span>
                    </>
                }
                description={
                    <>
                        Beyond aesthetics, we build authority. <strong className="text-white font-semibold">SocialArk</strong> is a data-driven <strong className="text-white font-semibold">digital marketing company</strong> transforming ambitious brands into market leaders through innovative design, cutting-edge technology, and high-conversion strategies.
                    </>
                }
                primaryCta={
                    <Link to="/contact">
                        <button className="flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white hover:text-brand-red transition-all duration-300">
                            Get My Free Growth Strategy
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                }
                secondaryCta={
                    <Link to="/portfolio">
                        <button className="flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-medium tracking-wide border border-white/20 hover:bg-white/10 transition-all duration-300">
                            Explore Our Case Studies
                        </button>
                    </Link>
                }
            />
        </section>
    );
}
