import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Zap, Settings, Code, Layers, Sparkles, Users, BarChart3, Scale } from 'lucide-react';
import styles from './InstitutionFeatures.module.css';

const features = [
  { icon: ShieldCheck, title: 'Tamper-Proof Credentials', desc: 'Every credential is cryptographically sealed on the blockchain — impossible to forge, alter, or duplicate.' },
  { icon: Zap, title: 'Instant Verification', desc: 'Anyone can verify a credential in under 3 seconds. No account, no phone calls, no delays.' },
  { icon: Settings, title: 'Configurable Workflows', desc: 'Set up multi-stage approval and verification workflows that match your institution\'s governance rules.' },
  { icon: Code, title: 'REST API & Webhooks', desc: 'Integrate VChainCred directly into your student information system, LMS, or HR platform.' },
  { icon: Layers, title: 'Bulk Issuance', desc: 'Issue thousands of credentials at once via CSV upload — perfect for graduation seasons.' },
  { icon: Sparkles, title: 'AI-Powered Assistance', desc: 'AI helps with workflow creation, bulk mapping, course corrections, and credential descriptions.' },
  { icon: Users, title: 'Team Management', desc: 'Invite faculty, registrars, admin staff with role-based access and audit trails.' },
  { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track issuance volumes, verification activity, credential status distribution, and engagement.' },
  { icon: Scale, title: 'Governance & Compliance', desc: 'Built-in governance for accredited programmes — every credential follows regulatory validation rules.' },
];

export default function InstitutionFeatures() {
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
          <span className={styles.eyebrow}>PLATFORM CAPABILITIES</span>
          <h2 className={styles.headline}>Everything You Need to Issue Trusted Credentials</h2>
          <p className={styles.sub}>A complete platform for credential issuance, management, and verification.</p>
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
