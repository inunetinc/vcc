import { useEffect, useState, useRef } from 'react';
import styles from './VerificationPipeline.module.css';
import { Shield, ShieldAlert, FileDigit } from 'lucide-react';

type ClaimStatus = 'incoming' | 'processing' | 'verified' | 'rejected';

interface Claim {
  id: number;
  status: ClaimStatus;
  keyTopOffset: number; // Random slight vertical offset for organic flow
}

export default function VerificationPipeline() {
  const [claims, setClaims] = useState<Claim[]>([]);
  const idCounter = useRef(0);

  useEffect(() => {
    // Spawner interval
    const spawnInterval = setInterval(() => {
      idCounter.current += 1;
      const newClaim: Claim = {
        id: idCounter.current,
        status: 'incoming',
        keyTopOffset: Math.floor(Math.random() * 20) - 10, // -10px to +10px
      };
      
      setClaims(prev => [...prev, newClaim]);

      // State transitions for the claim
      setTimeout(() => {
        setClaims(prev => 
          prev.map(c => c.id === newClaim.id ? { ...c, status: 'processing' } : c)
        );
        
        // Decide Fate
        const isRejected = Math.random() > 0.75; // 25% rejection rate
        
        setTimeout(() => {
           setClaims(prev => 
             prev.map(c => c.id === newClaim.id ? { ...c, status: isRejected ? 'rejected' : 'verified' } : c)
           );
           
           // Cleanup after animation
           setTimeout(() => {
             setClaims(prev => prev.filter(c => c.id !== newClaim.id));
           }, 2500); // Wait for the exit animation to complete

        }, 800); // Time spent processing inside node

      }, 2000); // 2 seconds to reach the center node

    }, 1800); // Spawn every 1.8 seconds

    return () => clearInterval(spawnInterval);
  }, []);

  return (
    <div className={styles.pipelineContainer}>
      {/* Structural Tubes */}
      <div className={styles.tubeLeft}>
        <div className={styles.flowLines}></div>
      </div>
      <div className={styles.tubeRight}>
        <div className={styles.flowLines}></div>
      </div>
      <div className={styles.tubeBottom}>
        <div className={styles.flowLinesVertical}></div>
      </div>

      {/* The Central Infrastructure Node */}
      <div className={styles.nodeWrapper}>
        <div className={styles.centralNode}>
          <div className={styles.nodeCore}>
            <Shield size={32} className={styles.shieldIcon} />
            <span className={styles.nodeText}>VChainCred Ledger</span>
          </div>
          <div className={styles.glassReflection}></div>
        </div>
      </div>

      {/* Flowing Claims Data */}
      <div className={styles.claimsLayer}>
        {claims.map((claim) => (
          <div 
            key={claim.id} 
            className={`${styles.claimCard} ${styles[`status_${claim.status}`]}`}
            style={{ marginTop: `${claim.keyTopOffset}px` }}
          >
            {claim.status === 'incoming' || claim.status === 'processing' ? (
              <FileDigit size={16} />
            ) : claim.status === 'verified' ? (
              <Shield size={16} />
            ) : (
              <ShieldAlert size={16} />
            )}
            
            <span className={styles.claimText}>
              {claim.status === 'incoming' && 'Raw Claim'}
              {claim.status === 'processing' && 'Validating...'}
              {claim.status === 'verified' && 'Verified'}
              {claim.status === 'rejected' && 'Failed'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
