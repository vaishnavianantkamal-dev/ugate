import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import SponsorsSection from '../components/sections/SponsorsSection';
import FeaturesGrid from '../components/sections/FeaturesGrid';
import PowerfulToolsSection from '../components/sections/PowerfulToolsSection';
import MobileAppsSection from '../components/sections/MobileAppsSection';
import PageWrapper from '../components/common/PageWrapper';

const Home = () => {
    return (
        <PageWrapper>
            <main>
                <HeroSection />
                <SponsorsSection />
                <FeaturesGrid />
                <PowerfulToolsSection />
                <MobileAppsSection />
            </main>
        </PageWrapper>
    );
};

export default Home;