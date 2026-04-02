import styles from '../Privacy/Legal.module.css';

export default function Press() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Press</h1>
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container ${styles.body}`}>
          <div className={styles.comingSoon}>
            <h2 className={styles.comingSoonTitle}>Coming Soon</h2>
            <p className={styles.comingSoonDesc}>Press releases, media kits, and brand assets will be available here.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
