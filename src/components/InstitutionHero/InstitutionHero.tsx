import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Clock, FileCheck, Globe } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './InstitutionHero.module.css';

export default function InstitutionHero() {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  useEffect(() => { setTimeout(() => setActive(true), 100); }, []);

  const stats = [
    { icon: FileCheck, value: t('instHero.stat1.value'), label: t('instHero.stat1.label') },
    { icon: ShieldCheck, value: t('instHero.stat2.value'), label: t('instHero.stat2.label') },
    { icon: Clock, value: t('instHero.stat3.value'), label: t('instHero.stat3.label') },
    { icon: Globe, value: t('instHero.stat4.value'), label: t('instHero.stat4.label') },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.content} ${active ? styles.animateIn : ''}`}>
        <div className={styles.grid}>

          <div className={styles.textCol}>
            <span className={styles.eyebrow}>{t('instHero.eyebrow')}</span>
            <h1 className={styles.headline}>
              {t('instHero.headline')}<br />cannot be <span className={styles.accent}>{t('instHero.accent')}</span>
            </h1>
            <p className={styles.subtitle}>
              {t('instHero.subtitle')}
            </p>
            <div className={styles.btnRow}>
              <button className={styles.primaryBtn}>{t('instHero.cta1')} <ArrowRight size={16} /></button>
              <button className={styles.secondaryBtn}>{t('instHero.cta2')}</button>
            </div>
            <div className={styles.trustRow}>
              <span className={styles.trustItem}><ShieldCheck size={14} /> {t('instHero.trust1')}</span>
              <span className={styles.trustItem}><Clock size={14} /> {t('instHero.trust2')}</span>
            </div>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className={styles.statCard}>
                  <div className={styles.statIcon}><Icon size={20} strokeWidth={1.5} /></div>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
