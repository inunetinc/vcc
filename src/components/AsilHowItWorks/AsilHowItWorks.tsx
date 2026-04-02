import { useState, useEffect, useRef } from 'react';
import { UserPlus, ShieldCheck, Share2 } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './AsilHowItWorks.module.css';

const steps = [
  { num: '01', icon: UserPlus, title: 'Verify Your Identity', desc: 'Complete a one-time biometric verification powered by SmileID.' },
  { num: '02', icon: ShieldCheck, title: 'Claim Your Credentials', desc: 'Your institution-issued credentials are linked to your verified identity.' },
  { num: '03', icon: Share2, title: 'Share Anywhere', desc: 'Share verified credentials with employers, institutions, or anyone — instantly.' },
];

export default function AsilHowItWorks() {
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
          <span className={styles.eyebrow}>{t('asilHow.eyebrow')}</span>
          <h2 className={styles.headline}>How It Works</h2>
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
