import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Zap, Settings, Code, Layers, Sparkles, Users, BarChart3, Scale } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './InstitutionFeatures.module.css';

export default function InstitutionFeatures() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const features = [
    { icon: ShieldCheck, title: t('instFeat.f1.title'), desc: t('instFeat.f1.desc') },
    { icon: Zap, title: t('instFeat.f2.title'), desc: t('instFeat.f2.desc') },
    { icon: Settings, title: t('instFeat.f3.title'), desc: t('instFeat.f3.desc') },
    { icon: Code, title: t('instFeat.f4.title'), desc: t('instFeat.f4.desc') },
    { icon: Layers, title: t('instFeat.f5.title'), desc: t('instFeat.f5.desc') },
    { icon: Sparkles, title: t('instFeat.f6.title'), desc: t('instFeat.f6.desc') },
    { icon: Users, title: t('instFeat.f7.title'), desc: t('instFeat.f7.desc') },
    { icon: BarChart3, title: t('instFeat.f8.title'), desc: t('instFeat.f8.desc') },
    { icon: Scale, title: t('instFeat.f9.title'), desc: t('instFeat.f9.desc') },
  ];

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container} ${visible ? styles.animateIn : ''}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('instFeat.eyebrow')}</span>
          <h2 className={styles.headline}>{t('instFeat.headline')}</h2>
          <p className={styles.sub}>{t('instFeat.sub')}</p>
        </div>
        <div className={styles.grid}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrap}><Icon size={22} strokeWidth={1.5} /></div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
