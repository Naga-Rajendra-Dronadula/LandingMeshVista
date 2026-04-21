import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cuboid } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                            <Sparkles className="w-4 h-4 text-fuchsia-400" />
                            <span className="text-sm font-medium text-slate-300">AI-powered by MeshVista</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                            Turn Any Image Into a <br className="hidden lg:block" />
                            <span className="gradient-text">3D Model</span> in Seconds.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Transform flat images into highly detailed, game-ready 3D assets with PBR materials. Skip hours of modeling and start creating instantly.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="/generate"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1"
                            >
                                Try Free <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="/marketplace"
                                className="w-full sm:w-auto px-8 py-4 frosted-glass rounded-full font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
                            >
                                Browse Marketplace
                            </a>
                        </div>

                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                No credit card required
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                5 free credits
                            </div>
                        </div>
                    </motion.div>

                    {/* 3D Visual Placeholder / Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex-1 w-full max-w-lg lg:max-w-none relative"
                    >
                        <div className="relative aspect-square w-full">
                            {/* Outer glowing rings */}
                            <div className="absolute inset-0 rounded-full border border-fuchsia-500/20 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-4 rounded-full border border-violet-500/30 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>

                            {/* Center object */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-3/4 h-3/4 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 backdrop-blur-3xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex items-center justify-center">

                                    {/* CSS 3D Cube Animation */}
                                    <div className="w-32 h-32 relative transform-gpu preserve-3d animate-[spin3d_8s_linear_infinite]">
                                        <style dangerouslySetInnerHTML={{
                                            __html: `
                      @keyframes spin3d {
                        0% { transform: rotateX(0deg) rotateY(0deg); }
                        100% { transform: rotateX(360deg) rotateY(360deg); }
                      }
                      .preserve-3d { transform-style: preserve-3d; }
                      .cube-face { position: absolute; width: 100%; height: 100%; background: rgba(139, 92, 246, 0.4); border: 2px solid rgba(255,255,255,0.5); border-radius: 12px; backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; }
                      .face-f { transform: translateZ(64px); background: linear-gradient(135deg, rgba(139,92,246,0.6), rgba(236,72,153,0.6));}
                      .face-b { transform: rotateY(180deg) translateZ(64px); }
                      .face-r { transform: rotateY(90deg) translateZ(64px); }
                      .face-l { transform: rotateY(-90deg) translateZ(64px); }
                      .face-t { transform: rotateX(90deg) translateZ(64px); }
                      .face-bt { transform: rotateX(-90deg) translateZ(64px); }
                    `}} />
                                        <div className="cube-face face-f"><Sparkles className="w-8 h-8 text-white" /></div>
                                        <div className="cube-face face-b"></div>
                                        <div className="cube-face face-r"></div>
                                        <div className="cube-face face-l"></div>
                                        <div className="cube-face face-t"></div>
                                        <div className="cube-face face-bt"></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Floating UI Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 -left-6 frosted-glass px-4 py-3 rounded-2xl flex items-center gap-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400">Processing Time</div>
                                <div className="text-sm font-bold text-white">45 Seconds</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 -right-6 frosted-glass px-4 py-3 rounded-2xl flex items-center gap-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                                <Cuboid className="w-4 h-4 text-fuchsia-400" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400">Format</div>
                                <div className="text-sm font-bold text-white">GLB + PBR</div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
