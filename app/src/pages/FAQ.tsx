import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        category: "General",
        questions: [
            { q: "What is MeshVista?", a: "MeshVista is an AI-powered platform that converts 2D images into high-quality 3D models with PBR materials in seconds." },
            { q: "What formats can I download?", a: "Currently, we support the industry-standard GLB format, which includes embedded textures and materials." }
        ]
    },
    {
        category: "Generation",
        questions: [
            { q: "How long does it take?", a: "Standard quality takes about 1-2 minutes. Ultra quality may take up to 8 minutes depending on server load." },
            { q: "What are the credit costs?", a: "Draft (1 credit), Standard (2 credits), High (4 credits), and Ultra (8 credits)." }
        ]
    },
    {
        category: "Marketplace",
        questions: [
            { q: "How do I sell my models?", a: "Once generated, you can click 'Publish to Marketplace'. You earn 70% of every sale made on our platform." },
        ]
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<{ cat: number, q: number } | null>(null);

    const toggle = (cat: number, q: number) => {
        if (openIndex?.cat === cat && openIndex?.q === q) setOpenIndex(null);
        else setOpenIndex({ cat, q });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-white mb-6">Frequently Asked Questions</h1>
                <p className="text-slate-400">Everything you need to know about the product and billing.</p>
            </motion.div>

            <div className="space-y-12">
                {faqs.map((group, cIdx) => (
                    <div key={cIdx}>
                        <h2 className="text-2xl font-bold text-white mb-6">{group.category}</h2>
                        <div className="space-y-4">
                            {group.questions.map((faq, qIdx) => {
                                const isOpen = openIndex?.cat === cIdx && openIndex?.q === qIdx;
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: qIdx * 0.1 }}
                                        key={qIdx}
                                        className="frosted-glass rounded-2xl overflow-hidden transition-colors"
                                    >
                                        <button
                                            onClick={() => toggle(cIdx, qIdx)}
                                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
                                        >
                                            <span className="font-semibold text-lg text-left text-slate-200">{faq.q}</span>
                                            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="px-6 pb-4 pt-2 border-t border-white/5 text-slate-400"
                                                >
                                                    {faq.a}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
