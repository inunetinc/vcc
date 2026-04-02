import { useState, useEffect, useRef } from 'react';
import { GraduationCap, ScrollText, Award, BadgeCheck } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './CredentialTypes.module.css';

export default function CredentialTypes() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const types = [
    { icon: GraduationCap, title: t('credTypes.degrees'), desc: t('credTypes.degrees.desc') },
    { icon: ScrollText, title: t('credTypes.diplomas'), desc: t('credTypes.diplomas.desc') },
    { icon: Award, title: t('credTypes.certificates'), desc: t('credTypes.certificates.desc') },
    { icon: BadgeCheck, title: t('credTypes.licenses'), desc: t('credTypes.licenses.desc') },
  ];

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container} ${visible ? styles.animateIn : ''}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('credTypes.eyebrow')}</span>
          <h2 className={styles.headline}>{t('credTypes.headline')}</h2>
          <p className={styles.sub}>{t('credTypes.sub')}</p>
        </div>
        <div className={styles.grid}>
          {types.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrap}><Icon size={28} strokeWidth={1.5} /></div>
                <h3 className={styles.cardTitle}>{t.title}</h3>
                <p className={styles.cardDesc}>{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
