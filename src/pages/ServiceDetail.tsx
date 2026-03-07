import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/services';

export function ServiceDetail() {
    const { id } = useParams<{ id: string }>();
    const service = servicesData.find(s => s.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        // Redirect to services root if invalid ID
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="min-h-screen bg-brand-dark pt-32 pb-24 text-white">
            <Helmet>
                <title>{service.title} - SocialArk | Social Media Agency</title>
                <meta name="description" content={service.description} />
            </Helmet>

            <div className="max-w-[1200px] mx-auto px-6 md:px-12">
                {/* Back Link */}
                <Link to="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group">
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    Back to All Services
                </Link>

                {/* Hero / Header */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 relative">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 mb-6 text-brand-red text-sm font-semibold tracking-wider uppercase"
                        >
                            Service {service.displayId}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
                        >
                            {service.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-300 leading-relaxed font-light"
                        >
                            {service.longDescription || service.description}
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex-1 relative"
                    >
                        <div className="absolute inset-0 bg-brand-red/20 blur-3xl rounded-full -z-10" />
                        <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl h-[400px] lg:h-[500px]">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
                </div>

                {/* Standard What's Included (Fallback) */}
                {(!service.customContent) && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12 mb-24"
                    >
                        <h2 className="text-3xl font-bold mb-10 border-b border-white/10 pb-6">What's Included in {service.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
                            {service.subServices.map((sub, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0" />
                                    <span className="text-lg font-medium text-slate-200">{sub}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Rich Custom Content */}
                {service.customContent && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24 px-2"
                    >
                        {service.customContent}
                    </motion.div>
                )}

                {/* CTA */}
                <div className="text-center bg-brand-red/10 border border-brand-red/20 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Start Your {service.title} Project</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">Ready to transform your brand? Let's discuss your custom strategy and pricing plan.</p>
                    <Link to="/contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-[#C8232B] text-white rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95">
                        Get a Free Proposal
                    </Link>
                </div>
            </div>
        </div>
    );
}
