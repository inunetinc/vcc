import { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Clock, PhoneOff, ShieldAlert } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './RecruiterWhyNeed.module.css';

export default function RecruiterWhyNeed() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const reasons = [
    { icon: AlertTriangle, title: t('recWhy.r1.title'), desc: t('recWhy.r1.desc') },
    { icon: Clock, title: t('recWhy.r2.title'), desc: t('recWhy.r2.desc') },
    { icon: PhoneOff, title: t('recWhy.r3.title'), desc: t('recWhy.r3.desc') },
    { icon: ShieldAlert, title: t('recWhy.r4.title'), desc: t('recWhy.r4.desc') },
  ];

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container} ${visible ? styles.animateIn : ''}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('recWhy.eyebrow')}</span>
          <h2 className={styles.headline}>{t('recWhy.headline')}</h2>
          <p className={styles.sub}>{t('recWhy.sub')}</p>
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
