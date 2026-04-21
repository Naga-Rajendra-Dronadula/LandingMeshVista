import { motion } from 'framer-motion';
import { Search, Book, FileText, Settings, Shield, ShoppingCart, HelpCircle } from 'lucide-react';

const blocks = [
    { icon: Book, title: 'Getting Started', link: '/help/getting-started' },
    { icon: FileText, title: 'Generating Models', link: '/help/generating' },
    { icon: ShoppingCart, title: 'Marketplace & Purchasing', link: '/help/marketplace' },
    { icon: Settings, title: 'Publishing & Selling', link: '/help/publishing' },
    { icon: Shield, title: 'Billing & Subscriptions', link: '/help/billing' },
    { icon: HelpCircle, title: 'Payouts', link: '/help/payouts' },
];

export default function HelpCenter() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-white mb-6">How can we help?</h1>
                <div className="max-w-2xl mx-auto relative group">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-fuchsia-400" />
                    <input
                        type="text"
                        placeholder="Search for articles, guides, or questions..."
                        className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 hover:bg-white/10 transition-colors"
                    />
                </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blocks.map((block, i) => (
                    <motion.a
                        href={block.link}
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 frosted-glass rounded-2xl hover:bg-white/10 transition-colors flex items-start gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:scale-110 transition-transform">
                            <block.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-white mb-1">{block.title}</h3>
                            <p className="text-sm text-slate-400">View articles and guides →</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
