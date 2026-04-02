import { useState, useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './RecruiterComparison.module.css';

const rows = [
  { feature: 'Verification speed', old: 'Days to weeks', vchaincred: 'Under 3 seconds' },
  { feature: 'Phone calls required', old: 'Yes, often multiple', vchaincred: 'Zero' },
  { feature: 'Fraud detection', old: 'Manual, unreliable', vchaincred: 'Blockchain-verified' },
  { feature: 'Cost per verification', old: '$15–$50+', vchaincred: 'From $0.50' },
  { feature: 'Audit trail', old: 'None', vchaincred: 'Full cryptographic proof' },
  { feature: 'Available 24/7', old: 'No', vchaincred: 'Yes' },
  { feature: 'Covers African institutions', old: 'Limited', vchaincred: '23 countries pre-mapped' },
];

export default function RecruiterComparison() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container} ${visible ? styles.animateIn : ''}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('recComp.eyebrow')}</span>
          <h2 className={styles.headline}>{t('recComp.headline')}</h2>
        </div>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div className={styles.featureCol}>{t('recComp.feature')}</div>
            <div className={styles.oldCol}>{t('recComp.traditional')}</div>
            <div className={styles.newCol}>{t('recComp.vchaincred')}</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className={styles.tableRow}>
              <div className={styles.featureCol}>{r.feature}</div>
              <div className={`${styles.oldCol} ${styles.oldVal}`}><X size={14} /> {r.old}</div>
              <div className={`${styles.newCol} ${styles.newVal}`}><Check size={14} /> {r.vchaincred}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
