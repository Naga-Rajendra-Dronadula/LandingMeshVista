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
                    <p className="text-xl font-medium text-slate-800">
                        MeshVista Inc. ("we", "our", or "us") intrinsically respects your right to digital privacy and is unwaveringly committed to protecting your personal data streams. This exhaustive Privacy Policy Document informs you step-by-step how we collect, process, utilize, sanitize, store, aggregate and safeguard your personal data when you interact with our website, consume our Generative AI APIs, and transact within our digital marketplace. Furthermore, this document exhaustively maps your comprehensive privacy rights mandated by global privacy doctrines, including the GDPR (EU), CCPA/CPRA (California), and the VCDPA (Virginia).
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. The Precise Categorical Data We Collect About You</h2>
                        <p>Personal data, legally defined as any informational signal relating to an identified or identifiable natural person, is processed meticulously. We do not collect "Special Categories" (e.g., genetic, biometric, religious beliefs) actively, but we do extract diverse variables configured as follows:</p>
                        <ul className="list-disc pl-5 space-y-3">
                            <li><strong>Identity Data Architecture:</strong> Includes first name, maiden name, last name, organizational titles, unique cryptographic user identifiers (UUIDs), linked GitHub/Google OAuth IDs, and date of birth validations.</li>
                            <li><strong>Logistical Contact Data:</strong> Includes overarching billing locations, granular delivery routing addresses, precise email addresses, secondary recovery emails, and mobile/telephone network numbers.</li>
                            <li><strong>Cryptographic Financial Data:</strong> Includes payment processor metadata. We explicitly <strong>do not</strong> store primary account numbers (PANs) or CVCs on our raw databases. We store specialized digital payment tokens issued by our PCI-DSS Level 1 compliant gateways (e.g., Stripe, PayPal).</li>
                            <li><strong>Deep Transaction Data:</strong> Includes highly granular telemetry regarding fiat and credit transactions, detailed invoice lineages, subscription life-cycles, allocated GPU compute seconds, and metadata on marketplace cart abandonments.</li>
                            <li><strong>Technical Environment Data:</strong> Includes incoming IPv4 and IPv6 addresses, deep-packet geo-location estimates, localized time-zone variances, browser user-agent strings, canvas fingerprinting metadata, MAC addresses (if strictly localized), operating system kernel versions, and installed plug-in network telemetry.</li>
                            <li><strong>Content and Workflow Data:</strong> Includes the literal 2D image matrices you upload for vectorization, plaintext stylistic prompts, JSON generation payloads, historical inference states, and the resulting polygonal 3D mesh outputs (GLB, OBJ).</li>
                            <li><strong>Aggregated Behavioral Data:</strong> Includes cross-session analytics mapping how you navigate standard web DOM elements, click-through-rate velocities, and generic statistical patterns used strictly for optimizing Next.js and React hydration loads.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. The Methodologies of Data Harvesting</h2>
                        <p>We deploy layered methodologies to dynamically harvest and index data points:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Direct Symbiotic Interactions:</strong> Conscious data provisioning whenever you complete forms via our Application, subscribe to our SaaS tiers, request high-tier developer support, or explicitly trigger an AI 3D Render job.</li>
                            <li><strong>Automated Telemetry Technologies:</strong> As you navigate the SPA (Single Page Application), we install secure cookies, trigger asynchronous web-beacons (pixel tags), and index localized browser cache states to constantly monitor session fluidity and combat bot-net intrusions (e.g., via Cloudflare implementations).</li>
                            <li><strong>Third-Party Syndicates:</strong> We dynamically pull corroborating verification data from authentication brokers (Google Workspace, Microsoft Azure AD), specialized analytic telemetry hubs (Google Analytics 4, Mixpanel), and fraud-prevention conglomerates.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Absolute Utilization of Data for Inference and ML Training</h2>
                        <p>
                            Operating a state-of-the-art Generative AI infrastructure necessitates massive computational bandwidth and mathematical data structuring. MeshVista operates on a policy of <strong>Generative Secrecy</strong> by default for all paid subscription tiers. We inherently protect your intellectual property; your uploaded 2D inputs and subsequent 3D generated meshes are strictly siloed and are <strong>never</strong> injected into our foundational neural network training loops asynchronously.
                        </p>
                        <p>
                            <strong>Exception (Free-Tier & Evaluative Modes):</strong> If you utilize the completely complimentary Free Tier, or you explicitly execute a "Contribute to AI Training" toggle within your Account Settings, you legally provision us an irrevocable, anonymized license. Under this exact license, we strip all Personal Identifiable Information (PII) from your image uploads and corresponding 3D topology, aggregating the pure mathematical vectors into localized Data Lakes. These sanitized data lakes are exclusively utilized to execute back-propagation finetuning, subsequently reducing topological hallucinations and improving overall MeshVista platform fidelity. You retain the sovereign right to revoke this evaluative opt-in at any time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Strategic External Disclosure Protocols</h2>
                        <p>There are operational scenarios where disseminating your data to authorized third parties is technologically unavoidable for structural operations:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>SaaS Infrastructure & Node Providers:</strong> Amazon Web Services (AWS), Google Cloud Platform (GCP), and specific GPU bare-metal providers who facilitate the Kubernetes clusters rendering our heavy tensor mathematical models.</li>
                            <li><strong>Sovereign Payment Cleared Entities:</strong> Institutions managing robust PCI data flows including Visa, Mastercard, and localized banking API junctions guaranteeing transaction success.</li>
                            <li><strong>Judicial & Federal Subpoenas:</strong> Law enforcement agencies, intelligence apparatuses, or recognized courts possessing mathematically verifiable, legally binding warrants compelling the release of specific user data logs due to alleged criminal cyber-activity.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Cross-Border Data Transfers and Sub-Processors</h2>
                        <p>
                            MeshVista Inc. is fundamentally domiciled within the United States. If you orchestrate traffic toward our servers from the European Economic Area (EEA), the United Kingdom, or Switzerland, your data will physically traverse the Atlantic. We rely implicitly on authorized Standard Contractual Clauses (SCCs) mandated by the European Commission, combined with heavy Data Processing Agreements (DPAs) signed by all our localized sub-processors, ensuring your data undergoes zero decay in privacy rights during trans-continental transit.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. SOC 2 Type II Security Measures and Cryptography</h2>
                        <p>
                            Cybernetic security is embedded into the core of our engineering philosophy. MeshVista actively maintains AICPA SOC 2 Type II compliance. We strictly enforce AES-256 elliptic curve cryptography for all internal data stored at rest on our SSD arrays. All ephemeral network transit routes are armored using TLS 1.3 / SSL handshakes utilizing Perfect Forward Secrecy. GPU clusters executing your generative inference nodes are dynamically sandboxed to guarantee absolute tenant isolation—mathematically ensuring negligible probability of cross-user memory leakage or artifact contamination.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Comprehensive Global Privacy Rights (GDPR, CCPA/CPRA, VCDPA)</h2>
                        <p>Depending upon your precise geographical jurisdiction, you command absolute dominion over specific data mechanics:</p>
                        <ul className="list-disc pl-5 space-y-3">
                            <li><strong>European GDPR Rights:</strong> Right to Access (Subject Access Requests), Right to Rectification of localized errors, Right to Erasure ("Right to be Forgotten" dictating full physical database purges within 30 days barring financial compliance holds), Right to Restriction of Processing, and the Right to Data Portability (raw JSON metric exporting).</li>
                            <li><strong>California CCPA/CPRA Rights:</strong> California residents explicitly maintain the right to know what personal data is harvested and shared, the right to non-discrimination for exercising privacy controls, and the uncompromising <strong>Right to Opt-Out of the "Sale" or "Sharing" of Personal Data</strong>. MeshVista categorically does not act as a data broker; we do not "sell" raw user data metrics to advertising hedge funds.</li>
                            <li><strong>Virginia VCDPA Rights:</strong> Residents maintain identical rights mirroring CCPA structs, extending into explicit opt-out procedures targeted at behavioral tracking syndicates.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">8. Stringent Cookie Protocol and Local Storage</h2>
                        <p>
                            Our digital perimeter leverages HTTP Cookies, HTML5 Local Storage, and IndexedDB to maintain highly persistent authentication tokens, load-balance web-socket connectivities across our edge servers, and save specialized dashboard states locally to hyper-accelerate browser render times. Navigating via anonymous capabilities (e.g., "Incognito Mode") or forcefully blocking necessary session cookies will immediately disrupt the mathematical connection to our GPU rendering queues, rendering the Service severely crippled.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">9. Children's Online Privacy Protection Act (COPPA)</h2>
                        <p>
                            The core algorithms and high-tier complexities of the MeshVista ecosystem are fundamentally designed for users strictly older than the minimum age of thirteen (13) years. Should our algorithmic detection metrics or a verifiable guardianship request determine we have inadvertently archived PII from a minor entity bypassing age gates, we will immediately execute hard-deletion protocols specifically targeting those orphaned database indices to achieve absolute COPPA compliance.
                        </p>
                    </section>

                    <p className="mt-16 text-slate-400 font-mono text-sm leading-loose pb-12 border-t border-slate-200/20 pt-8">
                        Data Protection Officer Identification: DPO-MV-SECURE1<br />
                        For exhaustive enactments of your constitutional data rights, or to file detailed subject access requests, transmit secure inquiries directly to our command center via <a href="/contact" className="text-violet-500 hover:text-violet-400">compliance protocols</a>.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
