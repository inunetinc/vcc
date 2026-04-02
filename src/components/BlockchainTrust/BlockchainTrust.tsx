import { useState, useEffect, useRef } from 'react';
import { Lock, Globe, FileCheck, ShieldCheck, Fingerprint, Link2 } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './BlockchainTrust.module.css';

export default function BlockchainTrust() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const leftFeatures = [
    { icon: ShieldCheck, text: t('blockchain.f1') },
    { icon: Fingerprint, text: t('blockchain.f2') },
    { icon: Lock, text: t('blockchain.f3') },
    { icon: FileCheck, text: t('blockchain.f4') },
  ];

  const rightCards = [
    { icon: Globe, title: t('blockchain.c1.title'), desc: t('blockchain.c1.desc') },
    { icon: Link2, title: t('blockchain.c2.title'), desc: t('blockchain.c2.desc') },
    { icon: ShieldCheck, title: t('blockchain.c3.title'), desc: t('blockchain.c3.desc') },
    { icon: Fingerprint, title: t('blockchain.c4.title'), desc: t('blockchain.c4.desc') },
  ];

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container} ${visible ? styles.animateIn : ''}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('blockchain.eyebrow')}</span>
          <h2 className={styles.headline}>{t('blockchain.headline')}</h2>
          <p className={styles.sub}>{t('blockchain.sub')}</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.featureList}>
            {leftFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className={styles.featureItem}>
                  <div className={styles.featureIcon}><Icon size={18} strokeWidth={1.5} /></div>
                  <span>{f.text}</span>
                </div>
              );
            })}
          </div>
          <div className={styles.cardGrid}>
            {rightCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className={styles.card}>
                  <div className={styles.cardIcon}><Icon size={20} strokeWidth={1.5} /></div>
                  <h4 className={styles.cardTitle}>{c.title}</h4>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
