import { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './InstitutionPricing.module.css';

const plans = [
  {
    name: 'Starter',
    desc: 'For small institutions getting started',
    price: '$59',
    period: '/mo',
    features: ['Up to 500 credentials/mo', 'Basic analytics', 'Email support', '1 admin user'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    desc: 'For growing institutions and training providers',
    price: '$169',
    period: '/mo',
    features: ['Up to 2,500 credentials/mo', 'Advanced analytics', 'Priority support', '5 admin users', 'API access'],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Professional',
    desc: 'High-volume credential issuance',
    price: '$429',
    period: '/mo',
    features: ['Up to 10,000 credentials/mo', 'Custom branding', 'Dedicated support', 'Unlimited admins', 'Full API + webhooks', 'Bulk issuance'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Enterprise',
    desc: 'For large universities and consortiums',
    price: 'Custom',
    period: '',
    features: ['Unlimited credentials', 'SLA guarantee', 'Dedicated account manager', 'Custom integrations', 'On-premise option', 'Priority onboarding'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function InstitutionPricing() {
  const { t } = useTranslation();
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
          <span className={styles.eyebrow}>{t('instPricing.eyebrow')}</span>
          <h2 className={styles.headline}>{t('instPricing.headline')}</h2>
          <p className={styles.sub}>{t('instPricing.sub')}</p>
        </div>
        <div className={styles.grid}>
          {plans.map((p, i) => (
            <div key={i} className={`${styles.card} ${p.highlighted ? styles.highlighted : ''}`}>
              {p.highlighted && <span className={styles.badge}>{t('instPricing.popular')}</span>}
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
        <p className={styles.footer}>{t('instPricing.footer')} <ArrowRight size={14} /></p>
      </div>
    </section>
  );
}
