import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, Award, ScrollText, BadgeCheck, FileText } from 'lucide-react';
import styles from './AsilPortfolio.module.css';

const items = [
  { icon: GraduationCap, title: 'Academic Degrees', desc: 'B.Sc, M.Sc, PhD and all tertiary qualifications.' },
  { icon: ScrollText, title: 'Diplomas', desc: 'Professional and post-secondary diplomas.' },
  { icon: Award, title: 'Certificates', desc: 'Training, course, and professional certificates.' },
  { icon: Briefcase, title: 'Employment Records', desc: 'Verified employment history and references.' },
  { icon: BadgeCheck, title: 'Professional Licenses', desc: 'Industry licenses and regulatory accreditations.' },
  { icon: FileText, title: 'Transcripts', desc: 'Detailed academic records and grade reports.' },
];

export default function AsilPortfolio() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container} ${visible ? styles.animateIn : ''}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>YOUR PORTFOLIO</span>
          <h2 className={styles.headline}>Adopt Your Own Verifiable Record Portfolio</h2>
          <p className={styles.sub}>Every credential type you need, in one verifiable wallet.</p>
        </div>
        <div className={styles.grid}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrap}><Icon size={24} strokeWidth={1.5} /></div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
