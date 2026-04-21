import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 font-serif">Privacy Policy</h1>
                    <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">Last updated: April 21, 2026</p>
                </div>

                <div className="space-y-8 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-serif prose-a:text-fuchsia-600 prose-p:leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                        <p>We collect information that you provide directly to us, including:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Account details (email, name, password)</li>
                            <li>Uploaded images and generated 3D models</li>
                            <li>Payment information (processed securely via Stripe)</li>
                            <li>Communications with our support team</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send technical notices, updates, security alerts, and support messages</li>
                            <li>Train our AI models (only if you explicitly opt-in)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Data Storage and Security</h2>
                        <p>
                            Your data is stored securely on our Google Cloud servers. We implement appropriate technical and organizational security measures designed to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Sharing of Information</h2>
                        <p>
                            We do not sell your personal information. We may share your information with third-party vendors and service providers that perform services on our behalf, such as payment processors (Stripe) and cloud hosting providers.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
