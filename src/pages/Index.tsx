import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Technology from "@/components/Technology";
import Whitepaper from "@/components/Whitepaper";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Technology />
      <Whitepaper />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
