import { useState, useEffect, useRef } from 'react';
import { Building2, UserCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import styles from './HowItWorks.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n';

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      title: t('howItWorks.card1.title'),
      description: t('howItWorks.card1.body'),
      icon: Building2,
    },
    {
      id: 2,
      title: t('howItWorks.card2.title'),
      description: t('howItWorks.card2.body'),
      icon: UserCircle,
    },
    {
      id: 3,
      title: t('howItWorks.card3.title'),
      description: t('howItWorks.card3.body'),
      icon: ShieldCheck,
      isActive: true
    }
  ];
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
    <section className={styles.howItWorksSection} id="how-it-works" ref={sectionRef}>
      <div className={`container ${styles.container} ${motionActive ? styles.animateIn : ''}`}>
        
        {/* Header */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>{t('howItWorks.eyebrow')}</div>
          <h2 className={styles.headline}>{t('howItWorks.headline')}</h2>
          <p className={styles.subheadline}>
            {t('howItWorks.subheadline')}
          </p>
        </div>

        {/* Card Flow */}
        <div className={styles.flowContainer}>
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className={styles.flowWrapper}>
                <div className={`${styles.card} ${step.isActive ? styles.activeCard : ''}`}>
                  <div className={styles.iconContainer}>
                    <Icon size={28} strokeWidth={1.5} className={styles.icon} />
                    {step.isActive && <div className={styles.iconGlow}></div>}
                  </div>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardBody}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Reinforcement */}
        <div className={styles.trustReinforcement}>
          {t('howItWorks.trust')}
        </div>

        {/* Micro CTA */}
        <div className={styles.ctaWrapper}>
          <Link to="/verify" className={styles.microCta}>
            {t('howItWorks.cta')} <ArrowRight size={14} className={styles.arrowIcon} />
          </Link>
        </div>

      </div>
    </section>
  );
}
