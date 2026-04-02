import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import styles from './InstitutionTestimonials.module.css';

const testimonials = [
  {
    stars: 5,
    quote: 'We onboarded our entire graduating class of 5,000 students in a single afternoon. The bulk upload feature is a game-changer.',
    name: 'Prof. Ade Olusola',
    title: 'Registrar',
    institution: 'University of Lagos',
  },
  {
    stars: 5,
    quote: 'The integration seamlessly ties into our student records system. Graduates automatically receive verified credentials upon graduation.',
    name: 'Dr. Grace Moleba',
    title: 'Deputy Registrar',
    institution: 'University of Cape Town',
  },
  {
    stars: 5,
    quote: 'This API integrates well with our custom management system. Credentials are issued automatically, saving months of administrative time.',
    name: 'Kofi Asante',
    title: 'IT Director',
    institution: 'University of Ghana',
  },
];

export default function InstitutionTestimonials() {
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
          <span className={styles.eyebrow}>TESTIMONIALS</span>
          <h2 className={styles.headline}>Trusted by Institutions Across Africa</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} fill="#FE9A00" color="#FE9A00" />
                ))}
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <span className={styles.authorName}>{t.name}</span>
                <span className={styles.authorTitle}>{t.title}, {t.institution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
