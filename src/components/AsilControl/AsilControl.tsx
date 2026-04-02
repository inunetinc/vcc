import { useState, useEffect, useRef } from 'react';
import { Eye, RotateCcw, ShieldCheck, Server, Download } from 'lucide-react';
import styles from './AsilControl.module.css';

const points = [
  { icon: Eye, title: 'Selective visibility', desc: 'You decide who sees your credentials and for how long.' },
  { icon: RotateCcw, title: 'Revoke anytime', desc: 'Revoke access to shared credentials at any time.' },
  { icon: ShieldCheck, title: 'Tamper-proof ownership', desc: 'No institution can delete or modify your records without your knowledge.' },
  { icon: Server, title: 'System-independent', desc: 'Your credentials persist even if the issuing institution changes systems.' },
  { icon: Download, title: 'Full data export', desc: 'Export your credential data in standard formats anytime.' },
];

export default function AsilControl() {
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
        <div className={styles.grid}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>DATA OWNERSHIP</span>
            <h2 className={styles.headline}>Control Your Data</h2>
            <p className={styles.sub}>Your credentials belong to you. Not your institution. Not us. You.</p>
          </div>
          <div className={styles.list}>
            {points.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className={styles.item}>
                  <div className={styles.itemIcon}><Icon size={18} strokeWidth={1.5} /></div>
                  <div>
                    <h4 className={styles.itemTitle}>{p.title}</h4>
                    <p className={styles.itemDesc}>{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
