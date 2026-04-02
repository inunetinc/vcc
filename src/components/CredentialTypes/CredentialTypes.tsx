import { useState, useEffect, useRef } from 'react';
import { GraduationCap, ScrollText, Award, BadgeCheck } from 'lucide-react';
import styles from './CredentialTypes.module.css';

const types = [
  { icon: GraduationCap, title: 'Degrees', desc: 'Issue B.Sc, B.A, M.Sc, PhD degrees — all verifiable and tamper-proof.' },
  { icon: ScrollText, title: 'Diplomas', desc: 'Professional and post-secondary diplomas with regulatory alignment.' },
  { icon: Award, title: 'Certificates', desc: 'Course certificates, training certifications, and professional achievements.' },
  { icon: BadgeCheck, title: 'Professional Licenses', desc: 'Licenses, accreditations, and professional endorsements.' },
];

export default function CredentialTypes() {
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
          <span className={styles.eyebrow}>CREDENTIAL TYPES</span>
          <h2 className={styles.headline}>Credential Types You Can Issue</h2>
          <p className={styles.sub}>VChainCred supports every type of verifiable credential your institution needs.</p>
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
