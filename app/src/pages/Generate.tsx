import { motion } from 'framer-motion';
import { Upload, Cpu, Download } from 'lucide-react';

export default function Generate() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-white mb-4">How to Generate 3D Models</h1>
                <p className="text-slate-400 text-lg">A simple guide to creating production-ready assets with MeshVista AI.</p>
            </motion.div>

            <div className="space-y-12 relative">
                {/* Connecting Line */}
                <div className="absolute left-8 md:left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-violet-500 to-fuchsia-500 opacity-20 -translate-x-1/2 hidden md:block"></div>

                {[
                    { icon: Upload, title: "1. Upload Your Image", desc: "Drag and drop any 2D image. For the best results, use an image with a clear object and a solid or transparent background." },
                    { icon: Cpu, title: "2. AI Processing", desc: "Our neural network analyzes the image, infers depth, and reconstructs the geometry. It automatically assigns Base Color, Roughness, and Normal maps." },
                    { icon: Download, title: "3. Download or Publish", desc: "Once processed, preview your model directly in the browser. Download the standard GLB file for use in Blender, Unity, or Unreal, or publish it directly to the marketplace." },
                ].map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className={`md:w-1/2 flex ${i % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                            <div className="frosted-glass p-8 rounded-3xl border border-white/10 shadow-2xl relative z-10 w-full md:max-w-md">
                                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>

                        <div className="w-16 h-16 rounded-full bg-slate-900 border-4 border-fuchsia-500 flex items-center justify-center shrink-0 z-10 relative">
                            <step.icon className="w-6 h-6 text-fuchsia-400" />
                            {/* Glow */}
                            <div className="absolute inset-0 bg-fuchsia-500 blur-xl opacity-30 rounded-full"></div>
                        </div>

                        <div className="md:w-1/2 hidden md:block"></div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-transform hover:-translate-y-1">
                    Start Your First Generation
                </button>
            </div>
        </div>
    );
}
