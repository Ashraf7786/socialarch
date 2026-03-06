"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: { text: string; image: string; name: string; role: string }[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-transparent"
            >
                {[...new Array(2).fill(0)].map((_, index) => (
                    <React.Fragment key={index}>
                        {props.testimonials.map(({ text, image, name, role }, i) => (
                            <div
                                className="p-8 rounded-[2rem] border border-white/5 shadow-2xl max-w-sm w-full bg-[#181818]"
                                key={i}
                            >
                                <div className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">{text}</div>
                                <div className="flex items-center gap-4 mt-auto">
                                    <img
                                        width={48}
                                        height={48}
                                        src={image}
                                        alt={name}
                                        className="h-12 w-12 rounded-full object-cover border border-white/10"
                                    />
                                    <div className="flex flex-col">
                                        <div className="tracking-tight font-semibold text-white">{name}</div>
                                        <div className="text-sm text-brand-red opacity-80 tracking-tight mt-0.5">{role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};
