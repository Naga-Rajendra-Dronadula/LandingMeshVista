
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import HelpCenter from './pages/HelpCenter';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Security from './pages/Security';
import Marketplace from './pages/Marketplace';
import Pricing from './pages/Pricing';
import Generate from './pages/Generate';
import Showcase from './pages/Showcase';
import HelpArticle from './pages/HelpArticle';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-slate-50 overflow-x-hidden selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
        {/* Ambient animated background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-60"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-24 pb-12">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/help/:slug" element={<HelpArticle />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/security" element={<Security />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/generate" element={<Generate />} />
              <Route path="/showcase" element={<Showcase />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
