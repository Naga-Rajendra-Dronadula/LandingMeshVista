import { motion } from 'framer-motion';
import { Cuboid, Lock } from 'lucide-react';

export default function Marketplace() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/20 text-fuchsia-400 font-bold text-sm mb-6 border border-fuchsia-500/30">
                    <Lock className="w-4 h-4" />
                    Sneak Peek
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Marketplace Preview</h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Get a glimpse of the upcoming MeshVista native marketplace. Soon, you'll be able to buy, sell, and showcase high-fidelity 3D models seamlessly.
                </p>
            </motion.div>

            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-40 blur-[2px] pointer-events-none select-none">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="frosted-glass rounded-2xl overflow-hidden">
                            <div className="h-64 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                                <Cuboid className="w-20 h-20 text-white/20" />
                            </div>
                            <div className="p-6">
                                <div className="h-6 w-3/4 bg-white/10 rounded mb-3"></div>
                                <div className="h-4 w-1/2 bg-white/5 rounded mb-6"></div>
                                <div className="flex justify-between">
                                    <div className="h-6 w-1/4 bg-white/10 rounded"></div>
                                    <div className="h-6 w-1/4 bg-white/10 rounded"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-sm rounded-3xl z-20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
                    <p className="text-slate-300 mb-8 text-center max-w-sm">We are putting the final touches on our creator economy platform.</p>
                    <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-transform hover:-translate-y-1">
                        Join the Waitlist
                    </button>
                </div>
            </div>
        </div>
    );
}
