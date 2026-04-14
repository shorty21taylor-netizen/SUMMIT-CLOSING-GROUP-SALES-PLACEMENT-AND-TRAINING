import Hero from "@/components/Hero";
import CredibilityBar from "@/components/CredibilityBar";
import ProblemSection from "@/components/ProblemSection";
import OfferOne from "@/components/OfferOne";
import OfferTwo from "@/components/OfferTwo";
import Guarantee from "@/components/Guarantee";
import ResultsWall from "@/components/ResultsWall";
import VideoTestimonials from "@/components/VideoTestimonials";
import FounderStory from "@/components/FounderStory";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-scgblack text-scgwhite min-h-screen overflow-x-hidden">
      <Hero />
      <CredibilityBar />
      <ProblemSection />
      <OfferOne />
      <OfferTwo />
      <Guarantee />
      <ResultsWall />
      <VideoTestimonials />
      <FounderStory />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
