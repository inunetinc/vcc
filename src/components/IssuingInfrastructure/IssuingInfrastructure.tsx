import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, ArrowRight, Layers, Activity, Network, Settings, BadgeCheck } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './IssuingInfrastructure.module.css';

export default function IssuingInfrastructure() {
  const { t } = useTranslation();
  const [motionActive, setMotionActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    { icon: Layers, title: t('issuing.card1.title'), description: t('issuing.card1.desc') },
    { icon: Activity, title: t('issuing.card2.title'), description: t('issuing.card2.desc') },
    { icon: Network, title: t('issuing.card3.title'), description: t('issuing.card3.desc') },
    { icon: Settings, title: t('issuing.card4.title'), description: t('issuing.card4.desc') },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setMotionActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="issuing-infrastructure" ref={sectionRef}>
      <div className={`container ${styles.container} ${motionActive ? styles.animateIn : ''}`}>

        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>{t('issuing.eyebrow')}</span>
          <h2 className={styles.headline}>{t('issuing.headline')}</h2>
          <p className={styles.subheadline}>{t('issuing.subheadline')}</p>
        </div>

        <div className={styles.cardGrid}>

          {/* Featured Card - Left */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredContent}>
              <h3 className={styles.featuredTitle}>{t('issuing.featured.title')}</h3>
              <p className={styles.featuredDesc}>{t('issuing.featured.desc')}</p>
            </div>
            <div className={styles.featuredVisual}>
              <div className={styles.visualIcon}>
                <ShieldCheck size={64} strokeWidth={1} />
              </div>
            </div>
            <div className={styles.featuredFooter}>
              <div className={styles.footerLeft}>
                <BadgeCheck size={16} />
                <span>{t('issuing.featured.footer')}</span>
              </div>
              <div className={styles.footerRight}>
                <span className={styles.tag}>{t('issuing.featured.tag')}</span>
                <span className={styles.footerMeta}>{t('issuing.featured.meta')}</span>
              </div>
            </div>
          </div>

          {/* Right Column - 2x2 Grid */}
          <div className={styles.gallery}>
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className={styles.galleryCard}>
                  <div className={styles.galleryIconWrap}>
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className={styles.galleryTitle}>{feature.title}</h4>
                  <p className={styles.galleryDesc}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Moat + CTA Row */}
        <div className={styles.moatRow}>
          <div className={styles.moatCard}>
            <div className={styles.moatIcon}>
              <BadgeCheck size={28} />
            </div>
            <div className={styles.moatContent}>
              <h3 className={styles.moatTitle}>{t('issuing.moat.title')}</h3>
              <p className={styles.moatDesc}>{t('issuing.moat.desc')}</p>
            </div>
          </div>
          <button className={styles.primaryBtn}>
            {t('issuing.cta')} <ArrowRight size={16} />
          </button>
        </div>

        {/* Trust Strip */}
        <div className={styles.trustStrip}>
          {t('issuing.trustStrip')}
        </div>

      </div>
    </section>
  );
}
