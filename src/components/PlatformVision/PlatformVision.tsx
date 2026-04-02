import styles from './PlatformVision.module.css';
import sarahImage from '../../assets/sarah-chen.png';
import { ShieldCheck, Award, Users } from 'lucide-react';

export default function PlatformVision() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Visual Content: Image Column */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <img 
              src={sarahImage} 
              alt="Platform Innovator" 
              className={styles.profileImage}
            />
            
            {/* Floating Trust Badge */}
            <div className={styles.trustBadge}>
              <div className={styles.badgeIcon}>✓</div>
              <div className={styles.badgeText}>
                <strong>Platform Innovator</strong>
                <span>Professional Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Content: Text Column */}
        <div className={styles.contentColumn}>
          <div className={styles.categoryTag}>
            <ShieldCheck size={16} /> The New Trust Standard
          </div>
          
          <h2 className={styles.mainHeading}>
            The New Standard for Professional Trust
          </h2>
          
          <p className={styles.tagline}>
            Your Career, Permanently Verified.
          </p>
          
          <div className={styles.manifestoBody}>
            <p>
              Your hard-earned credentials are your most valuable assets. 
              VChainCred moves them out of siloed, fragile databases and onto the blockchain—giving 
              you <strong>permanent, independent ownership</strong> of your professional digital worth.
            </p>
            <p>
              Stop relying on outdated PDFs or institution-specific portals. With the Asil Wallet, 
              you are the sole custodian of your achievements.
            </p>
          </div>

          <div className={styles.divider} />

          <div className={styles.communityStats}>
            <div className={styles.statItem}>
              <Users size={20} className={styles.statIcon} />
              <div className={styles.statText}>
                <strong>500,000+</strong> Professionals
              </div>
            </div>
            <div className={styles.statItem}>
              <Award size={20} className={styles.statIcon} />
              <div className={styles.statText}>
                <strong>2,500+</strong> Institutions
              </div>
            </div>
          </div>

          <div className={styles.action}>
            <a href="/get-started" className={styles.btnPrimary}>Build your digital profile →</a>
          </div>
        </div>

      </div>
    </section>
  );
}
