import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { AboutUs } from '../components/AboutUs';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { SocialShowcase } from '../components/SocialShowcase';
import { Roadmap } from '../components/Roadmap';
import { Insights } from '../components/Insights';
import { FAQ } from '../components/FAQ';
import { Helmet } from 'react-helmet-async';

export function Home() {
    return (
        <main className="relative z-10 w-full flex flex-col gap-0 md:gap-12">
            <Helmet>
                <title>SocialArch | Social Media Marketing Agency</title>
                <meta name="description" content="Master the digital landscape with SocialArk. We build authority and transform ambitious brands into market leaders through innovative design and cutting-edge strategy." />
                <meta name="keywords" content="social media marketing, digital marketing company, social media agency, content creation, paid advertising" />
            </Helmet>
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
