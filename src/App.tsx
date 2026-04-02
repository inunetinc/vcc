import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './i18n';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Verify from './pages/Verify/Verify';
import Institution from './pages/Institution/Institution';
import Recruiter from './pages/Recruiter/Recruiter';
import Asil from './pages/Asil/Asil';
import Pricing from './pages/Pricing/Pricing';
import Blog from './pages/Blog/Blog';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';
import Cookies from './pages/Cookies/Cookies';
import DPA from './pages/DPA/DPA';
import Docs from './pages/Docs/Docs';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import Press from './pages/Press/Press';
import Status from './pages/Status/Status';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/institution" element={<Institution />} />
            <Route path="/recruiter" element={<Recruiter />} />
            <Route path="/asil" element={<Asil />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/dpa" element={<DPA />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/status" element={<Status />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
