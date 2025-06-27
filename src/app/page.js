import HeroSection from "./components/heroSection";
import MarketInsight from "./components/marketInsight";
import B2bMarketResearch from "./components/b2bMarketResearch";
import BlogSection from "./components/blogSection";
import Footer from "./components/footer";
import UniqueNeeds from "./components/uniqueNeeds";

export default function Home() {
  return (
    <div className="no-scrollbar">
      <HeroSection />
      <MarketInsight />
      <B2bMarketResearch />
      <UniqueNeeds />
      <BlogSection />
      <Footer />
    </div>
  );
}
