import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Smartphone, CheckCircle2, Share2, Lock, QrCode } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './AsilHero.module.css';

export default function AsilHero() {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  useEffect(() => { setTimeout(() => setActive(true), 100); }, []);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.content} ${active ? styles.animateIn : ''}`}>
        <div className={styles.grid}>

          <div className={styles.textCol}>
            <span className={styles.eyebrow}>{t('asilHero.eyebrow')}</span>
            <h1 className={styles.headline}>
              Your credentials.<br />Your wallet.<br />Your <span className={styles.accent}>{t('asilHero.accent')}</span>
            </h1>
            <p className={styles.subtitle}>
              {t('asilHero.subtitle')}
            </p>
            <div className={styles.btnRow}>
              <button className={styles.primaryBtn}>{t('asilHero.cta1')} <ArrowRight size={16} /></button>
              <button className={styles.secondaryBtn}>{t('asilHero.cta2')}</button>
            </div>
            <div className={styles.trustRow}>
              <span className={styles.trustItem}><ShieldCheck size={14} /> {t('asilHero.trust1')}</span>
              <span className={styles.trustItem}><Smartphone size={14} /> {t('asilHero.trust2')}</span>
            </div>
          </div>

          {/* Profile Card Preview */}
          <div className={styles.cardCol}>
            <div className={styles.profileCard}>
              <div className={styles.profileHeader}>
                <div className={styles.avatar}>A</div>
                <div>
                  <h3 className={styles.profileName}>{t('identity.profileName')}</h3>
                  <span className={styles.verifiedBadge}><ShieldCheck size={12} /> {t('asilHero.verifiedIdentity')}</span>
                </div>
              </div>
              <div className={styles.credList}>
                <div className={styles.credItem}>
                  <span>{t('identity.cred1')}</span>
                  <CheckCircle2 size={14} />
                </div>
                <div className={styles.credItem}>
                  <span>{t('identity.cred2')}</span>
                  <CheckCircle2 size={14} />
                </div>
                <div className={styles.credItem}>
                  <span>{t('identity.cred3')}</span>
                  <CheckCircle2 size={14} />
                </div>
              </div>
              <div className={styles.actionRow}>
                <span className={styles.actionBtn}><Share2 size={12} /> {t('identity.share')}</span>
                <span className={styles.actionBtn}><Lock size={12} /> {t('identity.private')}</span>
                <span className={styles.actionBtn}><QrCode size={12} /> {t('identity.qr')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
