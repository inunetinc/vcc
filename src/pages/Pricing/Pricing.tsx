import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './Pricing.module.css';

type Tab = 'institutions' | 'claimers' | 'recruiters';

const plans: Record<Tab, Array<{
  name: string; desc: string; price: string; period: string;
  features: string[]; cta: string; highlighted: boolean; ctaStyle: 'primary' | 'outline';
}>> = {
  institutions: [
    { name: 'Starter', desc: 'Perfect for small institutions getting started with verified credentials.', price: '$59', period: '/mo', features: ['Up to 100 credentials/month', 'Basic dashboard', 'Email support', 'QR code generation', 'PDF certificate export', 'Single admin user'], cta: 'Get Started', highlighted: false, ctaStyle: 'outline' },
    { name: 'Growth', desc: 'For growing institutions that need more power and control.', price: '$169', period: '/mo', features: ['Up to 500 credentials/month', 'Advanced dashboard & analytics', 'Priority email support', 'API access', 'Bulk issuance', 'Up to 5 admin users', 'Custom branding', 'Credential templates'], cta: 'Get Started', highlighted: true, ctaStyle: 'primary' },
    { name: 'Professional', desc: 'For large institutions with high-volume issuance needs.', price: '$429', period: '/mo', features: ['Up to 2,000 credentials/month', 'Full analytics suite', 'Phone & email support', 'Full API access', 'Bulk issuance & automation', 'Unlimited admin users', 'Custom branding', 'AI-powered workflows', 'Webhook integrations', 'Dedicated account manager'], cta: 'Get Started', highlighted: false, ctaStyle: 'outline' },
    { name: 'Enterprise', desc: 'Custom solutions for large-scale deployments.', price: 'Custom', period: '', features: ['Unlimited credentials', 'Custom SLA', 'Dedicated support team', 'Custom integrations', 'On-premise deployment option', 'White-label solution', 'Advanced security features', 'Training & onboarding'], cta: 'Contact Sales', highlighted: false, ctaStyle: 'outline' },
  ],
  claimers: [
    { name: 'Free', desc: 'Claim and share your credentials at no cost.', price: 'Free', period: '', features: ['Claim unlimited credentials', 'Share via link', 'Basic profile', 'QR code sharing'], cta: 'Get Asil', highlighted: false, ctaStyle: 'outline' },
    { name: 'Premium Monthly', desc: 'Enhanced features for career-focused professionals.', price: '$9.99', period: '/mo', features: ['Everything in Free', 'AI career tools', 'Enhanced talent profile', 'Priority verification', 'Advanced sharing options', 'Analytics on profile views'], cta: 'Upgrade to Premium', highlighted: true, ctaStyle: 'primary' },
    { name: 'Premium Annual', desc: 'Best value for long-term career growth.', price: 'Custom', period: '', features: ['Everything in Premium Monthly', 'Save 17% annually', 'Early access to new features'], cta: 'Upgrade to Premium', highlighted: false, ctaStyle: 'outline' },
    { name: 'Extra AI Pack', desc: 'Additional AI credits for power users.', price: '$4.99', period: '/mo', features: ['Additional AI queries', 'Advanced career recommendations', 'Resume optimization'], cta: 'Add AI Pack', highlighted: false, ctaStyle: 'outline' },
  ],
  recruiters: [
    { name: 'Free', desc: 'Browse verified talent at no cost.', price: 'Free', period: '', features: ['Search talent profiles', 'View verified credentials', 'Basic filters'], cta: 'Get Started', highlighted: false, ctaStyle: 'outline' },
    { name: 'Professional', desc: 'For individual recruiters who need more reach.', price: '$29', period: '/mo', features: ['Everything in Free', 'Advanced search filters', 'Contact candidates', 'Job posting (up to 5)', 'Applicant tracking', 'Email support'], cta: 'Get Started', highlighted: true, ctaStyle: 'primary' },
    { name: 'Team', desc: 'For recruiting teams that need collaboration tools.', price: '$99', period: '/mo', features: ['Everything in Professional', 'Unlimited job postings', 'Team collaboration', 'Bulk outreach', 'Analytics & reporting', 'Priority support', 'API access'], cta: 'Get Started', highlighted: false, ctaStyle: 'outline' },
  ],
};

const faqs = [
  { q: 'How does blockchain verification work?', a: 'Every credential is anchored on the Base blockchain as an immutable record. When verified, we query the blockchain to confirm the credential exists, was issued by an accredited institution, and has not been revoked.' },
  { q: 'Can I switch plans later?', a: 'Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.' },
  { q: 'Is there a free trial for institutions?', a: 'Yes. All institution plans include a 14-day free trial with full access to features. No credit card required to start.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, bank transfers, and mobile money payments across supported African markets.' },
  { q: 'What happens to credentials if I cancel my subscription?', a: 'All credentials already issued remain valid and verifiable on the blockchain permanently. Cancellation only stops new issuance.' },
  { q: 'Do recipients need to pay to claim credentials?', a: 'No. Claiming and storing credentials via Asil is completely free for individuals.' },
  { q: 'How is verification free?', a: 'Basic verification is free for anyone. We charge institutions for issuance, not for verification — ensuring credentials can always be checked.' },
];

export default function Pricing() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<Tab>('institutions');
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentPlans = plans[activeTab];

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.headline}>{t('pricingPage.headline')}</h1>
          <p className={styles.subtitle}>{t('pricingPage.subtitle')}</p>

          <div className={styles.toggleRow}>
            <span className={`${styles.toggleLabel} ${!isAnnual ? styles.toggleActive : ''}`}>{t('pricingPage.monthly')}</span>
            <button className={styles.toggle} onClick={() => setIsAnnual(!isAnnual)}>
              <span className={`${styles.toggleKnob} ${isAnnual ? styles.toggleKnobRight : ''}`}></span>
            </button>
            <span className={`${styles.toggleLabel} ${isAnnual ? styles.toggleActive : ''}`}>{t('pricingPage.annual')}</span>
            <span className={styles.saveBadge}>{t('pricingPage.save')}</span>
          </div>

          <div className={styles.tabs}>
            {([
              { key: 'institutions' as Tab, label: t('pricingPage.institutions') },
              { key: 'claimers' as Tab, label: t('pricingPage.claimers') },
              { key: 'recruiters' as Tab, label: t('pricingPage.recruiters') },
            ]).map(tab => (
              <button
                key={tab.key}
                className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className={styles.cardsSection}>
        <div className={`container ${styles.cardsContainer}`}>
          <div className={styles.cardsGrid} style={{ gridTemplateColumns: `repeat(${currentPlans.length}, 1fr)` }}>
            {currentPlans.map((p, i) => (
              <div key={i} className={`${styles.card} ${p.highlighted ? styles.cardHighlighted : ''}`}>
                {p.highlighted && <span className={styles.badge}>{t('pricingPage.mostPopular')}</span>}
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
                <button className={p.ctaStyle === 'primary' ? styles.ctaPrimary : styles.ctaOutline}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={`container ${styles.faqContainer}`}>
          <h2 className={styles.faqHeadline}>{t('pricingPage.faqHeadline')}</h2>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className={styles.faqQuestion}>
                  <span>{f.q}</span>
                  <ChevronDown size={18} className={styles.faqChevron} />
                </div>
                <div className={styles.faqAnswer}><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
