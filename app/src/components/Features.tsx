import { motion } from 'framer-motion';
import { Layers, Box, Maximize, ShoppingBag, Zap, Rotate3D } from 'lucide-react';

const features = [
    {
        icon: Maximize,
        title: "Multiple Quality Presets",
        description: "Choose from Draft to Ultra resolutions (up to 1536px) depending on your needs. Iterate quickly, then uprez.",
        colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
        icon: Layers,
        title: "Full PBR Materials",
        description: "We don't just generate a mesh. Get Albedo, Normal, Metallic, and Roughness maps perfectly wrapped.",
        colSpan: "md:col-span-1 lg:col-span-2"
    },
    {
        icon: Box,
        title: "Download GLB Format",
        description: "Industry-standard, highly compressed, and immediately ready for drag-and-drop into Unity, Unreal Engine, or Blender.",
        colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: Rotate3D,
        title: "Multi-View Renders",
        description: "Inspect the generated model beautifully from front, back, top, and 3/4 angles directly via the browser.",
        colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: ShoppingBag,
        title: "Built-in Marketplace",
        description: "Turn your generations into cash. Publish your models with a single click and earn a 70% revenue split.",
        colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: Zap,
        title: "Lightning Fast Processing",
        description: "Generations complete in under a minute with our dedicated NVIDIA's GPU cluster. Never wait in massive queues.",
        colSpan: "md:col-span-2 lg:col-span-3"
    }
];

export default function Features() {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Unmatched Power & Precision</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to create production-ready 3D assets.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`frosted-glass p-8 rounded-3xl ${feature.colSpan} group hover:bg-white/10 hover:border-fuchsia-500/50 transition-all cursor-default overflow-hidden relative`}
                        >
                            {/* Subtle hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-fuchsia-500/0 group-hover:from-violet-500/10 group-hover:to-fuchsia-500/10 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 group-hover:text-fuchsia-300 transition-all">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
