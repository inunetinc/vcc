import { useState, useEffect, useRef } from 'react';
import { UserPlus, ShieldCheck, FileCheck, Zap } from 'lucide-react';
import styles from './InstitutionHowItWorks.module.css';

const steps = [
  { num: '01', icon: UserPlus, title: 'Register', desc: 'Create your institution account with your credentials details and documents.' },
  { num: '02', icon: ShieldCheck, title: 'Get Verified', desc: 'We validate your institution against regulatory databases.' },
  { num: '03', icon: FileCheck, title: 'Issue Credentials', desc: 'Start issuing blockchain-verified credentials to students.' },
  { num: '04', icon: Zap, title: 'Verify Instantly', desc: 'Employers verify credentials via the public verification portal.' },
];

export default function InstitutionHowItWorks() {
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
          <p className={styles.sub}>From registration to your first issued credential in under 30 minutes.</p>
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
