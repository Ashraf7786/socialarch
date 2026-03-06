import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "This agency revolutionized our operations, streamlining our marketing and digital footprints. The creative team keeps us productive.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        name: "Briana Patton",
        role: "Operations Manager",
    },
    {
        text: "Partnering with SocialArk was smooth and quick. The stunning, user-friendly interface made user engagement effortless.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
        name: "Bilal Ahmed",
        role: "Marketing Tech",
    },
    {
        text: "The creative team is exceptional, guiding us through setup and providing ongoing consultation, ensuring our brand identity shines.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
        name: "Saman Malik",
        role: "Customer Support Lead",
    },
    {
        text: "SocialArk's seamless integrations enhanced our business operations and brand efficiency. Highly recommend for its sharp aesthetic.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
        name: "Omar Raza",
        role: "CEO",
    },
    {
        text: "Its robust features and quick support have transformed our workflow, making our reach significantly more widespread.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        name: "Zainab Hussain",
        role: "Project Manager",
    },
    {
        text: "The smooth implementation exceeded expectations. It streamlined processes, transforming overall business visuals.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        name: "Aliza Khan",
        role: "Business Analyst",
    },
    {
        text: "Our business functions improved with a user-friendly design and positive customer feedback after the rebrand.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
        name: "Farhan Siddiqui",
        role: "Marketing Director",
    },
    {
        text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our digital presence.",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80",
        name: "Sana Sheikh",
        role: "Sales Manager",
    },
    {
        text: "Using SocialArk, our online presence and conversions significantly improved, skyrocketing product performance.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        name: "Hassan Ali",
        role: "E-commerce Manager",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
    return (
        <section className="bg-[#0f0f0f] py-16 relative w-full overflow-hidden" id="testimonials">
            <div className="container z-10 mx-auto px-6 max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
                >
                    <div className="flex justify-center mb-6">
                        <div className="border border-brand-red bg-brand-red/10 py-1.5 px-6 rounded-full text-brand-red text-sm font-semibold tracking-wider uppercase">Testimonials</div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight mt-5 text-white">
                        What our <span className="font-serif italic text-brand-red">partners</span> say
                    </h2>
                    <p className="mt-8 text-slate-400 text-lg">
                        See what our customers have to say about collaborating inside the ark.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[600px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
}
