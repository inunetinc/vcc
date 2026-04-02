import { ArrowRight } from 'lucide-react';
import styles from './InstitutionCTA.module.css';

export default function InstitutionCTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.headline}>Ready to issue tamper-proof credentials?</h2>
        <p className={styles.sub}>Register your institution in under 10 minutes. Start issuing in Test Mode immediately.</p>
        <div className={styles.btnRow}>
          <button className={styles.primaryBtn}>Start Registration <ArrowRight size={16} /></button>
        </div>
      </div>
    </section>
  );
}
