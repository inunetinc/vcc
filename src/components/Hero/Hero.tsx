import { useState, useEffect } from 'react';
import { Check, QrCode, ShieldCheck, ScanLine, Fingerprint, BadgeCheck, Globe, Database, Lock, ExternalLink } from 'lucide-react';
import styles from './Hero.module.css';
import { useTranslation } from '../../i18n';

export default function Hero() {
  const { t } = useTranslation();
  const [motionActive, setMotionActive] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => setMotionActive(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.heroSection} id="home">
      <div className={`container ${styles.heroContent} ${motionActive ? styles.animateIn : ''}`}>
        <div className={styles.grid}>
          {/* Left Narrative Column */}
          <div className={`${styles.textColumn}`}>
            {/* Glow behind "Forever." via CSS position absolute */}
            <div className={styles.headlineWrapper}>
              <div className={styles.foreverGlow}></div>
              <h1 className={styles.headline}>
                {t('hero.headline1')}<br />
                <span className={styles.foreverText}>{t('hero.headline2')}</span>
              </h1>
            </div>

            <p className={styles.subheadline}>
              {t('hero.subheadline')}
            </p>

            <div className={styles.trustGrid}>
              <div className={styles.trustItem}>
                <BadgeCheck size={16} className={styles.trustIcon} />
                <span>{t('hero.trust.accredited')}</span>
              </div>
              <div className={styles.trustItem}>
                <Globe size={16} className={styles.trustIcon} />
                <span>{t('hero.trust.decentralized')}</span>
              </div>
              <div className={styles.trustItem}>
                <Lock size={16} className={styles.trustIcon} />
                <span>{t('hero.trust.w3c')}</span>
              </div>
              <div className={styles.trustItem}>
                <Database size={16} className={styles.trustIcon} />
                <span>{t('hero.trust.regulatory')}</span>
              </div>
              <div className={styles.trustItem}>
                <ShieldCheck size={16} className={styles.trustIcon} />
                <span>{t('hero.trust.regulators')}</span>
              </div>
            </div>

            <div className={styles.actionGroup}>
              <button className={styles.primaryBtn}>
                {t('hero.cta.institutions')}
              </button>
              <button className={styles.secondaryBtn}>
                {t('hero.cta.verify')}
              </button>
            </div>

            <button
              className={styles.microCta}
              onClick={() => alert('Demo coming soon...')}
            >
              {t('hero.microCta')} <ExternalLink size={14} className={styles.microArrow} />
            </button>

            <a href="/asil" className={styles.asilHook}>
              {t('hero.asilHook')} <ExternalLink size={14} className={styles.hookArrow} />
            </a>
          </div>

          {/* Right Visual Column: Credential Card Stack */}
          <div className={styles.visualColumn}>
            <div className={styles.cardStack}>
              {/* Background Card 4 - BURNED */}
              <div className={`${styles.backgroundCard} ${styles.cardBurned}`}>
                <span className={`${styles.cardStatusTag} ${styles.statusBurned}`}>{t('hero.card.burned')}</span>
              </div>

              {/* Background Card 3 - INVALID */}
              <div className={`${styles.backgroundCard} ${styles.cardInvalid}`}>
                <span className={`${styles.cardStatusTag} ${styles.statusInvalid}`}>{t('hero.card.invalid')}</span>
              </div>

              {/* Background Card 2 - REVOKED */}
              <div className={`${styles.backgroundCard} ${styles.cardRevoked}`}>
                <span className={`${styles.cardStatusTag} ${styles.statusRevoked}`}>{t('hero.card.revoked')}</span>
              </div>

              {/* Background Card 1 - EXPIRED */}
              <div className={`${styles.backgroundCard} ${styles.cardExpired}`}>
                <span className={`${styles.cardStatusTag} ${styles.statusExpired}`}>{t('hero.card.expired')}</span>
              </div>

              {/* Active Card - Foreground */}
              <div className={styles.activeCard}>
                <div className={styles.cardTop}>
                  <span className={styles.cardLabel}>{t('hero.card.label')}</span>
                  <div className={styles.verifiedStatus}>
                    <Check size={14} strokeWidth={3} /> {t('hero.card.verified')}
                  </div>
                </div>

                <div className={styles.institutionGroup}>
                  <h3 className={styles.institutionName}>{t('hero.card.university')}</h3>
                  <div className={styles.verifiedBadge}>
                    <ShieldCheck size={14} strokeWidth={2.5} /> {t('hero.card.regVerified')}
                  </div>
                </div>

                <div className={styles.programGroup}>
                  <div className={styles.programDegree}>{t('hero.card.degree')}</div>
                  <div className={styles.programMajor}>{t('hero.card.major')}</div>
                </div>

                <div className={styles.statusLine}>
                  {t('hero.card.status')}
                </div>

                <div className={styles.cardBottom}>
                  <div className={styles.qrBlock}>
                    <QrCode size={48} strokeWidth={1.2} color="#ffffff" />
                  </div>
                  <div className={styles.rightIcons}>
                    <div className={styles.techIcon}>
                      <ScanLine size={22} />
                    </div>
                    <div className={styles.techIcon}>
                      <Fingerprint size={22} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroFooterText}>
          {t('hero.footer')}
        </div>
      </div>
    </section>
  );
}
