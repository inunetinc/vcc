import { ArrowRight } from 'lucide-react';
import styles from './AsilCTA.module.css';

export default function AsilCTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.headline}>Claim your digital credentials today</h2>
        <p className={styles.sub}>It's free. It's permanent. It's yours.</p>
        <button className={styles.primaryBtn}>Get Asil Free <ArrowRight size={16} /></button>
      </div>
    </section>
  );
}
