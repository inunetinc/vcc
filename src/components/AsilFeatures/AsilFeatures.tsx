import { useState, useEffect, useRef } from 'react';
import { Wallet, Share2, Lock, QrCode, Bell, Globe } from 'lucide-react';
import styles from './AsilFeatures.module.css';

const features = [
  { icon: Wallet, title: 'Digital Credential Wallet', desc: 'All your verified credentials in one place — degrees, certificates, licenses, employment records.' },
  { icon: Share2, title: 'Selective Sharing', desc: 'Choose exactly which credentials to share and with whom. Revoke access anytime.' },
  { icon: Lock, title: 'Privacy by Default', desc: 'Your data is encrypted and only shared with your explicit consent. Zero-knowledge proofs where possible.' },
  { icon: QrCode, title: 'QR Code Sharing', desc: 'Generate a QR code for any credential. Employers scan and verify instantly.' },
  { icon: Bell, title: 'Real-time Notifications', desc: 'Get notified when a new credential is issued to you or when someone verifies your records.' },
  { icon: Globe, title: 'Globally Portable', desc: 'W3C Verifiable Credentials standard ensures your credentials work across borders and systems.' },
];

export default function AsilFeatures() {
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
          <h2 className={styles.headline}>Everything You Gain — Free</h2>
          <p className={styles.sub}>Asil is free for individuals. Your credentials, your control.</p>
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
