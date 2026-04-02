import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './Learn.module.css';

const posts = [
  {
    tag: 'Credentials',
    title: 'Why verifiable credentials are replacing traditional transcripts',
    desc: 'Understand the shift from paper-based records to blockchain-verified digital credentials across African institutions.',
    readTime: '6 Min Read',
    featured: true,
  },
  {
    tag: 'Identity',
    title: 'How SmileID powers trusted identity verification across Africa',
    desc: 'A deep dive into biometric identity verification and how it anchors credential ownership.',
    readTime: '4 Min Read',
    featured: false,
  },
  {
    tag: 'Infrastructure',
    title: 'Building on Base: why we chose an L2 for credential issuance',
    desc: 'Our technical decision to use Base blockchain for permanent, low-cost credential records.',
    readTime: '5 Min Read',
    featured: false,
  },
  {
    tag: 'Regulation',
    title: 'Mapping NUC, GTEC, CUE & DHET accreditation data at scale',
    desc: 'How we pre-mapped thousands of accredited programmes across four regulatory systems.',
    readTime: '7 Min Read',
    featured: false,
  },
];

export default function Learn() {
  const { t } = useTranslation();
  const [motionActive, setMotionActive] = useState(false);
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

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section className={styles.section} id="learn" ref={sectionRef}>
      <div className={`container ${styles.container} ${motionActive ? styles.animateIn : ''}`}>

        <div className={styles.headerRow}>
          <div>
            <span className={styles.eyebrow}>{t('learn.eyebrow')}</span>
            <h2 className={styles.headline}>{t('learn.headline')}</h2>
          </div>
          <a href="/blog" className={styles.viewAll}>
            {t('learn.viewAll')} <ArrowRight size={16} />
          </a>
        </div>

        <div className={styles.grid}>

          {/* Featured Post */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <TrendingUp size={48} strokeWidth={1} />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.metaRow}>
                <span className={styles.tag}>{featured.tag}</span>
                <span className={styles.readTime}><Clock size={12} /> {featured.readTime}</span>
              </div>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <p className={styles.featuredDesc}>{featured.desc}</p>
              <a href="/blog" className={styles.readLink}>{t('learn.readArticle')} <ArrowRight size={14} /></a>
            </div>
          </div>

          {/* Stacked Posts */}
          <div className={styles.stackedPosts}>
            {rest.map((post, i) => (
              <a key={i} href="/blog" className={styles.postCard}>
                <div className={styles.postLeft}>
                  <div className={styles.metaRow}>
                    <span className={styles.tag}>{post.tag}</span>
                    <span className={styles.readTime}><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h4 className={styles.postTitle}>{post.title}</h4>
                  <p className={styles.postDesc}>{post.desc}</p>
                </div>
                <div className={styles.postArrow}>
                  <ArrowRight size={18} />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
