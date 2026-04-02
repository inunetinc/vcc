import styles from '../Privacy/Legal.module.css';

export default function Careers() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Careers</h1>
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container ${styles.body}`}>
          <div className={styles.comingSoon}>
            <h2 className={styles.comingSoonTitle}>Coming Soon</h2>
            <p className={styles.comingSoonDesc}>We're building the future of trusted credentials. Open positions will be listed here.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
