import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Clock, FileCheck, Globe } from 'lucide-react';
import styles from './InstitutionHero.module.css';

const stats = [
  { icon: FileCheck, value: '10,000+', label: 'Credentials Issued' },
  { icon: ShieldCheck, value: '50+', label: 'Institutions Onboarded' },
  { icon: Clock, value: '<3 sec', label: 'Verification Time' },
  { icon: Globe, value: '23', label: 'Countries Reached' },
];

export default function InstitutionHero() {
  const [active, setActive] = useState(false);
  useEffect(() => { setTimeout(() => setActive(true), 100); }, []);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.content} ${active ? styles.animateIn : ''}`}>
        <div className={styles.grid}>

          <div className={styles.textCol}>
            <span className={styles.eyebrow}>FOR INSTITUTIONS</span>
            <h1 className={styles.headline}>
              Issue credentials that<br />cannot be <span className={styles.accent}>forged.</span>
            </h1>
            <p className={styles.subtitle}>
              VChainCred gives institutions the power to issue blockchain-verified credentials that employers can verify in seconds. No more phone calls, no more waiting, no more fraud.
            </p>
            <div className={styles.btnRow}>
              <button className={styles.primaryBtn}>Get Started Free <ArrowRight size={16} /></button>
              <button className={styles.secondaryBtn}>Request Invitation</button>
            </div>
            <div className={styles.trustRow}>
              <span className={styles.trustItem}><ShieldCheck size={14} /> 14-day free trial</span>
              <span className={styles.trustItem}><Clock size={14} /> No credit card required</span>
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
