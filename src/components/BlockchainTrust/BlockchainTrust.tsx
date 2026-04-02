import { useState, useEffect, useRef } from 'react';
import { Lock, Globe, FileCheck, ShieldCheck, Fingerprint, Link2 } from 'lucide-react';
import styles from './BlockchainTrust.module.css';

const leftFeatures = [
  { icon: ShieldCheck, text: 'Immutable Records — Every credential is permanently anchored on the Base blockchain.' },
  { icon: Fingerprint, text: 'Identity Verified — Recipient identity confirmed via SmileID biometric verification.' },
  { icon: Lock, text: 'Trust Score System — Credentials carry a trust score based on issuer, programme, and verification history.' },
  { icon: FileCheck, text: 'Full Audit Trail — Every action — issuance, revocation, transfer — is cryptographically verified.' },
];

const rightCards = [
  { icon: Globe, title: 'Base Blockchain', desc: 'Built on Ethereum L2 for low-cost, high-speed credential anchoring.' },
  { icon: Link2, title: 'W3C Verifiable Credentials', desc: 'Open standards-compliant, permanently interoperable across systems.' },
  { icon: ShieldCheck, title: 'Auditable by Design', desc: 'Every issuance and verification is recorded for regulatory compliance.' },
  { icon: Fingerprint, title: 'Cryptographic Proofs', desc: 'Tamper-evident signatures ensure credential integrity at all times.' },
];

export default function BlockchainTrust() {
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
          <span className={styles.eyebrow}>TRUST INFRASTRUCTURE</span>
          <h2 className={styles.headline}>Built on Trust. Secured by Blockchain.</h2>
          <p className={styles.sub}>Every credential is backed by an immutable on-chain record, verified identity, and cryptographic proof.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.featureList}>
            {leftFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className={styles.featureItem}>
                  <div className={styles.featureIcon}><Icon size={18} strokeWidth={1.5} /></div>
                  <span>{f.text}</span>
                </div>
              );
            })}
          </div>
          <div className={styles.cardGrid}>
            {rightCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className={styles.card}>
                  <div className={styles.cardIcon}><Icon size={20} strokeWidth={1.5} /></div>
                  <h4 className={styles.cardTitle}>{c.title}</h4>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
