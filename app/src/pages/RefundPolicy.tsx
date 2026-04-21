import { motion } from 'framer-motion';

export default function RefundPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-[#fafafa] text-slate-800 rounded-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] p-10 md:p-16 relative mx-auto"
                style={{
                    backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>

                <div className="mb-12 border-b border-slate-300 pb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 font-serif">Refund Policy</h1>
                    <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">Last updated: April 21, 2026</p>
                </div>

                <div className="space-y-8 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-serif prose-a:text-fuchsia-600 prose-p:leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Generation Credits</h2>
                        <p>
                            Due to the high computational costs of GPU processing required to generate 3D models, generation credits consumed during successful generations are generally non-refundable.
                        </p>
                        <p className="mt-4">
                            If a generation fails due to a server error or a bug on our end, the credits will automatically be refunded to your account balance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Subscription Plans</h2>
                        <p>
                            You may cancel your subscription at any time. When you cancel, you will continue to have access to the subscription features until the end of your current billing cycle. We do not provide prorated refunds for mid-month cancellations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Marketplace Purchases</h2>
                        <p>
                            Refunds for models purchased on the marketplace are evaluated on a case-by-case basis. You may request a refund within 7 days of purchase if:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>The model file is corrupted and cannot be opened.</li>
                            <li>The model significantly misrepresents the previews shown on the marketplace.</li>
                            <li>The model lacks the file formats or materials advertised.</li>
                        </ul>
                        <p className="mt-4 text-slate-500 italic">
                            Note: "Accidental purchase" or "changing your mind" after downloading the files does not qualify for a refund due to the digital nature of the product.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. How to Request a Refund</h2>
                        <p>
                            To request a refund for a marketplace purchase, go to the model's detail page in your Purchases tab and click "Request Refund". For subscription billing issues, please contact our support team at <a href="mailto:support@meshvista.com" className="text-fuchsia-600 hover:text-fuchsia-500 font-medium">support@meshvista.com</a>.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
