import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Clock, Search, Users, Zap } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './RecruiterHero.module.css';

export default function RecruiterHero() {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  useEffect(() => { setTimeout(() => setActive(true), 100); }, []);

  const stats = [
    { icon: Search, value: t('recHero.stat1.value'), label: t('recHero.stat1.label') },
    { icon: ShieldCheck, value: t('recHero.stat2.value'), label: t('recHero.stat2.label') },
    { icon: Users, value: t('recHero.stat3.value'), label: t('recHero.stat3.label') },
    { icon: Zap, value: t('recHero.stat4.value'), label: t('recHero.stat4.label') },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.content} ${active ? styles.animateIn : ''}`}>
        <div className={styles.grid}>

          <div className={styles.textCol}>
            <span className={styles.eyebrow}>{t('recHero.eyebrow')}</span>
            <h1 className={styles.headline}>
              Find talent with<br />credentials you can<br />actually <span className={styles.accent}>{t('recHero.accent')}</span>
            </h1>
            <p className={styles.subtitle}>
              {t('recHero.subtitle')}
            </p>
            <div className={styles.btnRow}>
              <button className={styles.primaryBtn}>{t('recHero.cta1')} <ArrowRight size={16} /></button>
              <button className={styles.secondaryBtn}>{t('recHero.cta2')}</button>
            </div>
            <div className={styles.trustRow}>
              <span className={styles.trustItem}><ShieldCheck size={14} /> {t('recHero.trust1')}</span>
              <span className={styles.trustItem}><Clock size={14} /> {t('recHero.trust2')}</span>
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
