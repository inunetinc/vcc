import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Smartphone, CheckCircle2, Share2, Lock, QrCode } from 'lucide-react';
import styles from './AsilHero.module.css';

export default function AsilHero() {
  const [active, setActive] = useState(false);
  useEffect(() => { setTimeout(() => setActive(true), 100); }, []);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.content} ${active ? styles.animateIn : ''}`}>
        <div className={styles.grid}>

          <div className={styles.textCol}>
            <span className={styles.eyebrow}>ASIL — TRUSTED IDENTITY</span>
            <h1 className={styles.headline}>
              Your credentials.<br />Your wallet.<br />Your <span className={styles.accent}>future.</span>
            </h1>
            <p className={styles.subtitle}>
              Own, manage, and share your verified academic and professional credentials from a single digital wallet. No institution controls your records — you do.
            </p>
            <div className={styles.btnRow}>
              <button className={styles.primaryBtn}>Get Asil Free <ArrowRight size={16} /></button>
              <button className={styles.secondaryBtn}>Learn More</button>
            </div>
            <div className={styles.trustRow}>
              <span className={styles.trustItem}><ShieldCheck size={14} /> Identity verified by SmileID</span>
              <span className={styles.trustItem}><Smartphone size={14} /> Available on web & mobile</span>
            </div>
          </div>

          {/* Profile Card Preview */}
          <div className={styles.cardCol}>
            <div className={styles.profileCard}>
              <div className={styles.profileHeader}>
                <div className={styles.avatar}>A</div>
                <div>
                  <h3 className={styles.profileName}>Amina Yusuf</h3>
                  <span className={styles.verifiedBadge}><ShieldCheck size={12} /> Verified Identity</span>
                </div>
              </div>
              <div className={styles.credList}>
                <div className={styles.credItem}>
                  <span>B.Sc. Computer Science</span>
                  <CheckCircle2 size={14} />
                </div>
                <div className={styles.credItem}>
                  <span>Data Analytics Certificate</span>
                  <CheckCircle2 size={14} />
                </div>
                <div className={styles.credItem}>
                  <span>Employment Record</span>
                  <CheckCircle2 size={14} />
                </div>
              </div>
              <div className={styles.actionRow}>
                <span className={styles.actionBtn}><Share2 size={12} /> Share</span>
                <span className={styles.actionBtn}><Lock size={12} /> Private</span>
                <span className={styles.actionBtn}><QrCode size={12} /> QR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
