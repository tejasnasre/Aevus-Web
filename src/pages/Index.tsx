import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ImpactSection from "@/components/ImpactSection";
import SolutionSection from "@/components/SolutionSection";
import AttendanceMethods from "@/components/AttendanceMethods";
import PersonalizedLearning from "@/components/PersonalizedLearning";
import FeaturesGrid from "@/components/FeaturesGrid";
import RoleBasedFeatures from "@/components/RoleBasedFeatures";
import StakeholdersSection from "@/components/StakeholdersSection";
import NEPAlignment from "@/components/NEPAlignment";
import DeviceShowcase from "@/components/DeviceShowcase";
import FAQSection from "@/components/FAQSection";
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ImpactSection />
        <SolutionSection />
        <AttendanceMethods />
        <PersonalizedLearning />
        <FeaturesGrid />
        <RoleBasedFeatures />
        <StakeholdersSection />
        <NEPAlignment />
        <DeviceShowcase />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
