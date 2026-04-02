import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code, Database, Globe, BookOpen } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './APIInfrastructure.module.css';

export default function APIInfrastructure() {
  const { t } = useTranslation();
  const [motionActive, setMotionActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const capabilities = [
    { icon: Code, title: t('api.card1.title'), desc: t('api.card1.desc') },
    { icon: Database, title: t('api.card2.title'), desc: t('api.card2.desc') },
    { icon: Globe, title: t('api.card3.title'), desc: t('api.card3.desc') },
    { icon: BookOpen, title: t('api.card4.title'), desc: t('api.card4.desc') },
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
    <section className={styles.section} id="api-infrastructure" ref={sectionRef}>
      <div className={`container ${styles.container} ${motionActive ? styles.animateIn : ''}`}>

        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>{t('api.eyebrow')}</span>
          <h2 className={styles.headline}>{t('api.headline')}</h2>
          <p className={styles.subheadline}>
            {t('api.subheadline')}
          </p>
        </div>

        <div className={styles.grid}>

          {/* Code Panel */}
          <div className={styles.codePanel}>
            <div className={styles.codeTopbar}>
              <div className={styles.macDots}>
                <span></span><span></span><span></span>
              </div>
              <span className={styles.codeTab}>POST /credentials/issue</span>
            </div>
            <div className={styles.codeBody}>
              <pre>
<code className={styles.codeLine}><span className={styles.keyword}>POST</span> <span className={styles.val}>/credentials/issue</span></code>
<code className={styles.codeLine}><span className={styles.punc}>{'{'}</span></code>
<code className={styles.codeLine}>  <span className={styles.str}>"institution_id"</span><span className={styles.punc}>:</span> <span className={styles.str}>"UNILAG"</span><span className={styles.punc}>,</span></code>
<code className={styles.codeLine}>  <span className={styles.str}>"recipient_id"</span><span className={styles.punc}>:</span> <span className={styles.str}>"asil_09213"</span><span className={styles.punc}>,</span></code>
<code className={styles.codeLine}>  <span className={styles.str}>"programme"</span><span className={styles.punc}>:</span> <span className={styles.str}>"B.Sc Computer Science"</span><span className={styles.punc}>,</span></code>
<code className={styles.codeLine}>  <span className={styles.str}>"status"</span><span className={styles.punc}>:</span> <span className={styles.str}>"verified"</span></code>
<code className={styles.codeLine}><span className={styles.punc}>{'}'}</span></code>
<code className={styles.codeLine}> </code>
<code className={styles.codeLine}><span className={styles.comment}>// Response</span></code>
<code className={styles.codeLine}><span className={styles.punc}>{'{'}</span></code>
<code className={styles.codeLine}>  <span className={styles.str}>"credential_id"</span><span className={styles.punc}>:</span> <span className={styles.str}>"vc_8f92a1"</span><span className={styles.punc}>,</span></code>
<code className={styles.codeLine}>  <span className={styles.str}>"verification_url"</span><span className={styles.punc}>:</span> <span className={styles.str}>"https://verify.vchaincred.com/vc_8f92a1"</span><span className={styles.punc}>,</span></code>
<code className={styles.codeLine}>  <span className={styles.str}>"status"</span><span className={styles.punc}>:</span> <span className={styles.str}>"issued"</span></code>
<code className={styles.codeLine}><span className={styles.punc}>{'}'}</span></code>
              </pre>
            </div>
            <div className={styles.codeFooter}>
              <span className={styles.statusDot}></span>
              <span>{t('api.uptime')}</span>
            </div>
          </div>

          {/* Capabilities */}
          <div className={styles.capGrid}>
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className={styles.capCard}>
                  <div className={styles.capIcon}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 className={styles.capTitle}>{cap.title}</h4>
                  <p className={styles.capDesc}>{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.ctaRow}>
          <button className={styles.primaryBtn}>
            {t('api.cta')} <ArrowRight size={16} />
          </button>
          <a href="/docs" className={styles.secondaryLink}>
            {t('api.docsLink')} <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
