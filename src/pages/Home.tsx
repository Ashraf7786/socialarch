import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { AboutUs } from '../components/AboutUs';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { SocialShowcase } from '../components/SocialShowcase';
import { Roadmap } from '../components/Roadmap';
import { Insights } from '../components/Insights';
import { FAQ } from '../components/FAQ';

export function Home() {
    return (
        <main className="relative z-10 w-full flex flex-col gap-0 md:gap-12">
            <Hero />
            <Features />
            <AboutUs />
            <Services />
            <SocialShowcase />
            <Roadmap />
            <Insights />
            <Testimonials />
            <FAQ />
        </main>
    );
}
