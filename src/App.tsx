import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { HeroGeometric } from './components/ui/shape-landing-hero';
import { ReactLenis } from 'lenis/react';
import { Cursor } from './components/Cursor';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ReactLenis root>
          <div className="relative w-full text-slate-100 font-sans bg-brand-dark min-h-screen selection:bg-brand-red selection:text-white">
            <Cursor />
            <Navbar />

            {/* Main Content Router */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route
                path="/shape"
                element={
                  <HeroGeometric
                    badge={
                      <>
                        <span className="text-lg">🔥</span>
                        <span className="text-brand-red ml-1">A Digital</span>
                        <span className="text-white ml-1">Marketing Company</span>
                      </>
                    }
                    title1="We Build Brands"
                    title2={
                      <>
                        <span className="text-brand-red font-serif italic pr-4">Digital</span>
                        <span>Results.</span>
                      </>
                    }
                  />
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Projects />} />
            </Routes>

            <Footer />
          </div>
        </ReactLenis>
      </Router>
    </HelmetProvider>
  );
}

export default App;
