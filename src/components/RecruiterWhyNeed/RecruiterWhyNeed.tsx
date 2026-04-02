import { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Clock, PhoneOff, ShieldAlert } from 'lucide-react';
import styles from './RecruiterWhyNeed.module.css';

const reasons = [
  { icon: AlertTriangle, title: 'Credential fraud is rising', desc: 'Fake degrees and fabricated certifications cost companies millions in bad hires every year.' },
  { icon: Clock, title: 'Manual verification is slow', desc: 'Traditional background checks take days or weeks — slowing your hiring pipeline.' },
  { icon: PhoneOff, title: 'Phone calls don\'t scale', desc: 'Calling institutions to verify credentials is unreliable, time-consuming, and impossible at volume.' },
  { icon: ShieldAlert, title: 'You carry the risk', desc: 'If a credential turns out to be fake, the recruiter and employer bear the consequences.' },
];

export default function RecruiterWhyNeed() {
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
          <span className={styles.eyebrow}>THE PROBLEM</span>
          <h2 className={styles.headline}>Why recruiters need this</h2>
          <p className={styles.sub}>The credential verification process is broken. VChainCred fixes it.</p>
        </div>
        <div className={styles.grid}>
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrap}><Icon size={22} strokeWidth={1.5} /></div>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardDesc}>{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
