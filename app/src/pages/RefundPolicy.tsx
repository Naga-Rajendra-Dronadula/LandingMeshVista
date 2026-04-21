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
                    <p className="text-xl font-medium text-slate-800">
                        This Comprehensive Extensible Refund and Cancellation Policy ("Refund Protocol") exhaustively outlines the legal framework, conditions, mathematical calculations, and strict exemptions under which MeshVista Inc. ("we", "us", "our") will authorize, process, or legally deny a refund for subscription fees, API credits, and marketplace asset purchases. Due to the immutable, computationally expensive reality of Generative AI inference rendering, our policies are inherently strict regarding the recovery of expended GPU resources. By continuing to transact within the MeshVista platform, you irrevocably agree to adhere to these codified financial stipulations.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Tiered Subscription Cancellations</h2>
                        <p>
                            You maintain the explicit right to legally cancel or strategically pause your recurring MeshVista SaaS subscription at any given tactical moment via your dedicated Account Dashboard's <i>"Billing Preferences"</i> panel.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><strong>Immediate Termination of Trailing Charges:</strong> Upon executing a localized cancellation request, your underlying credit or debit card nexus will strictly not undergo any further recurring billing events for subsequent monthly or annual cycles.</li>
                            <li><strong>Continuation of Vested Access:</strong> A verified cancellation does not instantly sever your access. You securely retain total infrastructural access to all GenAI 3D modeling pipelines, including API gateways and high-tier marketplace trading features, exactly until the terminal hour of your already-funded billing periodic cycle.</li>
                            <li><strong>Failure to Cancel Promptly:</strong> We are legally not responsible for executing post-mortem refunds if an active user forgets or technically neglects to cancel their recurring plan strictly prior to the 24-hour window preceding the automated renewal trigger.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. The Discretionary 14-Day Evaluative Guarantee (SaaS Access Only)</h2>
                        <p>
                            We offer a heavily restricted, deeply conditional 14-Day Money-Back evaluative guarantee applied exclusively to <strong>first-time organizational subscribers</strong> attached to our standard monthly or annual tiers. If you are thoroughly unsatisfied with the architectural rendering fidelity of our Generative pipelines, you may officially petition for a baseline refund within 14 consecutive calendar days of your initial genesis payment.
                        </p>
                        <p className="font-bold border-l-4 border-amber-500 pl-4 mt-4">
                            CRITICAL EXHAUSTION EXEMPTION: This initial 14-day safety net is instantly rendered legally void, nullified, and utterly forfeit the millisecond you algorithmically generate more than five (5) distinct 3D outputs (GLB/OBJ models) or if you execute a singular, authenticated download of a high-resolution export. Once computational GPU bandwidth is consumed beyond this threshold to mint physical digital assets, the transaction fundamentally shifts from a "software trial" directly into a "consumptive material use," classifying the original fee as non-refundable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Absolute Digital Goods Marketplace Final Sale Policy</h2>
                        <p>
                            Any discrete 3D models, stylized textures, procedural nodes, or rigged characters purchased directly via the peer-to-peer MeshVista Marketplace represent finalized, irreversible digital transactions.
                        </p>
                        <p>
                            Following global digital commerce consensus, once cryptographic access to a downloadable asset is digitally transferred to your local device or internal cloud bucket—signaling possession—the transaction is declared irrevocably closed. <strong>We do not, under any circumstance, issue subjective refunds for Marketplace goods.</strong> "I don't like the aesthetic", "The topology is heavily chaotic", or "This doesn't fit my exact Unity engine scene" are completely invalid rationales for seeking a fiscal reversion.
                        </p>
                        <p>
                            Exceptions are strictly isolated to:
                            <br /> (a) The underlying digital file archive is mathematically corrupted (e.g., CRC errors upon inflation).
                            <br /> (b) The digital asset aggressively violates standard copyright laws, activating our DMCA Takedown protocol where the asset is vaporized from the platform entirely.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. SLA Disruption and Infrastructural Failure Credits</h2>
                        <p>
                            If an absolute catastrophic failure originating deep within the MeshVista core inference clusters (e.g., a systemic multi-region AWS/GCP node blackout or global Kubernetes orchestration failure) prevents your legitimate execution of paid generation workloads for a sustained period exceeding 12 consecutive hours, we will programmatically dispatch compensatory infrastructure credits. These credits mathematically stack and will be allocated directly to your digital generation wallet. We explicitly do not issue fiat currency refunds directly to your localized banking institution for temporary latency fluctuations or sporadic neural network timeouts.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Chargeback Syndicates and Payment Fraud Defense</h2>
                        <p>
                            MeshVista maintains a zero-tolerance operational doctrine regarding deceptive claims, structured friendly-fraud, and weaponized chargebacks initiated violently through centralized credit card networks or institutions like PayPal.
                        </p>
                        <p>
                            If you forcefully initiate an unauthorized chargeback dispute for a statistically valid, appropriately delivered transaction where you heavily utilized GPU generating resources, your account will instantly face comprehensive lockdown operations. All previously generated assets stored locally on our S3 buckets will be locked. We actively dispute all unauthorized chargebacks by transferring comprehensive network telemetry, payload logs, and deterministic IP authentication graphs to the mediating financial institution. Any account detected utilizing deep-fakes or stolen credit arrays will be immediately referred to the corresponding federal financial fraud agency for deep compliance evaluation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Enterprise Upgrades and Downgrades Proration</h2>
                        <p>
                            If an enterprise organization or power user actively shifts their underlying subscription tier laterally (e.g., upgrading from 'Pro' to 'Mega-Cluster'), the mathematical difference in fiscal value covering the unexpired cycle of the previous structural tier is immediately calculated entirely as a prorated digital credit. This credit applies perfectly to the subsequent invoice sequence. Conversely, strategic downgrades executed mid-cycle strictly do not generate a liquid fiat refund; the higher-tier features simply continue until the cycle terminus, dynamically updating to the lower architecture thereafter.
                        </p>
                    </section>

                    <p className="mt-16 text-slate-400 font-mono text-sm leading-loose pb-12 border-t border-slate-200/20 pt-8">
                        Refund Processing Officer: RPO-MV-FIN-01<br />
                        For extremely complex billing inquiries, cryptographic invoice discrepancies, or legally mandated EU cooling-off period claims, you must firmly route your requests directly into our <a href="/contact" className="text-violet-500 hover:text-violet-400">financial dispatch division</a>. Typical turnaround telemetry is measured precisely at 3 to 5 business days.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
