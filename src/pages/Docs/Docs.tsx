import styles from '../Privacy/Legal.module.css';

export default function Docs() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>API Documentation</h1>
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container ${styles.body}`}>
          <div className={styles.comingSoon}>
            <h2 className={styles.comingSoonTitle}>Coming Soon</h2>
            <p className={styles.comingSoonDesc}>Our comprehensive API documentation is being prepared. Check back soon for full reference guides, SDKs, and integration tutorials.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
