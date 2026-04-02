import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './InstitutionCTA.module.css';

export default function InstitutionCTA() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.headline}>{t('instCta.headline')}</h2>
        <p className={styles.sub}>{t('instCta.sub')}</p>
        <div className={styles.btnRow}>
          <button className={styles.primaryBtn}>{t('instCta.cta')} <ArrowRight size={16} /></button>
        </div>
      </div>
    </section>
  );
}
