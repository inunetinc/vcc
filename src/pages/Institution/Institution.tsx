import InstitutionHero from '../../components/InstitutionHero/InstitutionHero';
import InstitutionHowItWorks from '../../components/InstitutionHowItWorks/InstitutionHowItWorks';
import InstitutionFeatures from '../../components/InstitutionFeatures/InstitutionFeatures';
import CredentialTypes from '../../components/CredentialTypes/CredentialTypes';
import InstitutionIntegration from '../../components/InstitutionIntegration/InstitutionIntegration';
import InstitutionPricing from '../../components/InstitutionPricing/InstitutionPricing';
import BlockchainTrust from '../../components/BlockchainTrust/BlockchainTrust';
import InstitutionCTA from '../../components/InstitutionCTA/InstitutionCTA';

export default function Institution() {
  return (
    <>
      <InstitutionHero />
      <InstitutionHowItWorks />
      <InstitutionFeatures />
      <CredentialTypes />
      <InstitutionIntegration />
      <InstitutionPricing />
      <BlockchainTrust />
      <InstitutionCTA />
    </>
  );
}
