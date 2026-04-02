import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import styles from './InstitutionIntegration.module.css';

const features = [
  'REST API for credential issuance, verification, management, and analytics',
  'Webhooks for real-time event notifications on issuance and verification',
  'Type-safe Node.js and TypeScript SDKs with comprehensive error handling',
  'OAuth 2.0 authentication with role-based access control',
  'Sandbox environment for testing before going live',
  'API rate limits designed for bulk issuance at scale',
];

export default function InstitutionIntegration() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container} ${visible ? styles.animateIn : ''}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>DEVELOPER FRIENDLY</span>
          <h2 className={styles.headline}>Integrate with Your Existing Systems</h2>
          <p className={styles.sub}>VChainCred provides a comprehensive REST API and webhook system so you can integrate credential issuance directly into your student information system, LMS, HR platform, or any custom application.</p>
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
              <button className={styles.primaryBtn}>View API Documentation <ArrowRight size={16} /></button>
              <button className={styles.outlineBtn}>Explore SDKs</button>
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
              <span>99.99% uptime — 2,847 requests today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
