import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Clock, Search, Users, Zap } from 'lucide-react';
import styles from './RecruiterHero.module.css';

const stats = [
  { icon: Search, value: '<3 sec', label: 'Verification Time' },
  { icon: ShieldCheck, value: '99.9%', label: 'Accuracy Rate' },
  { icon: Users, value: '23', label: 'Countries Covered' },
  { icon: Zap, value: '0', label: 'Phone Calls Needed' },
];

export default function RecruiterHero() {
  const [active, setActive] = useState(false);
  useEffect(() => { setTimeout(() => setActive(true), 100); }, []);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.content} ${active ? styles.animateIn : ''}`}>
        <div className={styles.grid}>

          <div className={styles.textCol}>
            <span className={styles.eyebrow}>FOR RECRUITERS</span>
            <h1 className={styles.headline}>
              Find talent with<br />credentials you can<br />actually <span className={styles.accent}>trust.</span>
            </h1>
            <p className={styles.subtitle}>
              Verify candidates' academic and professional credentials instantly — no phone calls, no delays, no fraud risk. Built for recruiters who need certainty.
            </p>
            <div className={styles.btnRow}>
              <button className={styles.primaryBtn}>Start Verifying Free <ArrowRight size={16} /></button>
              <button className={styles.secondaryBtn}>See How It Works</button>
            </div>
            <div className={styles.trustRow}>
              <span className={styles.trustItem}><ShieldCheck size={14} /> Free tier available</span>
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
