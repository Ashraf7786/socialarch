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
                <title>SocialArk | Premier Digital Marketing & Social Media Agency</title>
                <meta name="description" content="Master the digital landscape with SocialArk. We are a premier digital marketing company specializing in social media growth, paid advertising, and aesthetic web design." />
                <meta name="keywords" content="social media marketing, digital marketing company, social media agency, content creation, paid advertising, web design, SEO, brand positioning" />
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
