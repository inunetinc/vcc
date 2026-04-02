import { useState, useEffect, useRef } from 'react';
import { KeyRound, Globe, ShieldCheck, Wallet } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './AsilWhyNeed.module.css';

const reasons = [
  { icon: KeyRound, title: 'You don\'t own your records', desc: 'Your credentials sit in institution databases. If they lose them or shut down, so do your records.' },
  { icon: Globe, title: 'Verification is broken', desc: 'Employers call institutions, wait days, and still can\'t be sure the credential is real.' },
  { icon: ShieldCheck, title: 'Fraud hurts everyone', desc: 'Fake credentials undermine trust in the entire system — for graduates, employers, and institutions.' },
  { icon: Wallet, title: 'No single source of truth', desc: 'Your achievements are scattered across emails, PDFs, and paper documents with no unified proof.' },
];

export default function AsilWhyNeed() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container} ${visible ? styles.animateIn : ''}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('asilWhy.eyebrow')}</span>
          <h2 className={styles.headline}>{t('asilWhy.headline')}</h2>
        </div>
        <div className={styles.grid}>
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrap}><Icon size={22} strokeWidth={1.5} /></div>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardDesc}>{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
