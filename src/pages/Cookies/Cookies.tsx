import styles from '../Privacy/Legal.module.css';

export default function Cookies() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Cookie Policy</h1>
          <p className={styles.updated}>Last updated: March 1, 2026</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container ${styles.body}`}>

          <h2>1. What Are Cookies</h2>
          <p>Cookies are small text files placed on your device when you visit our website. They help us provide a better experience by remembering your preferences, understanding how you use our platform, and improving our Services.</p>

          <h2>2. Types of Cookies We Use</h2>
          <p><strong>Essential Cookies:</strong> Required for the platform to function. These include authentication tokens, session management, and security cookies. You cannot opt out of these.</p>
          <p><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website. We use these to improve performance and user experience. These cookies collect anonymized data.</p>
          <p><strong>Functional Cookies:</strong> Remember your preferences (language, region, display settings) to provide a personalized experience.</p>
          <p><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness. These are only placed with your consent.</p>

          <h2>3. Third-Party Cookies</h2>
          <p>We may use cookies from third-party services including:</p>
          <ul>
            <li><strong>Analytics providers</strong> — to measure website usage and performance</li>
            <li><strong>SmileID</strong> — for identity verification sessions</li>
            <li><strong>Payment processors</strong> — for secure payment handling</li>
          </ul>

          <h2>4. Managing Cookies</h2>
          <p>You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking essential cookies may prevent you from using certain features of the Services.</p>

          <h2>5. Cookie Duration</h2>
          <p><strong>Session Cookies:</strong> Deleted when you close your browser.</p>
          <p><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them. Our persistent cookies expire within 12 months.</p>

          <h2>6. Updates</h2>
          <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

          <h2>7. Contact</h2>
          <p>For questions about our use of cookies, contact us at <strong>privacy@vchaincred.com</strong>.</p>

        </div>
      </section>
    </div>
  );
}
