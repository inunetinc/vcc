import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Share2, Lock, QrCode, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './TrustedIdentity.module.css';

export default function TrustedIdentity() {
  const { t } = useTranslation();
  const [motionActive, setMotionActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setMotionActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="trusted-identity" ref={sectionRef}>
      <div className={`container ${styles.container} ${motionActive ? styles.animateIn : ''}`}>

        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>{t('identity.eyebrow')}</span>
          <h2 className={styles.headline}>
            {t('identity.headline')} <span className={styles.accentText}>{t('identity.headlineAccent')}</span>
          </h2>
          <p className={styles.subheadline}>
            {t('identity.subheadline')}
          </p>
        </div>

        <div className={styles.grid}>

          {/* Profile Card */}
          <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
              <div className={styles.avatar}>A</div>
              <div className={styles.profileInfo}>
                <h3 className={styles.profileName}>{t('identity.profileName')}</h3>
                <div className={styles.verifiedBadge}>
                  <ShieldCheck size={14} /> {t('identity.verifiedBadge')}
                </div>
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.credentialList}>
              <div className={styles.credentialItem}>
                <span>{t('identity.cred1')}</span>
                <CheckCircle2 size={16} />
              </div>
              <div className={styles.credentialItem}>
                <span>{t('identity.cred2')}</span>
                <CheckCircle2 size={16} />
              </div>
              <div className={styles.credentialItem}>
                <span>{t('identity.cred3')}</span>
                <CheckCircle2 size={16} />
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.actionRow}>
              <button className={styles.actionBtn}><Share2 size={14} /> {t('identity.share')}</button>
              <button className={styles.actionBtn}><Lock size={14} /> {t('identity.private')}</button>
              <button className={styles.actionBtn}><QrCode size={14} /> {t('identity.qr')}</button>
            </div>
          </div>

          {/* Content */}
          <div className={styles.contentColumn}>
            <p className={styles.coreValue}>
              {t('identity.coreValue')}
            </p>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <CheckCircle2 size={16} className={styles.featureIcon} />
                <span>{t('identity.feature1')}</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={16} className={styles.featureIcon} />
                <span>{t('identity.feature2')}</span>
              </div>
            </div>

            <button className={styles.primaryBtn}>
              {t('identity.cta')} <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
