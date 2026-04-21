import { motion } from 'framer-motion';
import { Shield, Lock, Server, CheckCircle2 } from 'lucide-react';

export default function Security() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm mb-6 border border-emerald-500/30">
                    <Shield className="w-4 h-4" />
                    SOC 2 Type II
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Trust & Security Center</h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    We treat your data with the highest level of security. MeshVista is built on enterprise-grade infrastructure to ensure your intellectual property remains yours.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="frosted-glass p-8 rounded-3xl border border-white/5">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                        <Lock className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Encryption at Rest & Transit</h3>
                    <p className="text-slate-400">All data transferred between your devices and our servers is encrypted using TLS 1.3. Once stored, assets are encrypted at rest using AES-256 standard encryption.</p>
                </div>
                <div className="frosted-glass p-8 rounded-3xl border border-white/5">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                        <Server className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Isolated Infrastructure</h3>
                    <p className="text-slate-400">Generation workloads are ran in isolated containerized environments. Artifacts left in GPU memory are immediately wiped upon completion.</p>
                </div>
            </div>

            <div className="prose prose-invert prose-fuchsia max-w-none">
                <div className="frosted-glass p-8 rounded-3xl border border-white/5">
                    <h2 className="text-3xl font-bold text-white mb-6">SOC 2 Compliance Program</h2>
                    <p className="text-slate-400 mb-6 font-medium">MeshVista adheres to the stringent trust services criteria defined by the American Institute of Certified Public Accountants (AICPA).</p>

                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-white font-bold mb-1 text-lg">Security</h4>
                                <p className="text-slate-400 text-sm m-0">The system is protected against unauthorized access (both physical and logical).</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-white font-bold mb-1 text-lg">Availability</h4>
                                <p className="text-slate-400 text-sm m-0">The system is available for operation and use as committed or agreed.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-white font-bold mb-1 text-lg">Processing Integrity</h4>
                                <p className="text-slate-400 text-sm m-0">System processing is complete, valid, accurate, timely, and authorized.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-white font-bold mb-1 text-lg">Confidentiality</h4>
                                <p className="text-slate-400 text-sm m-0">Information designated as confidential is protected as committed or agreed.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-white font-bold mb-1 text-lg">Privacy</h4>
                                <p className="text-slate-400 text-sm m-0">Personal information is collected, used, retained, disclosed, and disposed of in conformity with our privacy notice commitments.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-slate-400 text-sm italic mb-4">Enterprise customers can request our formal SOC 2 Type II attestation report under NDA.</p>
                        <a href="/contact" className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors">
                            Request Report
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
