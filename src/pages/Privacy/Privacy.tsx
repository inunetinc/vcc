import styles from './Legal.module.css';

export default function Privacy() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: March 1, 2026</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container ${styles.body}`}>

          <h2>1. Introduction</h2>
          <p>VChainCred Technologies Ltd. ("VChainCred", "we", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, website, APIs, and related services ("Services").</p>

          <h2>2. Information We Collect</h2>
          <p><strong>Personal Information:</strong> Name, email address, phone number, organization name, and role when you create an account or submit forms.</p>
          <p><strong>Identity Verification Data:</strong> When using Asil — Trusted Identity, biometric verification is processed by SmileID. VChainCred does not store biometric data. SmileID processes and retains this data under their own privacy policy.</p>
          <p><strong>Credential Data:</strong> Academic and professional credential information provided by issuing institutions, including institution name, programme, degree type, and issuance date.</p>
          <p><strong>Usage Data:</strong> IP address, browser type, device information, pages visited, and interactions with the Services.</p>
          <p><strong>Blockchain Data:</strong> Credential verification proofs are stored on the Base blockchain. These are cryptographic hashes and do not contain personal information in readable form.</p>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To provide, maintain, and improve the Services</li>
            <li>To process credential issuance and verification requests</li>
            <li>To verify your identity through SmileID integration</li>
            <li>To communicate with you about your account and the Services</li>
            <li>To detect, prevent, and address fraud, abuse, and security issues</li>
            <li>To comply with legal obligations and regulatory requirements</li>
            <li>To provide analytics and reporting to institutional customers</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li><strong>SmileID:</strong> For identity verification processing</li>
            <li><strong>Issuing Institutions:</strong> To facilitate credential issuance and management</li>
            <li><strong>Verifying Parties:</strong> Only credential verification status is shared — not personal data — when a verification query is made</li>
            <li><strong>Service Providers:</strong> Third-party services that assist in operating the platform (hosting, analytics, support)</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
          </ul>

          <h2>5. Blockchain and Data Permanence</h2>
          <p>Credential verification proofs anchored on the Base blockchain are permanent and cannot be deleted. These proofs are cryptographic hashes that do not contain personally identifiable information in readable form. The blockchain record confirms that a credential was issued by a specific institution at a specific time.</p>

          <h2>6. Data Retention</h2>
          <p>We retain personal information for as long as your account is active or as needed to provide Services. You may request deletion of your account data at any time. Credential records on the blockchain are permanent by design.</p>

          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access and receive a copy of your personal data</li>
            <li>Correct inaccurate personal data</li>
            <li>Request deletion of your personal data (excluding blockchain records)</li>
            <li>Object to or restrict processing of your personal data</li>
            <li>Data portability — receive your data in a structured format</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>8. Security</h2>
          <p>We implement industry-standard security measures including encryption in transit and at rest, access controls, regular security audits, and secure development practices. However, no method of transmission over the Internet is 100% secure.</p>

          <h2>9. International Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.</p>

          <h2>10. Children's Privacy</h2>
          <p>The Services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children.</p>

          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of material changes via email or through the Services.</p>

          <h2>12. Contact</h2>
          <p>For privacy-related inquiries, contact our Data Protection Officer at <strong>privacy@vchaincred.com</strong>.</p>

        </div>
      </section>
    </div>
  );
}
