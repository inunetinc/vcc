import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Building2, TerminalSquare, CheckCircle } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './GetStarted.module.css';

export default function GetStarted() {
  const { t } = useTranslation();
  const [motionActive, setMotionActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className={styles.section} id="get-started" ref={sectionRef}>
      <div className={`container ${styles.container} ${motionActive ? styles.animateIn : ''}`}>

        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>{t('getStarted.eyebrow')}</span>
          <h2 className={styles.headline}>{t('getStarted.headline')}</h2>
          <p className={styles.subheadline}>
            {t('getStarted.subheadline')}
          </p>
        </div>

        <div className={styles.grid}>

          {/* Left - Options */}
          <div className={styles.optionsColumn}>
            <div className={styles.optionCard}>
              <div className={styles.optionIcon}>
                <Building2 size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className={styles.optionTitle}>{t('getStarted.forInstitutions')}</h3>
                <p className={styles.optionDesc}>{t('getStarted.instDesc')}</p>
                <a href="/institution" className={styles.optionLink}>{t('getStarted.startOnboarding')} <ArrowRight size={14} /></a>
              </div>
            </div>

            <div className={styles.optionCard}>
              <div className={styles.optionIcon}>
                <TerminalSquare size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className={styles.optionTitle}>{t('getStarted.forDevelopers')}</h3>
                <p className={styles.optionDesc}>{t('getStarted.devDesc')}</p>
                <a href="/docs" className={styles.optionLink}>{t('getStarted.viewApiDocs')} <ArrowRight size={14} /></a>
              </div>
            </div>

            <p className={styles.trustLine}>
              {t('getStarted.trustLine')}
            </p>
          </div>

          {/* Right - Form */}
          <form className={styles.formCard} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>{t('getStarted.requestAccess')}</h3>

            <div className={styles.formRow}>
              <input type="text" className={styles.input} placeholder={t('getStarted.fullName')} required />
              <input type="email" className={styles.input} placeholder={t('getStarted.workEmail')} required />
            </div>
            <div className={styles.formRow}>
              <input type="text" className={styles.input} placeholder={t('getStarted.organization')} required />
              <select className={styles.input} required defaultValue="">
                <option value="" disabled hidden>{t('getStarted.selectRole')}</option>
                <option value="Institution">{t('getStarted.roleInstitution')}</option>
                <option value="Employer">{t('getStarted.roleEmployer')}</option>
                <option value="Developer">{t('getStarted.roleDeveloper')}</option>
                <option value="Other">{t('getStarted.roleOther')}</option>
              </select>
            </div>
            <textarea className={styles.textarea} placeholder={t('getStarted.useCase')} rows={4}></textarea>

            <button
              type="submit"
              className={`${styles.submitBtn} ${isSuccess ? styles.submitSuccess : ''}`}
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? t('getStarted.submitting') : isSuccess ? (
                <>{t('getStarted.success')} <CheckCircle size={16} /></>
              ) : (
                <>{t('getStarted.startOnboarding')} <ArrowRight size={16} /></>
              )}
            </button>

            <p className={styles.microTrust}>
              {t('getStarted.microTrust')}
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}
