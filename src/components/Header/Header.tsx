import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Search, Globe, ChevronDown, Menu, X } from 'lucide-react';
import { useTranslation } from '../../i18n';
import type { Language } from '../../i18n';
import styles from './Header.module.css';

const langMap: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Turkce' },
  { code: 'fr', label: 'Francais' },
  { code: 'ar', label: 'العربية' },
];

export default function Header() {
  const { t, language, setLanguage } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentLangLabel = langMap.find(l => l.code === language)?.label ?? 'English';

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const threshold = scrolled ? 30 : 80;
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      {/* Utility Top Bar - Static */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarLeft}>
            {t('header.welcome')}
          </div>
          <div className={styles.topBarRight}>
            <span className={styles.topBarItem}><Phone size={14} /> +234 900 000 0000</span>
            <span className={styles.topBarItem}><Search size={14} /> {t('header.search')}</span>
            <div className={styles.langDropdown}>
              <span className={styles.topBarItem} onClick={() => setLangOpen(!langOpen)}>
                <Globe size={14} /> {currentLangLabel} <ChevronDown size={14} />
              </span>
              {langOpen && (
                <div className={styles.langMenu}>
                  {langMap.map(l => (
                    <span key={l.code} className={`${styles.langOption} ${language === l.code ? styles.langActive : ''}`} onClick={() => { setLanguage(l.code); setLangOpen(false); }}>
                      {l.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Fixed */}
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>

          {/* Left Pill: Logo + Nav Links + Hamburger */}
          <div className={styles.mainNavPill}>
            <div className={styles.logoWrapper}>
              <img
                src="/assets/VChainCred_Accent Icon.svg"
                alt="VChainCred Logo"
                className={styles.logoIcon}
              />
              <img
                src="/assets/s_logo.svg"
                alt="VChainCred"
                className={styles.logoText}
              />
            </div>
            <nav className={styles.navLinks}>
              <Link to="/" className={styles.navLink}>{t('header.home')}</Link>
              <Link to="/verify" className={styles.navLink}>{t('header.verify')}</Link>
              <Link to="/institution" className={styles.navLink}>{t('header.institution')}</Link>
              <Link to="/recruiter" className={styles.navLink}>{t('header.recruiter')}</Link>
              <Link to="/asil" className={styles.navLink}>{t('header.asil')}</Link>
              <Link to="/pricing" className={styles.navLink}>{t('header.pricing')}</Link>
              <Link to="/blog" className={styles.navLink}>{t('header.blog')}</Link>
            </nav>
            {/* Hamburger — visible only on mobile, inside pill for vertical centering */}
            <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Right Pill: Segmented Actions */}
          <div className={styles.actionPill}>
            <Link to="/verify" className={styles.verifyAction}>{t('header.verifyCredential')}</Link>
            <Link to="/pricing" className={styles.primaryAction}>{t('header.getStarted')}</Link>
          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <Link to="/" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{t('header.home')}</Link>
            <Link to="/verify" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{t('header.verify')}</Link>
            <Link to="/institution" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{t('header.institution')}</Link>
            <Link to="/recruiter" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{t('header.recruiter')}</Link>
            <Link to="/asil" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{t('header.asil')}</Link>
            <Link to="/pricing" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{t('header.pricing')}</Link>
            <Link to="/blog" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{t('header.blog')}</Link>
          </nav>
          <div className={styles.mobileCta}>
            <Link to="/verify" className={styles.mobileCtaBtn} onClick={() => setMobileOpen(false)}>{t('header.verifyCredential')}</Link>
            <Link to="/pricing" className={styles.mobileCtaPrimary} onClick={() => setMobileOpen(false)}>{t('header.getStarted')}</Link>
          </div>
        </div>
      )}
    </>
  );
}
