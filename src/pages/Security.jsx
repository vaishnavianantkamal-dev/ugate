// Security.jsx — Main page composer
import SecurityHero from "../components/security-components/securityHero";
import SecurityFeatures from "../components/security-components/SecurityFeatures";
import GuardBenefits from "../components/security-components/GuardBenefits";
import WhyUGate from "../components/common/WhyUGate";
import PageWrapper from "../components/common/PageWrapper";

const Security = ({ data = {} }) => {
    console.log(data);
    const {
        hero = {},
        features = {},
        cta = {},
    } = data;

    return (
        <PageWrapper className="security-page" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", marginTop: "40px" }}>
            <SecurityHero data={hero} />

            <SecurityFeatures data={features} />
            <GuardBenefits />
            <WhyUGate />
        </PageWrapper>
    );
};

export default Security;