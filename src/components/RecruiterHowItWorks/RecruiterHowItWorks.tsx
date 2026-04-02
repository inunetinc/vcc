import { useState, useEffect, useRef } from 'react';
import { Search, ShieldCheck, CheckCircle } from 'lucide-react';
import styles from './RecruiterHowItWorks.module.css';

const steps = [
  { num: '01', icon: Search, title: 'Enter Details', desc: 'Paste the credential ID, hash, or candidate reference number.' },
  { num: '02', icon: ShieldCheck, title: 'Instant Lookup', desc: 'We query the blockchain and match the credential to the verified issuer.' },
  { num: '03', icon: CheckCircle, title: 'Get Results', desc: 'See verified status, issuer details, and blockchain proof — in under 3 seconds.' },
];

export default function RecruiterHowItWorks() {
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
          <span className={styles.eyebrow}>HOW IT WORKS</span>
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
