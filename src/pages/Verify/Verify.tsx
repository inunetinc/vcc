import { QrCode, Search } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './Verify.module.css';

export default function Verify() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.headline}>{t('verify.headline')} <span className={styles.accent}>{t('verify.headlineAccent')}</span></h1>
          <p className={styles.subtitle}>{t('verify.subtitle')}</p>

          <div className={styles.searchBar}>
            <div className={styles.searchInputWrap}>
              <Search size={20} className={styles.searchIcon} />
              <input type="text" className={styles.searchInput} placeholder={t('verify.placeholder')} />
            </div>
            <button className={styles.searchBtn}>{t('verify.button')}</button>
          </div>

          <div className={styles.orDivider}>
            <span className={styles.orLine}></span>
            <span className={styles.orText}>{t('verify.or')}</span>
            <span className={styles.orLine}></span>
          </div>

          <button className={styles.qrBtn}>
            <QrCode size={18} /> {t('verify.scanQr')}
          </button>
        </div>
      </section>
    </div>
  );
}
