import styles from '../Privacy/Legal.module.css';

export default function DPA() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Data Processor Agreement</h1>
          <p className={styles.updated}>Last updated: March 1, 2026</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container ${styles.body}`}>

          <h2>1. Scope and Purpose</h2>
          <p>This Data Processor Agreement ("DPA") forms part of the Terms of Service between VChainCred Technologies Ltd. ("Processor") and the institutional customer ("Controller") and governs the processing of personal data by the Processor on behalf of the Controller in connection with the VChainCred Services.</p>

          <h2>2. Definitions</h2>
          <p><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person, including student names, programme details, credential information, and contact details.</p>
          <p><strong>"Processing"</strong> means any operation performed on Personal Data, including collection, recording, storage, retrieval, use, disclosure, and deletion.</p>
          <p><strong>"Sub-processor"</strong> means any third party engaged by VChainCred to process Personal Data on behalf of the Controller.</p>

          <h2>3. Data Processing Obligations</h2>
          <p>VChainCred shall:</p>
          <ul>
            <li>Process Personal Data only on documented instructions from the Controller</li>
            <li>Ensure that persons authorized to process Personal Data are bound by confidentiality obligations</li>
            <li>Implement appropriate technical and organizational security measures</li>
            <li>Not engage a Sub-processor without prior written authorization from the Controller</li>
            <li>Assist the Controller in responding to data subject requests</li>
            <li>Delete or return all Personal Data upon termination of the agreement, except where retention is required by law or for blockchain records</li>
          </ul>

          <h2>4. Security Measures</h2>
          <p>VChainCred implements the following security measures:</p>
          <ul>
            <li>Encryption of data in transit (TLS 1.3) and at rest (AES-256)</li>
            <li>Role-based access controls with multi-factor authentication</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Incident detection and response procedures</li>
            <li>Secure development lifecycle practices</li>
            <li>Regular backup and disaster recovery procedures</li>
          </ul>

          <h2>5. Sub-processors</h2>
          <p>VChainCred currently uses the following Sub-processors:</p>
          <ul>
            <li><strong>SmileID</strong> — Identity verification (biometric processing)</li>
            <li><strong>Base / Coinbase</strong> — Blockchain infrastructure (credential anchoring)</li>
            <li><strong>Cloud hosting provider</strong> — Infrastructure and data storage</li>
          </ul>
          <p>The Controller will be notified of any changes to Sub-processors with at least 30 days' notice.</p>

          <h2>6. Data Breach Notification</h2>
          <p>VChainCred shall notify the Controller without undue delay (and in any event within 72 hours) after becoming aware of a personal data breach affecting the Controller's data. The notification shall include the nature of the breach, categories of data affected, estimated number of data subjects, and measures taken to address the breach.</p>

          <h2>7. Data Transfers</h2>
          <p>Where Personal Data is transferred outside the Controller's jurisdiction, VChainCred shall ensure appropriate safeguards are in place, including Standard Contractual Clauses or equivalent mechanisms as required by applicable law.</p>

          <h2>8. Audit Rights</h2>
          <p>The Controller has the right to audit VChainCred's compliance with this DPA. VChainCred shall make available all information necessary to demonstrate compliance and allow for audits conducted by the Controller or an independent auditor.</p>

          <h2>9. Blockchain Data</h2>
          <p>The parties acknowledge that credential verification proofs stored on the Base blockchain are permanent and immutable. These proofs consist of cryptographic hashes and do not contain Personal Data in readable form. This blockchain data is exempt from deletion requests.</p>

          <h2>10. Term and Termination</h2>
          <p>This DPA shall remain in effect for the duration of the Services agreement. Upon termination, VChainCred shall delete or return all Personal Data within 30 days, except where retention is required by law or for blockchain records.</p>

          <h2>11. Contact</h2>
          <p>For DPA-related inquiries, contact <strong>dpa@vchaincred.com</strong>.</p>

        </div>
      </section>
    </div>
  );
}
