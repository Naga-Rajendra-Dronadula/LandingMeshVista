import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Cuboid } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center justify-between rounded-full transition-all duration-300 ${isScrolled ? 'bg-white/5 backdrop-blur-md border border-white/10 shadow-lg px-6 py-3' : 'px-2 py-2'
                    }`}>
                    {/* Logo */}
                    <a href="/">
                        <div className="flex flex-shrink-0 items-center space-x-2">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
                                <Cuboid className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                MeshVista
                            </span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="/marketplace" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Marketplace</a>
                        <a href="/pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</a>
                        <a href="/help" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Help</a>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="/generate" className="text-sm font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 transition-colors px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                            Generate Now
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-slate-300 hover:text-white p-2 rounded-md"
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 shadow-2xl p-4 flex flex-col space-y-4"
                >
                    <a href="/marketplace" className="text-base font-medium text-slate-200 hover:text-white p-2 rounded-lg hover:bg-white/5">Marketplace</a>
                    <a href="/pricing" className="text-base font-medium text-slate-200 hover:text-white p-2 rounded-lg hover:bg-white/5">Pricing</a>
                    <a href="/help" className="text-base font-medium text-slate-200 hover:text-white p-2 rounded-lg hover:bg-white/5">Help</a>
                    <div className="h-px bg-white/10 my-2"></div>
                    <a href="/generate" className="text-base font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-3 text-center rounded-xl font-bold shadow-lg shadow-violet-500/20">Generate Now</a>
                </motion.div>
            )}
        </header>
    );
}
