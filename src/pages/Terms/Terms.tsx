import styles from '../Privacy/Legal.module.css';

export default function Terms() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.updated}>Last updated: March 1, 2026</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container ${styles.body}`}>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using VChainCred's platform, website, APIs, or any related services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Services. These Terms constitute a legally binding agreement between you and VChainCred Technologies Ltd. ("VChainCred", "we", "us", or "our").</p>

          <h2>2. Description of Services</h2>
          <p>VChainCred provides a blockchain-based credential verification infrastructure that enables:</p>
          <ul>
            <li>Issuance of verifiable digital credentials by accredited institutions</li>
            <li>Ownership and management of credentials by individuals through Asil — Trusted Identity</li>
            <li>Instant verification of credentials by employers, recruiters, and third parties</li>
            <li>API access for programmatic credential issuance and verification</li>
          </ul>
          <p>All credentials are anchored on the Base blockchain (Ethereum Layer 2) as W3C Verifiable Credentials.</p>

          <h2>3. User Accounts</h2>
          <p>To access certain features of the Services, you must create an account. You agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain the security of your account credentials</li>
            <li>Accept responsibility for all activities that occur under your account</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
          </ul>

          <h2>4. Institution Obligations</h2>
          <p>Institutions using VChainCred to issue credentials represent and warrant that:</p>
          <ul>
            <li>They are duly accredited by the relevant regulatory authority (NUC, GTEC, CUE, DHET/CHE, or equivalent)</li>
            <li>All credentials issued through the platform are accurate and reflect genuine academic or professional achievements</li>
            <li>They have the authority to issue such credentials on behalf of their institution</li>
            <li>They will comply with all applicable laws regarding credential issuance and data protection</li>
          </ul>

          <h2>5. Credential Ownership</h2>
          <p>Credentials issued through VChainCred are owned by the individual to whom they are issued ("Credential Holder"). The Credential Holder has the right to:</p>
          <ul>
            <li>Store credentials in their Asil digital wallet</li>
            <li>Share credentials with third parties at their discretion</li>
            <li>Revoke shared access at any time</li>
            <li>Export credential data in standard formats</li>
          </ul>
          <p>Issuing institutions retain the right to update credential status (e.g., revoke, expire) in accordance with their policies.</p>

          <h2>6. Verification Services</h2>
          <p>VChainCred provides credential verification services that query blockchain records. Verification results reflect the on-chain status of credentials at the time of query. VChainCred does not guarantee the accuracy of information provided by issuing institutions.</p>

          <h2>7. Fees and Payment</h2>
          <p>Certain Services are subject to fees as described on our Pricing page. By subscribing to a paid plan, you agree to pay all applicable fees. Fees are non-refundable except as required by law. We reserve the right to modify pricing with 30 days' written notice.</p>

          <h2>8. Prohibited Uses</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Issue fraudulent or misleading credentials</li>
            <li>Attempt to tamper with blockchain records</li>
            <li>Use the Services for any unlawful purpose</li>
            <li>Reverse engineer, decompile, or disassemble the Services</li>
            <li>Interfere with or disrupt the integrity of the Services</li>
            <li>Scrape, harvest, or collect data from the Services without authorization</li>
          </ul>

          <h2>9. Intellectual Property</h2>
          <p>All intellectual property rights in the Services, including software, designs, trademarks, and documentation, are owned by VChainCred. You are granted a limited, non-exclusive, non-transferable license to use the Services in accordance with these Terms.</p>

          <h2>10. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, VChainCred shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services. Our total liability shall not exceed the amount paid by you to VChainCred in the twelve (12) months preceding the claim.</p>

          <h2>11. Termination</h2>
          <p>We may terminate or suspend your access to the Services at any time, with or without cause, upon written notice. Upon termination, all credentials already issued remain valid and verifiable on the blockchain. You may terminate your account at any time by contacting us.</p>

          <h2>12. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts of Lagos, Nigeria.</p>

          <h2>13. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the Services. Your continued use of the Services after such notification constitutes acceptance of the modified Terms.</p>

          <h2>14. Contact</h2>
          <p>For questions about these Terms, contact us at <strong>legal@vchaincred.com</strong>.</p>

        </div>
      </section>
    </div>
  );
}
