import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function Showcase() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-400 font-bold text-sm mb-6 border border-violet-500/30">
                    <Lock className="w-4 h-4" />
                    Sneak Peek
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Community Showcase</h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Get a glimpse of the incredible models being created. We're currently curating the absolute best examples from our early-access community.
                </p>
            </motion.div>

            <div className="relative">
                <div className="grid md:grid-cols-3 gap-6 opacity-40 blur-[3px] pointer-events-none select-none">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="frosted-glass rounded-2xl overflow-hidden aspect-[4/3] relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="h-6 w-3/4 bg-white/20 rounded mb-2"></div>
                                <div className="h-4 w-1/2 bg-white/10 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-sm rounded-3xl z-20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
                    <p className="text-slate-300 mb-8 text-center max-w-sm">We are preparing our community galleries and rendering infrastructure.</p>
                    <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-transform hover:-translate-y-1">
                        Join the Waitlist
                    </button>
                </div>
            </div>
        </div>
    );
}
