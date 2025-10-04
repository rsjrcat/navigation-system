import CTASection from "./components/CTASection";
import FeatureSection from "./components/FeatureSection";
import GlobalPresence from "./components/GlobalPresence";
import HeroSection from "./components/HeroSection";
import PortfolioListSection from "./components/PortfolioListSection";
import TechStack from "./components/TechStack";

function App() {

  return (
    <div className="bg-black">
      <HeroSection />
      <FeatureSection />
      <PortfolioListSection />
      <CTASection />
      <TechStack />
      {/* <GlobalPresence /> */}
    </div>
  );
}

export default App;