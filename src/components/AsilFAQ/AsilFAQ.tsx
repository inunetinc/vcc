import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './AsilFAQ.module.css';

const faqs = [
  { q: 'Is Asil really free?', a: 'Yes. Asil is completely free for individuals. You can claim, store, and share your verified credentials at no cost.' },
  { q: 'How is my identity verified?', a: 'We use SmileID biometric verification — a one-time face match and liveness check that confirms your identity across 200M+ verifications in Africa.' },
  { q: 'What happens if my institution hasn\'t joined VChainCred?', a: 'You can still create your Asil profile and verify your identity. When your institution joins and issues credentials, they\'ll automatically appear in your wallet.' },
  { q: 'Can I delete my data?', a: 'You control your data. You can remove credentials from your wallet, revoke shared access, and request data deletion at any time.' },
  { q: 'Is my data stored on the blockchain?', a: 'Only credential verification proofs are stored on-chain. Your personal data and biometric information are never stored on the blockchain.' },
];

export default function AsilFAQ() {
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
            <span className={styles.eyebrow}>FAQ</span>
            <h2 className={styles.headline}>Frequently Asked Questions</h2>
            <p className={styles.sub}>Everything you need to know about Asil.</p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <div key={i} className={`${styles.faqItem} ${openIdx === i ? styles.open : ''}`} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                <div className={styles.question}>
                  <span>{f.q}</span>
                  <ChevronDown size={18} className={styles.chevron} />
                </div>
                <div className={styles.answer}><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
