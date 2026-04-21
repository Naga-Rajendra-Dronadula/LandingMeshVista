import { motion } from 'framer-motion';

export default function TermsOfService() {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 font-serif">Terms of Service</h1>
                    <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">Last updated: April 21, 2026</p>
                </div>

                <div className="space-y-8 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-serif prose-a:text-fuchsia-600 prose-p:leading-relaxed">
                    <p className="text-xl font-medium text-slate-800">
                        Please read these Terms of Service ("Terms", "Terms of Service", "Agreement", or "Document") carefully, comprehensively, and in their entirety before using the MeshVista website, the MeshVista software application, the MeshVista API, or any decentralized nodes (collectively referred to as the "Service", "Platform", or "Network") powered and operated by MeshVista Inc., our subsidiaries, and affiliates ("us", "we", "our", or "MeshVista"). This Agreement sets forth the legally binding, irrevocable terms and conditions governing your access to and use of the Service.
                    </p>
                    <p>
                        Your conditional access to and continued use of the Service is predicated fundamentally on your absolute acceptance of and strict compliance with these Terms. These Terms are applicable globally to all visitors, users, customers, registered merchants, contributors of data, beta-testers, and any other individuals, bots, or software agents ("User", "you", or "your") who access or utilize the Service. By accessing, browsing, interacting with, or registering an account on the Service, you signify and legally execute your unequivocal agreement to be bound by these Terms globally. If you disagree with any part, subsection, sub-clause or provision of the Terms, you must immediately cease all access to the Service, delete any downloaded software, and abstain from interacting with any API endpoints provided by MeshVista.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Comprehensive Definitions and Elaborations</h2>
                        <ul className="list-disc pl-5 space-y-3">
                            <li><strong>"Platform"</strong> refers intrinsically to the MeshVista web client, server environments, Application Programming Interfaces (APIs), the underlying proprietary Generative AI infrastructure, rendering pipelines (including the TRELLIS architecture alongside any future tensor-based iterations), and all associated codebases.</li>
                            <li><strong>"Content"</strong> unequivocally refers to text, images, 2D vector graphics, 3D foundational models, photoreal textures, physically based rendering (PBR) materials, shaders, source code, auditory soundscapes, or any digital material you directly or indirectly upload, transmit, render, or publish via our infrastructure.</li>
                            <li><strong>"Inputs"</strong> strictly refers to the raw 2D pixel imagery, spatial data maps, depth maps, textual parameters (prompts), and hyper-parameter configurations uploaded directly by a User to stimulate, seed or otherwise direct AI Generation.</li>
                            <li><strong>"AI Generation"</strong>, <strong>"Inference"</strong>, or <strong>"Outputs"</strong> refers to the automated, algorithmic processing of Inputs through our proprietary or licensed artificial neural networks to synthetically produce structured rendered 3D output data (e.g., .GLB, .OBJ, .FBX, .USDZ files) ready for digital consumption.</li>
                            <li><strong>"Marketplace"</strong> denotes the centralized trading hub operated by MeshVista where registered Users can syndicate, share, license, and sell their generated Outputs to third-party buyers under specified commercial licenses.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Eligibility, Account Registration, and Identity Verification</h2>
                        <p>
                            <strong>2.1 Legal Capacity:</strong> By registering, utilizing, or interacting with the Service, you represent, warrant, and covenant that you are at least eighteen (18) years of age (or the age of legal majority in your country, state, or province of residence). If you are accessing the Service on behalf of a corporation, partnership, limited liability company, or other legal entity, you explicitly represent that you have been granted the full authority to bind such entity into a legally enforceable contract under these Terms. MeshVista reserves the right to request proof of age or identity at any time.
                        </p>
                        <p>
                            <strong>2.2 Account Security:</strong> The creation of an account requires the submission of exact, accurate, complete, and persistently current information. Neglecting to update this information immediately upon any change constitutes a material breach of the Terms, leading to prospective account suspension, asset freezing, or permanent termination. You are unconditionally responsible for safeguarding your authentication credentials, multi-factor authentication methods, API keys, and any cryptographic tokens used to access the Service. MeshVista will not under any circumstances be liable for any data loss, monetary damage, or intellectual property theft arising from your failure to comply with stringent security hygiene.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Exhaustive Intellectual Property Rights & Licensing Constructs</h2>
                        <p>
                            <strong>3.1 Rights to User Inputs:</strong> You explicitly retain all inherent and preexisting intellectual property rights (including copyright, trademark, and trade dress) to the original 2D images, text prompts, or conceptual designs you upload to the Service. However, by submitting such Content, you grant MeshVista fundamentally necessary operations rights: a worldwide, perpetual, non-exclusive, royalty-free, fully paid-up, irrecovably sublicensable, and completely transferable license to utilize, reproduce, cache, adapt, compress, and process the Content exclusively for the purpose of operating, improving, load-balancing, and delivering the Service.
                        </p>
                        <p>
                            <strong>3.2 Commercial Rights to AI Outputs:</strong> Subject to your ongoing compliance with these Terms, payment of all applicable subscription schedules, and adherence to all local and international laws, you are granted full commercial ownership and licensing rights of the 3D models and rendering outputs generated entirely from your proprietary Inputs. MeshVista claims absolutely zero ownership over the final, raw generated 3D meshes, provided the original Input did not maliciously or inadvertently infringe upon the intellectual property rights of a protected third-party entity (e.g., copyrighted characters or protected trademarks). You alone shoulder the legal liability of ensuring your Generative Outputs are fit for commercial deployment.
                        </p>
                        <p>
                            <strong>3.3 MeshVista Platform Proprietary IP:</strong> The core Service, its underlying heuristic algorithms, mathematical weights, machine learning models, training data pipelines, original content (explicitly excluding User Inputs/Outputs), proprietary UI/UX implementations, logos, branding assets, and overall architectural functionality are entirely and perpetually the exclusive property of MeshVista Inc. The Service is guarded fiercely by copyright, trademark, trade secret, semiconductor chip protection, and international intellectual property laws spanning the United States, the European Union, and international treaties. You are granted no implied licenses.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Acceptable Use Policy and Prohibited Behaviors</h2>
                        <p>Your access to the Service is contingent upon absolute adherence to this Acceptable Use Policy. You agree irreversibly not to use the Service in any manner that:</p>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>Violates, circumvents, or bypasses any applicable federal, state, local, or international ordinance, law, statute, or regulatory framework, including comprehensive export control laws administered by OFAC, the US Department of Commerce, or corresponding international bodies.</li>
                            <li>Seeks to exploit, digitally harm, or attempt to harm minors in any form, including the algorithmic generation of CSAM, synthetic pedophilic material, or any structurally related content. Detection of such acts results in immediate, unannounced account termination and automatic referral to federal law enforcement agencies (e.g., NCMEC, FBI).</li>
                            <li>Generates, hallucinates, or propagates hateful, racially charged, ethnically discriminatory, violently explicit, or self-harm promotional materials.</li>
                            <li>Involves the transmission of unsolicited commercial bulk messages ("spam"), phishing requests, or multi-level marketing pyramid scams using MeshVista infrastructure or branded communications.</li>
                            <li>Involves algorithmic extraction techniques, data scraping, network spidering, or the programmatic reverse-engineering of the proprietary AI models driving the Platform (such as stealing tensor weights, mapping model boundaries, or inferring loss architectures via API probing).</li>
                            <li>Injects distributed denial-of-service (DDoS) attacks, network worms, logic bombs, highly obfuscated malware payloads, or any other technological vector aimed at crippling our compute clusters or stealing other users' Generation matrices.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. The Digital Millennium Copyright Act (DMCA) and Global Takedown Policies</h2>
                        <p>
                            MeshVista operates under the strict safe harbor provisions of the DMCA. It is our unyielding policy to review and act rapidly upon any well-constructed claim that Content hosted or generated on our Service directly infringes on the intellectual property of another entity.
                        </p>
                        <p>
                            If you represent a copyright holder or are an authorized agent acting under their purview, and you have credible evidence that a copyrighted work has been generated, distributed, or sold via the MeshVista Marketplace without authorization, you must submit a formalized takedown protocol. Submit a written decree to our designated Copyright Compliance Agent at legal-dmca@meshvista.com containing:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>A physical or verifiable digital signature of the individual authorized to act on behalf of the intellectual property owner.</li>
                            <li>An exhaustive identification of the copyrighted work supposedly infringed (e.g., registration numbers, original asset URIs).</li>
                            <li>Unequivocal identification of the infringing material residing on MeshVista servers, including explicit Marketplace URLs or Asset IDs.</li>
                            <li>Your comprehensive contact information including physical domicile, organizational email, and mobile telephone coordinates.</li>
                            <li>A sworn declaration stating you possess a "good faith belief that the disputed use is not sanctioned by the copyright owner, its legal agent, or under fair use law."</li>
                            <li>A secondary sworn declaration, issued strictly under the penalty of perjury, that the notification data is pinpoint accurate.</li>
                        </ul>
                        <p>
                            MeshVista reserves the right to terminate the accounts of "repeat infringers" after three (3) verified copyright strikes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Commercial Marketplace Logistics and Revenue Retention</h2>
                        <p>
                            Users enrolled in specific Service tiers may opt to distribute their generated glTF or OBJ artifacts via the embedded MeshVista Marketplace. By publishing, you expressly represent, under legal indemnity, that you hold total commercial license capability over the generated structural content.
                        </p>
                        <p>
                            <strong>Financial Mechanism:</strong> MeshVista acts strictly as the digital storefront intermediary and payment facilitation gateway. For every completed transaction, MeshVista mathematically deducts and retains a processing and hosting overhead fee equating to exactly thirty percent (30.0%) of the gross fiat transaction value (the "Platform Cut"). The remaining seventy percent (70.0%), minus any localized value-added tax (VAT) or payment network processing surcharges (e.g., Stripe interchange fees), is accrued to the User's digital wallet and disbursed on a rolling 30-day net schedule. MeshVista bears absolutely no legal burden for defects, topological collapse, or subsequent legal challenges mounted against assets traded between decentralized third parties within the Marketplace boundaries.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Comprehensive Disclaimers of Warranties</h2>
                        <p className="uppercase font-bold">
                            THE SERVICE, THE PLATFORM, THE INFERENCE CLUSTERS, AND ALL GENERATED OUTPUTS ARE PROVIDED TO YOU ON A STRICTLY "AS IS", "WITH ALL FAULTS", AND "AS AVAILABLE" BASIS. MESHVISTA INC. CATEGORICALLY DISCLAIMS ALL WARRANTIES, BOTH EXPRESSED AND IMPLIED, RANGING FROM THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A SINGULAR PURPOSE, QUIET ENJOYMENT, SYSTEM INTEGRATION, TO DATA ACCURACY AND NON-INFRINGEMENT.
                        </p>
                        <p>
                            We offer zero guarantees that the Service will fulfill your hyper-specific creative workflows, that the neuronal outputs will execute without geometric artifacts, UV mapping errors, or mesh fragmentation. We do not warrant that the servers will operate continuously, securely, or flawlessly without downtime, latency, or data packet loss. Outputs derived from artificial neural networks are intrinsically unpredictable, and "hallucinations"—where the AI generates bizarre, undesired mathematical topology—are recognized and expected byproducts of this nascent technology. They do not represent a valid breach of any operational contract.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">8. Absolute Limitation of Liability</h2>
                        <p className="uppercase font-bold">
                            TO THE MAXIMUM EXTENT RATIFIED BY APPLICABLE LAW, IN NO EVENT SHALL MESHVISTA INC., ITS CHIEF EXECUTIVE OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES, CONTRACTORS, TELECOMMUNICATIONS PARTNERS, AGENTS, SUPPLIERS, OR SUBSIDIARY AFFILIATES BE HELD LIABLE FOR ANY INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES. THIS EXCLUDES LIABILITY FOR THE LOSS OF ANTICIPATED PROFITS, FINANCIAL GOODWILL, DIGITAL DATA, ASSET USE, OR ANY OTHER INTANGIBLE DEPRECIATION RESULTING FROM (I) YOUR INABILITY TO ACCESS OR STREAMLINE THE SERVICE; (II) THIRDPARTY CONDUCT, HACKING, OR MALFEASANCE OCCURRING ONSITE; (III) RELIANCE ON GENERATED CONTENT FOR ENGINEERING, MEDICAL, OR ARCHITECTURAL DEPLOYMENT (WHICH IS STRICTLY FORBIDDEN); OR (IV) UNAUTHORIZED INTERCEPTION OF YOUR TRANSMISSIONS.
                        </p>
                        <p>
                            Should MeshVista be found legally liable in a competent court for any damage spanning outside the above protections, you agree that the absolute aggregate liability of MeshVista INC. for any combined civil claims correlating to the Service shall be mathematically capped and restricted to the total fiat currency amount paid by you directly to MeshVista for utilization of the Service strictly within the twelve (12) literal months preceding the instigating claim date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">9. Total Indemnification Requirements</h2>
                        <p>
                            You formally agree to aggressively defend, indemnify, and hold entirely harmless MeshVista Inc., along with its parent companies, venture capital partners, licensees, licensors, employees, contractors, agents, officers, and corporate directors, from and explicitly against any and all claims, demands, damages, monetary obligations, losses, liabilities, civil costs, or debts, and expenses (including but explicitly not limited to exorbitant attorney's fees, expert witness stipends, and court processing costs). This indemnification activates following scenarios arising out of:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>a) your specific use and localized access of the Service, by you or any proxy agent utilizing your digital account identity;</li>
                            <li>b) a demonstrable breach, violation, or defiance of any sub-clause contained within these Terms;</li>
                            <li>c) User Content or Inputs posted resulting in libel, defamation, or severe intellectual property torts against third-party entities;</li>
                            <li>d) any violation of geographic trade compliance laws originating from your IP subnet.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">10. Binding Individual Arbitration, Dispute Resolution, and Class Action Waiver</h2>
                        <p>
                            <strong>10.1 Obligation to Arbitrate:</strong> Please read this clause meticulously, as it materially alters your legal capability to pursue litigation in a public court of law alongside a jury. You and MeshVista simultaneously agree that any complex dispute, controversy, statutory claim, or civil action arising out of or broadly relating to these Terms, the Application, billing disputes, or data handling will be exclusively and finally determined by strictly localized, binding arbitration rather than in courts of general jurisdiction.
                        </p>
                        <p>
                            <strong>10.2 Arbitration Procedure:</strong> The arbitration processing will be governed structurally by the Federal Arbitration Act ("FAA") and meticulously administered by the American Arbitration Association ("AAA") under its contemporary Commercial Arbitration Rules (including the optional procedures for large, multi-faceted claims). The neutral arbitrator, rather than a federal or state judge, possesses the exclusive authority to adjudicate all issues surrounding the enforceability and formation of this specific Arbitration provision.
                        </p>
                        <p>
                            <strong>10.3 Explicit Class Action Waiver:</strong> You and MeshVista reciprocally agree that any arbitration proceedings shall be conducted solely on an individualized factual basis and not in an intertwined class, consolidated, collective, or representative legal action. If for any judicial reason a claim logically proceeds in court rather than in arbitration, both parties unanimously waive their constitutional right to a jury trial proceeding.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">11. Governing Law, Venue, and Integration</h2>
                        <p>
                            <strong>11.1 Jurisdiction:</strong> This comprehensive Agreement, and the overarching relationship between you and MeshVista Inc., shall be governed entirely, interpreted, and systematically construed in direct accordance with the internal operational laws of the State of Delaware, United States of America. This applies regardless of the conflict of law provisions or your current geographical location. For any legal matters expressly excluded from binding arbitration (e.g., preliminary injunctive relief against IP theft), you irrevocably consent to the exclusive personal jurisdiction of the state and federal judicial courts localized in New Castle County, Delaware.
                        </p>
                        <p>
                            <strong>11.2 Modifications and Severability:</strong> MeshVista reserves the autocratic right to fundamentally modify, rewrite, or update these Terms dynamically at any given point in time. Material changes will be communicated via electronic mail or robust platform announcements thirty (30) days prior to execution. If any single provision of this comprehensive document is ruled legally invalid, void, or functionally unenforceable by a judicial mediator, that single provision will be logically severed and will not compromise the validity and binding enforceability of the remaining operational provisions.
                        </p>
                        <p>
                            <strong>11.3 Integration (Entire Agreement):</strong> This document directly supersedes any prior, contemporaneous, oral, or written understandings, memos, or electronic communications bridging you and MeshVista regarding the Service. These Terms constitute the entire overarching agreement governing our mutual relationship.
                        </p>
                    </section>

                    <p className="mt-16 text-slate-400 font-mono text-sm leading-loose pb-12 border-t border-slate-200/20 pt-8">
                        Document Hash: 9F0A3D2C-MV-2026<br />
                        For authorized legal correspondence, service of process, or complex queries regarding this binding construct, direct your communication channels to our General Counsel via <a href="/contact" className="text-violet-500 hover:text-violet-400">formally registered channels</a>.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
