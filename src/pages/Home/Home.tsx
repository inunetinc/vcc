import Hero from '../../components/Hero/Hero';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import TrustLayer from '../../components/TrustLayer/TrustLayer';
import IssuingInfrastructure from '../../components/IssuingInfrastructure/IssuingInfrastructure';
import TrustedIdentity from '../../components/TrustedIdentity/TrustedIdentity';
import APIInfrastructure from '../../components/APIInfrastructure/APIInfrastructure';
import GetStarted from '../../components/GetStarted/GetStarted';
import Learn from '../../components/Learn/Learn';

export default function Home() {
  return (
    <>
      <Hero />
      <hr />
      <HowItWorks />
      <hr />
      <TrustLayer />
      <IssuingInfrastructure />
      <TrustedIdentity />
      <APIInfrastructure />
      <GetStarted />
      <Learn />
    </>
  );
}
