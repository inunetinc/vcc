import { useState, useEffect, useRef } from 'react';
import { UserPlus, ShieldCheck, FileCheck, Zap } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './InstitutionHowItWorks.module.css';

export default function InstitutionHowItWorks() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const steps = [
    { num: '01', icon: UserPlus, title: t('instHow.step1'), desc: t('instHow.step1.desc') },
    { num: '02', icon: ShieldCheck, title: t('instHow.step2'), desc: t('instHow.step2.desc') },
    { num: '03', icon: FileCheck, title: t('instHow.step3'), desc: t('instHow.step3.desc') },
    { num: '04', icon: Zap, title: t('instHow.step4'), desc: t('instHow.step4.desc') },
  ];

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container} ${visible ? styles.animateIn : ''}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('instHow.eyebrow')}</span>
          <h2 className={styles.headline}>{t('instHow.headline')}</h2>
          <p className={styles.sub}>{t('instHow.sub')}</p>
        </div>
        <div className={styles.stepsGrid}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.stepNum}>{s.num}</span>
                  <div className={styles.iconWrap}><Icon size={20} strokeWidth={1.5} /></div>
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
