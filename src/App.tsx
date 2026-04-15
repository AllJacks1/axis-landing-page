import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import DifferentiationSection from "./components/DifferentiationSection";
import FinalConversionSection from "./components/FinalConversionSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import OfferSection from "./components/OfferSection";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";
import SalesCTA from "./components/SalesCTA";
import ServicesSection from "./components/ServicesSection";
import SolutionSection from "./components/SolutionSection";

function App() {
  return (
    <>
      <NavigationBar />
      <div style={{ height: "80px" }} />{" "}
      {/* Spacer to prevent content from being hidden behind navbar */}
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SalesCTA />
      <ServicesSection />
      <OfferSection />
      <ProcessSection />
      <AboutSection />
      <DifferentiationSection />
      <FinalConversionSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
