import type { ReactNode } from 'react';

export type ServiceData = {
    id: string;
    displayId: string;
    title: string;
    description: string;
    image: string;
    subServices: string[];
    longDescription?: string;
    customContent?: ReactNode;
};

export const servicesData: ServiceData[] = [
    {
        id: 'web-design',
        displayId: '01',
        title: 'Web Design & Development',
        description: 'We build stunning, high-performance websites optimized for conversions. From landing pages to full-scale enterprise platforms.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&w=1000&q=80',
        subServices: [
            'UI/UX DESIGN', 'FRONTEND DEV',
            'ECOMMERCE', 'SEO OPTIMIZATION',
            'PERFORMANCE TUNING', 'RESPONSIVE DESIGN'
        ],
        longDescription: 'In today\'s digital-first world, your website is the foundation of your business. We don\'t just design pretty interfaces; we engineer high-performance, accessible, and conversion-optimized digital experiences. Our development process bridges the gap between aesthetic brilliance and robust technical architecture, ensuring your brand stands out and scales seamlessly.'
    },
    {
        id: 'graphic-design',
        displayId: '02',
        title: 'Graphic Design',
        description: 'Your brand\'s visual identity is its first impression. Our creative studio produces pixel-perfect graphics and branding materials.',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&w=1000&q=80',
        subServices: [
            'LOGO DESIGN', 'BRAND IDENTITY',
            'TYPOGRAPHY', 'PACKAGING DESIGN',
            'ILLUSTRATION', 'MARKETING COLLATERAL'
        ],
        longDescription: 'Visual communication is the most powerful tool for brand differentiation. Our graphic design experts craft compelling visual narratives that resonate with your target audience. From foundational logo design and comprehensive brand identities to intricate packaging and marketing collateral, we ensure every pixel aligns with your brand\'s core message and values.'
    },
    {
        id: 'video-editing',
        displayId: '03',
        title: 'Video Editing',
        description: 'High-retention, cinematic video content designed to dominate the algorithmic feeds and captivate your audience.',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&w=1000&q=80',
        subServices: [
            'SHORT-FORM REELS', 'YOUTUBE EDITING',
            'COLOR GRADING', 'MOTION GRAPHICS',
            'SOUND DESIGN', 'VISUAL EFFECTS'
        ],
        longDescription: 'Video is the undisputed king of modern digital consumption. Our editing suite specializes in transforming raw footage into high-retention, cinematic masterpieces. Whether it\'s crafting viral-ready short-form content for TikTok and Reels, or producing polished, long-form YouTube documentaries, we employ advanced pacing, color grading, and motion graphics to command attention and drive action.'
    },
    {
        id: 'brand-advertising',
        displayId: '04',
        title: 'Brand Advertising',
        description: 'Strategic storytelling and media placement that elevate your brand awareness and cement your position in the market.',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&w=1000&q=80',
        subServices: [
            'CAMPAIGN STRATEGY', 'MEDIA BUYING',
            'STORYTELLING', 'COPYWRITING',
            'BILLBOARDS & OOH', 'INFLUENCER OUTREACH'
        ],
        longDescription: 'Great products need great distribution. Our brand advertising services merge compelling storytelling with aggressive, strategic media buying. We design cross-channel campaigns that build unignorable market presence—from high-impact digital placements to out-of-home advertising—ensuring your brand becomes the definitive choice in your industry.'
    },
    {
        id: 'social-media-management',
        displayId: '05',
        title: 'Social Media Management',
        description: 'Social media is your digital storefront. We manage your presence to build a loyal community and drive authentic engagement.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&w=1000&q=80',
        subServices: [
            'CONTENT PILLARS', 'COMMUNITY BUILDING',
            'ENGAGEMENT GROWTH', 'MONTHLY REPORTS',
            'ANALYTICS TRACKING'
        ],
        longDescription: 'Your social media presence shouldn\'t just be a bulletin board; it should be an active, thriving community. We take complete ownership of your social channels, developing robust content pillars, monitoring trends, and actively engaging with your audience. We turn passive followers into vocal brand advocates through authentic, consistent, and strategic daily management.',
        customContent: (
            <div className="space-y-16 text-slate-300">
                <section>
                    <h3 className="text-3xl font-bold text-white mb-6">The Truth About Social Media in 2026</h3>
                    <p className="text-lg leading-relaxed mb-6">Let's be honest for a second. Most brands treat social media like a digital billboard—they just post and pray. But in an era where attention is the new currency, "just posting" is a waste of time. At Social Arch, we believe your social media should be your most active sales channel, your 24/7 customer service desk, and your brand's strongest voice.</p>
                    <p className="text-lg leading-relaxed">As a leading social media marketing agency, we don't just manage accounts; we build digital empires. Whether you are a local business in Jaipur or a global e-commerce brand, our mission is to make sure when people scroll, they stop for you.</p>
                </section>

                <section>
                    <h3 className="text-3xl font-bold text-white mb-6">Why Most Social Media Strategies Fail</h3>
                    <p className="text-lg leading-relaxed mb-6">Social media isn't just about pretty pictures. It's about Psychology. Most strategies fail because they focus on "Vanity Metrics"—likes and followers that don't buy.</p>
                    <p className="text-lg leading-relaxed">At Social Arch, our approach is different. We focus on Digital Results. We look at the data: Who is your audience? When are they most active? What triggers them to click 'Buy' or 'Book Now'? We bridge the gap between "being seen" and "being remembered." Our management style is proactive, not reactive. We don't wait for trends; we anticipate them.</p>
                </section>

                <section>
                    <h3 className="text-3xl font-bold text-white mb-6">Our 360-Degree Social Media Management Services</h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-bold text-brand-red mb-3">A. Content Strategy & Aesthetic Curation</h4>
                            <p className="text-lg leading-relaxed mb-4">Your profile is your digital storefront. If it looks cluttered or boring, people will walk away. We curate a high-end visual aesthetic that matches your brand's DNA.</p>
                            <ul className="list-disc pl-6 space-y-2 text-lg">
                                <li><strong className="text-white">Custom Visuals:</strong> High-fidelity graphics and cinematic photography.</li>
                                <li><strong className="text-white">Consistent Branding:</strong> Your brand colors, fonts, and "vibe" across all platforms.</li>
                                <li><strong className="text-white">Storytelling:</strong> Crafting captions that actually speak to humans, not robots.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-brand-red mb-3">B. Viral-Ready Short-Form Video</h4>
                            <p className="text-lg leading-relaxed">The algorithm loves video. Our team specializes in producing high-engagement Reels and short-form content that has the potential to go viral. We handle everything from the script and trending audio selection to the final edit.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-brand-red mb-3">C. Community Management & Engagement</h4>
                            <p className="text-lg leading-relaxed">Social media is a two-way street. We don't just post and leave. We engage with your followers, reply to comments, manage DMs, and build a loyal community. This builds Brand Trust, which is the fastest way to increase customer lifetime value.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-brand-red mb-3">D. Paid Social Acceleration</h4>
                            <p className="text-lg leading-relaxed">Sometimes, organic growth needs a boost. We integrate Meta Ads (Facebook & Instagram) and LinkedIn Ads into your management plan to reach a laser-targeted audience. We optimize for the lowest Cost Per Lead (CPL) while maximizing your reach.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-3xl font-bold text-white mb-6">Platform-Specific Dominance</h3>
                    <p className="text-lg leading-relaxed mb-6">We understand that every platform has a different "language."</p>
                    <ul className="space-y-4 text-lg list-disc pl-6">
                        <li><strong className="text-white">Instagram:</strong> We focus on visual storytelling, Reels, and highly interactive Stories to keep your brand top-of-mind.</li>
                        <li><strong className="text-white">LinkedIn:</strong> For our B2B clients, we focus on Thought Leadership, professional networking, and authority building.</li>
                        <li><strong className="text-white">Facebook:</strong> We leverage community groups and targeted ad sets to drive local and global traffic.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-3xl font-bold text-white mb-6">Data-Driven Reporting</h3>
                    <p className="text-lg leading-relaxed mb-6">We hate "black box" marketing. Every month, you'll receive a detailed performance report that breaks down:</p>
                    <ul className="space-y-4 text-lg list-disc pl-6">
                        <li><strong className="text-white">Reach & Impressions:</strong> How many new eyes saw your brand.</li>
                        <li><strong className="text-white">Engagement Rate:</strong> How many people actually interacted with your content.</li>
                        <li><strong className="text-white">Conversion Tracking:</strong> How many social media visits turned into actual leads or sales.</li>
                        <li><strong className="text-white">Competitor Analysis:</strong> What your rivals are doing and how we are beating them.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-3xl font-bold text-white mb-6">Why Work With Us?</h3>
                    <p className="text-lg leading-relaxed mb-6">You've seen the "Social Arch" design—it's sleek, dark, and professional. That's the level of quality we bring to your brand. We aren't a factory that churns out generic posts. We are a boutique digital marketing company that treats your business like our own.</p>
                    <ul className="space-y-4 text-lg list-disc pl-6">
                        <li><strong className="text-white">Human-Centric Approach:</strong> We write for people, not just algorithms.</li>
                        <li><strong className="text-white">Tech-Forward Tools:</strong> We use the latest AI and analytics tools to stay ahead of the curve.</li>
                        <li><strong className="text-white">Deep Industry Knowledge:</strong> From healthcare to hospitality, we know what works in your specific niche.</li>
                    </ul>
                </section>

                <section className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
                    <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-6">Frequently Asked Questions</h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-bold text-brand-red mb-2">Q: Do I need to be on every social media platform?</h4>
                            <p className="text-lg leading-relaxed text-slate-400">A: No. It's better to dominate two platforms than to be mediocre on five. We help you identify where your "ideal customer" hangs out and focus our energy there.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-brand-red mb-2">Q: How often should my brand post?</h4>
                            <p className="text-lg leading-relaxed text-slate-400">A: Quality always beats quantity. We focus on a consistent schedule—usually 4 to 5 high-quality posts per week—ensuring each one serves a specific purpose (Educate, Entertain, or Convert).</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-brand-red mb-2">Q: Can social media really help with SEO?</h4>
                            <p className="text-lg leading-relaxed text-slate-400">A: Yes! While social signals aren't a direct ranking factor, the traffic and brand searches generated by social media help Google see your website as an authority, which improves your overall search engine rankings.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 'paid-advertising',
        displayId: '06',
        title: 'Paid Advertising',
        description: 'Stop "boosting" posts and start building funnels. We specialize in scalable ads that focus entirely on driving ROI.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=1000&q=80',
        subServices: [
            'META ADS', 'GOOGLE ADS',
            'RETARGETING FUNNELS', 'A/B TESTING',
            'CONVERSION RATE OPTIMIZATION'
        ],
        longDescription: 'Stop playing the organic lottery and start predicting your revenue. Our paid media buyers are obsessed with one metric: Return on Ad Spend (ROAS). We build intricate, scalable marketing funnels across Meta, Google, and emerging platforms. Through relentless A/B testing, pixel-perfect retargeting, and aggressive conversion rate optimization, we turn your ad budget into a profit engine.'
    }
];
