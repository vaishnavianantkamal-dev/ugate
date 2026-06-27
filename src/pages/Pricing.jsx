// Pricing.jsx — Main page composer
import PricingHero from "../components/pricing-components/PricingHero";
import TrustedBy from "../components/pricing-components/TrustedBy";
import Features from "../components/pricing-components/Features";
import ROI from "../components/pricing-components/ROI";
import CostComparison from "../components/pricing-components/CostComparison";
import FAQSection from "../components/pricing-components/FAQSection";
import BottomCTA from "../components/pricing-components/BottomCTA";
import PageWrapper from "../components/common/PageWrapper";

const Pricing = ({ data = {} }) => {
    const {
        hero = {},
        trustedBy = {},
    } = data;

    return (
        <PageWrapper
            className="pricing-page"
            style={{
                background: "#000000",
                marginTop: "70px",
                minHeight: "100vh",
                fontFamily: "'DM Sans', sans-serif",
                color: "#ffffff",
                overflowX: "hidden"
            }}
        >
            <PricingHero data={hero} />
            
            {/* PricingCards section removed as per user request */}
            
            <Features />
            
            <ROI />
            
            <CostComparison />
            
            <TrustedBy data={trustedBy} />
            
            <FAQSection />
            
            <BottomCTA />
        </PageWrapper>
    );
};

export default Pricing;