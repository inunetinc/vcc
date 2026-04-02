import { useState, useEffect, useRef } from 'react';
import { Files, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './TrustLayer.module.css';

function useCountUp(end: number, start: number = 0, duration: number = 2000) {
  const [count, setCount] = useState(start);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime: number | null = null;
        const _step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * (end - start) + start));
          if (progress < 1) window.requestAnimationFrame(_step);
        };
        window.requestAnimationFrame(_step);
        observer.disconnect();
      }
    });
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [end, start, duration]);

  return { count, nodeRef };
}

function CountryCard({ country, endCount, label, postfix = '' }: { country: string, endCount: number, label: string, postfix?: string }) {
  const { count, nodeRef } = useCountUp(endCount);
  return (
    <div className={styles.countryCard} ref={nodeRef}>
      <div className={styles.cardGlow}></div>
      <div className={styles.countryName}>{country}</div>
      <div className={styles.numberWrapper}>
        <span className={styles.numberCount}>{count}</span>
        {postfix && <span className={styles.numberPostfix}>{postfix}</span>}
      </div>
      <div className={styles.countryLabel}>{label}</div>
    </div>
  );
}

export default function TrustLayer() {
  const { t } = useTranslation();
  const [motionActive, setMotionActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setMotionActive(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.trustLayer} id="trust" ref={sectionRef}>
      <div className={`container ${styles.sectionContent} ${motionActive ? styles.animateIn : ''}`}>

        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>{t('trustLayer.eyebrow')}</div>
          <h2 className={styles.headline}>{t('trustLayer.headline')}</h2>
          <p className={styles.subheadline}>{t('trustLayer.subheadline')}</p>
          <div className={styles.expansionLine}>{t('trustLayer.expansion')}</div>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredIconContainer}>
              <Files size={32} color="#FE9A00" strokeWidth={1.5} />
            </div>
            <div className={styles.featuredContent}>
              <h3 className={styles.featuredTitle}>{t('trustLayer.featuredTitle')}</h3>
              <p className={styles.featuredBody}>{t('trustLayer.featuredBody')}</p>
            </div>
            <div className={styles.featuredBadge}>
              <ShieldCheck size={14} color="#00D4FF" />
              <span>{t('trustLayer.featuredBadge')}</span>
            </div>
          </div>

          <div className={styles.countryGrid}>
            <CountryCard country={t('trustLayer.nigeria')} endCount={309} label={t('trustLayer.nigeria.label')} />
            <CountryCard country={t('trustLayer.ghana')} endCount={100} postfix="+" label={t('trustLayer.ghana.label')} />
            <CountryCard country={t('trustLayer.kenya')} endCount={83} label={t('trustLayer.kenya.label')} />
            <CountryCard country={t('trustLayer.sa')} endCount={26} label={t('trustLayer.sa.label')} />
            <div className={styles.gridSubtext}>{t('trustLayer.gridSubtext')}</div>
          </div>
        </div>

        <div className={styles.footerBlock}>
          <div className={styles.proofLine}>{t('trustLayer.proof')}</div>
          <div className={styles.subFooterLine}>{t('trustLayer.subFooter')}</div>
        </div>

      </div>
    </section>
  );
}
