import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './AsilCTA.module.css';

export default function AsilCTA() {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.headline}>{t('asilCta.headline')}</h2>
        <p className={styles.sub}>{t('asilCta.sub')}</p>
        <button className={styles.primaryBtn}>{t('asilCta.cta')} <ArrowRight size={16} /></button>
      </div>
    </section>
  );
}
