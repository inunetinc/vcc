import { useState, useEffect, useRef } from 'react';
import { Fingerprint, Camera, ShieldCheck, CheckCircle2 } from 'lucide-react';
import styles from './AsilSmileID.module.css';

const features = [
  { icon: Camera, title: 'Biometric Verification', desc: 'Face match and liveness detection to confirm you are who you say you are.' },
  { icon: Fingerprint, title: '200M+ Verifications', desc: 'SmileID has processed over 200 million identity verifications across Africa.' },
  { icon: ShieldCheck, title: 'One-time Process', desc: 'Verify once, use your identity across all credentials and institutions.' },
  { icon: CheckCircle2, title: 'Privacy-first', desc: 'Your biometric data is processed securely and never stored on-chain.' },
];

export default function AsilSmileID() {
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
          <span className={styles.eyebrow}>IDENTITY VERIFICATION</span>
          <h2 className={styles.headline}>Powered by SmileID Verification</h2>
          <p className={styles.sub}>Your identity is the anchor for all your credentials. SmileID ensures it's real, secure, and uniquely yours.</p>
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
