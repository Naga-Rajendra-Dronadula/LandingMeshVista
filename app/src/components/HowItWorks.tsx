import { motion } from 'framer-motion';
import { UploadCloud, Zap, Download } from 'lucide-react';

const steps = [
    {
        icon: UploadCloud,
        title: "Upload Image",
        description: "Upload any PNG, JPG, or WebP image. You can even upload multiple angles for better accuracy.",
        delay: 0.1
    },
    {
        icon: Zap,
        title: "AI Generates",
        description: "Our MeshVista-powered AI instantly creates a detailed 3D model with full PBR materials.",
        delay: 0.3
    },
    {
        icon: Download,
        title: "Download & Use",
        description: "Download industry-standard GLB files ready for games (Unity/Unreal), AR, or 3D printing.",
        delay: 0.5
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 relative z-10 bg-slate-900/50 border-y border-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Three simple steps to bring your 2D ideas into the 3D world.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 -translate-y-1/2 z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: step.delay }}
                            className="relative z-10 flex flex-col items-center text-center p-6 frosted-glass rounded-3xl hover:bg-white/10 transition-colors cursor-default"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center mb-6 shadow-xl shadow-fuchsia-500/20 transform hover:scale-110 transition-transform duration-300">
                                <step.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
