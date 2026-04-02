import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>

        {/* Top Row: Brand + Navigation */}
        <div className={styles.topRow}>

          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <p className={styles.brandStatement}>{t('footer.brand')}</p>
            <p className={styles.supportingLine}>{t('footer.supporting')}</p>
            <div className={styles.socials}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{t('footer.product')}</h4>
              <ul className={styles.linkList}>
                <li><Link to="/verify">{t('footer.verifyCredential')}</Link></li>
                <li><Link to="/institution">{t('footer.forInstitutions')}</Link></li>
                <li><Link to="/asil">{t('footer.asilIdentity')}</Link></li>
                <li><Link to="/pricing">{t('footer.pricing')}</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{t('footer.company')}</h4>
              <ul className={styles.linkList}>
                <li><Link to="/blog">{t('footer.blog')}</Link></li>
                <li><Link to="/careers">{t('footer.careers')}</Link></li>
                <li><Link to="/press">{t('footer.press')}</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{t('footer.developers')}</h4>
              <ul className={styles.linkList}>
                <li><Link to="/docs">{t('footer.apiDocs')}</Link></li>
                <li><Link to="/status">{t('footer.statusPage')}</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{t('footer.legal')}</h4>
              <ul className={styles.linkList}>
                <li><Link to="/terms">{t('footer.terms')}</Link></li>
                <li><Link to="/privacy">{t('footer.privacy')}</Link></li>
                <li><Link to="/cookies">{t('footer.cookies')}</Link></li>
                <li><Link to="/dpa">{t('footer.dpa')}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle: Trust Layer Bar */}
        <div className={styles.trustLayerBar}>
          <span>{t('footer.blockchain')}</span>
          <span>{t('footer.smileId')}</span>
        </div>

        {/* Bottom: Copyright */}
        <div className={styles.copyrightBar}>
          © {currentYear} {t('footer.copyright')}
        </div>

      </div>
    </footer>
  );
}
