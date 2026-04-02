import styles from '../Privacy/Legal.module.css';

export default function Status() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Status Page</h1>
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container ${styles.body}`}>
          <div className={styles.comingSoon}>
            <h2 className={styles.comingSoonTitle}>Coming Soon</h2>
            <p className={styles.comingSoonDesc}>Real-time system status, uptime monitoring, and incident reports will be available here.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
