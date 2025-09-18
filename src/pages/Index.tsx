import { NavHeader } from "@/components/NavHeader";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { PartnersSection } from "@/components/PartnersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      <HeroSection />
      <MissionSection />
      <PartnersSection />
    </div>
  );
};

export default Index;
