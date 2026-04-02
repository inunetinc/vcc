import styles from '../Privacy/Legal.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>About VChainCred</h1>
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container ${styles.body}`}>
          <div className={styles.comingSoon}>
            <h2 className={styles.comingSoonTitle}>Coming Soon</h2>
            <p className={styles.comingSoonDesc}>Learn more about our mission to build trusted credential infrastructure for Africa and beyond.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
