import { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import styles from './RecruiterPricing.module.css';

const plans = [
  { name: 'Free', desc: 'Try it out', price: '$0', period: '/mo', features: ['5 verifications/mo', 'Basic results', 'Email support'], highlighted: false },
  { name: 'Starter', desc: 'For individual recruiters', price: '$29', period: '/mo', features: ['50 verifications/mo', 'Detailed results', 'Priority support', 'CSV export'], highlighted: false },
  { name: 'Professional', desc: 'For recruiting teams', price: '$99', period: '/mo', features: ['500 verifications/mo', 'Team access', 'API access', 'ATS integration', 'Bulk verification'], highlighted: true },
  { name: 'Enterprise', desc: 'For staffing agencies', price: 'Custom', period: '', features: ['Unlimited verifications', 'Dedicated account manager', 'Custom integrations', 'SLA guarantee', 'White-label option'], highlighted: false },
];

export default function RecruiterPricing() {
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
          <span className={styles.eyebrow}>PRICING</span>
          <h2 className={styles.headline}>Simple, Transparent Pricing</h2>
          <p className={styles.sub}>Start free. Scale when you're ready.</p>
        </div>
        <div className={styles.grid}>
          {plans.map((p, i) => (
            <div key={i} className={`${styles.card} ${p.highlighted ? styles.highlighted : ''}`}>
              {p.highlighted && <span className={styles.badge}>Popular</span>}
              <h3 className={styles.planName}>{p.name}</h3>
              <p className={styles.planDesc}>{p.desc}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>{p.price}</span>
                {p.period && <span className={styles.period}>{p.period}</span>}
              </div>
              <ul className={styles.featureList}>
                {p.features.map((f, j) => (
                  <li key={j}><Check size={14} /> {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
