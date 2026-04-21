import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function HelpArticle() {
    const { slug } = useParams();

    // Format slug for display logic
    const title = slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Help Article';

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/help" className="inline-flex items-center text-slate-400 hover:text-fuchsia-400 mb-8 transition-colors">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Help Center
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl font-extrabold text-white mb-6 border-b border-white/10 pb-6">{title}</h1>

                <div className="prose prose-invert prose-fuchsia max-w-none text-slate-300">
                    <p className="lead text-xl text-slate-400 mb-8">
                        This is a placeholder page for the "{title}" help category. In a production environment, this would fetch the relevant articles and guides based on the URL parameter.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">Sample Guides</h2>

                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="frosted-glass p-6 rounded-xl block border border-white/5 cursor-pointer hover:bg-white/5 transition-colors">
                                <h3 className="text-lg font-bold text-fuchsia-400 mb-2">How to optimize your {title.toLowerCase()} workflow</h3>
                                <p className="text-slate-400 text-sm">Learn the best practices and techniques for improving your process. This comprehensive guide covers everything from basics to advanced tips.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
