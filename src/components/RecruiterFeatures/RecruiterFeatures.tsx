import { useState, useEffect, useRef } from 'react';
import { Search, Users, BarChart3, Plug, FileSpreadsheet, ShieldCheck } from 'lucide-react';
import styles from './RecruiterFeatures.module.css';

const features = [
  { icon: Search, title: 'Single & Bulk Verification', desc: 'Verify one credential or upload a CSV of hundreds — results in seconds.' },
  { icon: Users, title: 'Team Collaboration', desc: 'Add team members with role-based access. Share verification results across your org.' },
  { icon: BarChart3, title: 'Verification Dashboard', desc: 'Track verification history, flagged credentials, and team activity in one place.' },
  { icon: Plug, title: 'ATS Integration', desc: 'Connect VChainCred to your applicant tracking system for automated checks.' },
  { icon: FileSpreadsheet, title: 'Export & Reporting', desc: 'Export verification reports as PDF or CSV for compliance and audit purposes.' },
  { icon: ShieldCheck, title: 'Fraud Alerts', desc: 'Get notified when a credential is flagged as revoked, expired, or invalid.' },
];

export default function RecruiterFeatures() {
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
          <span className={styles.eyebrow}>FEATURES</span>
          <h2 className={styles.headline}>Built for Professional Recruiters</h2>
          <p className={styles.sub}>Everything you need to verify candidates at scale.</p>
        </div>
        <div className={styles.grid}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrap}><Icon size={22} strokeWidth={1.5} /></div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
