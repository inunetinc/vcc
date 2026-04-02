import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './RecruiterFAQ.module.css';

const faqs = [
  { q: 'What credentials can I verify?', a: 'You can verify any credential issued through VChainCred — degrees, diplomas, certificates, professional licenses, and employment records from accredited institutions across 23 countries.' },
  { q: 'How fast is verification?', a: 'Under 3 seconds. We query the Base blockchain directly for on-chain records — no manual lookup or phone calls needed.' },
  { q: 'Do I need the candidate\'s permission to verify?', a: 'No. Verification checks the public blockchain record. The credential holder retains ownership but the verification status is publicly queryable.' },
  { q: 'Can I integrate this into my ATS?', a: 'Yes. Our REST API and webhooks allow you to build verification directly into your applicant tracking system or HR platform.' },
  { q: 'What if a credential comes back as invalid?', a: 'You\'ll see the exact status — expired, revoked, invalid, or burned — along with the issuer details and blockchain transaction proof for your records.' },
  { q: 'Is there a free plan?', a: 'Yes. The free tier includes 5 verifications per month with basic results. No credit card required.' },
];

export default function RecruiterFAQ() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container} ${visible ? styles.animateIn : ''}`}>
        <div className={styles.layout}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>{t('recFaq.eyebrow')}</span>
            <h2 className={styles.headline}>{t('recFaq.headline')}</h2>
            <p className={styles.sub}>{t('recFaq.sub')}</p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <div key={i} className={`${styles.faqItem} ${openIdx === i ? styles.open : ''}`} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                <div className={styles.question}>
                  <span>{f.q}</span>
                  <ChevronDown size={18} className={styles.chevron} />
                </div>
                <div className={styles.answer}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
