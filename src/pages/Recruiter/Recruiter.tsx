import RecruiterHero from '../../components/RecruiterHero/RecruiterHero';
import RecruiterWhyNeed from '../../components/RecruiterWhyNeed/RecruiterWhyNeed';
import RecruiterHowItWorks from '../../components/RecruiterHowItWorks/RecruiterHowItWorks';
import RecruiterComparison from '../../components/RecruiterComparison/RecruiterComparison';
import RecruiterPricing from '../../components/RecruiterPricing/RecruiterPricing';
import RecruiterFeatures from '../../components/RecruiterFeatures/RecruiterFeatures';
import RecruiterFAQ from '../../components/RecruiterFAQ/RecruiterFAQ';
import RecruiterCTA from '../../components/RecruiterCTA/RecruiterCTA';

export default function Recruiter() {
  return (
    <>
      <RecruiterHero />
      <RecruiterWhyNeed />
      <RecruiterComparison />
      <RecruiterPricing />
      <RecruiterFeatures />
      <RecruiterFAQ />
    </>
  );
}
