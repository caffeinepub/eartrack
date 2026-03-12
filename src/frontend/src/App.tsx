import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppFeaturesSection from "./components/AppFeaturesSection";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Navbar from "./components/Navbar";
import TechSpecsSection from "./components/TechSpecsSection";
import WaitlistSection from "./components/WaitlistSection";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <TechSpecsSection />
          <AppFeaturesSection />
          <WaitlistSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
