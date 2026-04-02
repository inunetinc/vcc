import { ArrowRight } from 'lucide-react';
import styles from './RecruiterCTA.module.css';

export default function RecruiterCTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <button className={styles.primaryBtn}>Get Started Free <ArrowRight size={16} /></button>
      </div>
    </section>
  );
}
