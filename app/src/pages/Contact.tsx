import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-white mb-6">Contact Us</h1>
                <p className="text-slate-400">Have a question or a problem? Reach out to us.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="frosted-glass p-8 rounded-3xl">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="button" className="w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all transform hover:-translate-y-1">
                            Send Message
                        </button>
                    </form>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
                            <Mail className="w-6 h-6 text-violet-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                            <p className="text-slate-400 mb-2">For general inquiries and technical support.</p>
                            <a href="mailto:support@meshvista.com" className="text-fuchsia-400 hover:text-fuchsia-300 font-medium">support@meshvista.com</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center shrink-0">
                            <MessageSquare className="w-6 h-6 text-fuchsia-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                            <p className="text-slate-400 mb-2">Available for Pro and Enterprise customers during business hours (9AM-5PM EST).</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
