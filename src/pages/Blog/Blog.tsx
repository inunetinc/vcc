import { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import styles from './Blog.module.css';

const posts = [
  {
    id: 1,
    tag: 'Credentials',
    title: 'Why verifiable credentials are replacing traditional transcripts',
    desc: 'Understand the shift from paper-based records to blockchain-verified digital credentials across African institutions. Learn how W3C Verifiable Credentials are transforming how we think about academic proof.',
    readTime: '6 Min Read',
    date: 'Mar 15, 2026',
    featured: true,
  },
  {
    id: 2,
    tag: 'Identity',
    title: 'How SmileID powers trusted identity verification across Africa',
    desc: 'A deep dive into biometric identity verification and how it anchors credential ownership for over 200 million users.',
    readTime: '4 Min Read',
    date: 'Mar 10, 2026',
    featured: false,
  },
  {
    id: 3,
    tag: 'Infrastructure',
    title: 'Building on Base: why we chose an L2 for credential issuance',
    desc: 'Our technical decision to use Base blockchain for permanent, low-cost credential records — and what it means for scalability.',
    readTime: '5 Min Read',
    date: 'Mar 5, 2026',
    featured: false,
  },
  {
    id: 4,
    tag: 'Regulation',
    title: 'Mapping NUC, GTEC, CUE & DHET accreditation data at scale',
    desc: 'How we pre-mapped thousands of accredited programmes across four regulatory systems to build a trusted verification layer.',
    readTime: '7 Min Read',
    date: 'Feb 28, 2026',
    featured: false,
  },
  {
    id: 5,
    tag: 'Product',
    title: 'Introducing Asil: your personal credential wallet',
    desc: 'Asil gives individuals ownership of their verified credentials. Claim, store, and share your academic and professional records from a single wallet.',
    readTime: '3 Min Read',
    date: 'Feb 20, 2026',
    featured: false,
  },
];

const tags = ['All', 'Credentials', 'Identity', 'Infrastructure', 'Regulation', 'Product'];

export default function Blog() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All' ? posts : posts.filter(p => p.tag === activeTag);
  const featured = posts[0];
  const rest = filtered.filter(p => !p.featured || activeTag !== 'All');

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>BLOG</span>
          <h1 className={styles.headline}>Learn</h1>
          <p className={styles.subtitle}>Insights on verifiable credentials, identity, blockchain infrastructure, and the future of trust.</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">

          {/* Tags filter */}
          <div className={styles.tagsRow}>
            {tags.map(tag => (
              <button
                key={tag}
                className={`${styles.tagBtn} ${activeTag === tag ? styles.tagActive : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {activeTag === 'All' && (
            <div className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <span className={styles.featuredTag}>{featured.tag}</span>
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.metaRow}>
                  <span className={styles.date}>{featured.date}</span>
                  <span className={styles.readTime}><Clock size={12} /> {featured.readTime}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredDesc}>{featured.desc}</p>
                <a href={`/blog/${featured.id}`} className={styles.readLink}>Read article <ArrowRight size={14} /></a>
              </div>
            </div>
          )}

          {/* Posts grid */}
          <div className={styles.postsGrid}>
            {(activeTag === 'All' ? posts.slice(1) : filtered).map(post => (
              <a key={post.id} href={`/blog/${post.id}`} className={styles.postCard}>
                <div className={styles.postImage}>
                  <span className={styles.postTag}>{post.tag}</span>
                </div>
                <div className={styles.postBody}>
                  <div className={styles.metaRow}>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.readTime}><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postDesc}>{post.desc}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
