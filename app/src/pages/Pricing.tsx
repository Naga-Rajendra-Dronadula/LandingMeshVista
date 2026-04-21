import { motion } from 'framer-motion';
import { Lock, Check } from 'lucide-react';

export default function Pricing() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-400 font-bold text-sm mb-6 border border-violet-500/30">
                    <Lock className="w-4 h-4" />
                    Sneak Peek
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Pricing Preview</h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Get a glimpse of our upcoming subscription tiers. We are finalizing our cost structure to bring you the best value for high-quality 3D generation.
                </p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-40 blur-[3px] pointer-events-none select-none">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="frosted-glass rounded-3xl p-8 border border-white/10">
                            <div className="h-6 w-1/2 bg-white/20 rounded mb-4"></div>
                            <div className="h-10 w-1/3 bg-white/30 rounded mb-8"></div>
                            <div className="space-y-4 mb-8">
                                {[1, 2, 3, 4].map(j => (
                                    <div key={j} className="flex gap-3">
                                        <Check className="w-5 h-5 text-white/50" />
                                        <div className="h-5 w-3/4 bg-white/10 rounded"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="h-12 w-full bg-white/20 rounded-xl"></div>
                        </div>
                    ))}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-sm rounded-3xl z-20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
                    <p className="text-slate-300 mb-8 text-center max-w-sm">We are working hard to optimize our GPU infrastructure for you.</p>
                    <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-transform hover:-translate-y-1">
                        Join the Waitlist
                    </button>
                </div>
            </div>
        </div>
    );
}
