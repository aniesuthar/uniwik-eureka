import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AppShowcase from "./components/AppShowcase";
import ProblemSection from "./components/ProblemSection";
import SolutionFlow from "./components/SolutionFlow";
import HowItWorks from "./components/HowItWorks";
import CrossPlatformSection from "./components/CrossPlatformSection";
import CollectionsShowcase from "./components/CollectionsShowcase";
import VisionSection from "./components/VisionSection";
import WaitlistSection from "./components/WaitlistSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0084ff] selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AppShowcase />
        <ProblemSection />
        <SolutionFlow />
        <HowItWorks />
        <CrossPlatformSection />
        <CollectionsShowcase />
        <VisionSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
