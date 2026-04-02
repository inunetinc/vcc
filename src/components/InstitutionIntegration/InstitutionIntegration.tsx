import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './InstitutionIntegration.module.css';

export default function InstitutionIntegration() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const features = [
    t('instInteg.f1'),
    t('instInteg.f2'),
    t('instInteg.f3'),
    t('instInteg.f4'),
    t('instInteg.f5'),
    t('instInteg.f6'),
  ];

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container} ${visible ? styles.animateIn : ''}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('instInteg.eyebrow')}</span>
          <h2 className={styles.headline}>{t('instInteg.headline')}</h2>
          <p className={styles.sub}>{t('instInteg.sub')}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.featureList}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>{f}</span>
              </div>
            ))}
            <div className={styles.btnRow}>
              <button className={styles.primaryBtn}>{t('instInteg.cta1')} <ArrowRight size={16} /></button>
              <button className={styles.outlineBtn}>{t('instInteg.cta2')}</button>
            </div>
          </div>

          <div className={styles.codePanel}>
            <div className={styles.codeTopbar}>
              <div className={styles.macDots}><span></span><span></span><span></span></div>
              <span className={styles.codeTab}>POST /credentials/issue</span>
            </div>
            <div className={styles.codeBody}>
              <pre>
<code className={styles.codeLine}><span className={styles.keyword}>const</span> credential = <span className={styles.keyword}>await</span> vchaincred.<span className={styles.val}>credentials</span>.<span className={styles.val}>issue</span>({'{'}</code>
<code className={styles.codeLine}>  <span className={styles.str}>institution_id</span>: <span className={styles.str}>"UNILAG"</span>,</code>
<code className={styles.codeLine}>  <span className={styles.str}>recipient_id</span>: <span className={styles.str}>"asil_09213"</span>,</code>
<code className={styles.codeLine}>  <span className={styles.str}>programme</span>: <span className={styles.str}>"B.Sc Computer Science"</span>,</code>
<code className={styles.codeLine}>  <span className={styles.str}>type</span>: <span className={styles.str}>"degree"</span>,</code>
<code className={styles.codeLine}>  <span className={styles.str}>status</span>: <span className={styles.str}>"verified"</span></code>
<code className={styles.codeLine}>{'}'})</code>
<code className={styles.codeLine}> </code>
<code className={styles.codeLine}><span className={styles.comment}>// credential.id → "vc_8f92a1"</span></code>
<code className={styles.codeLine}><span className={styles.comment}>// credential.verify_url → "https://verify.vchaincred.com/vc_8f92a1"</span></code>
              </pre>
            </div>
            <div className={styles.codeFooter}>
              <span className={styles.statusDot}></span>
              <span>{t('instInteg.uptime')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
