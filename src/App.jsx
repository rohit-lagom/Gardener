import React from "react";
import Hero from "./components/Hero/Hero";
import InfoBanner from "./components/InfoBanner/InfoBanner";
import Introduction from "./components/Introduction/Introduction";
import Benefits from "./components/Benefits/Benefits";
import Platform from "./components/Platform/Platform";
import OurServices from "./components/OurServices/OurServices";
import RecentWorks from "./components/RecentWorks/RecentWorks";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Blogs from "./components/Blogs/Blogs";
import CTA from "./components/CTA/CTA";
import QuoteFooter from "./components/Footer/QuoteFooter";
import Footer from "./components/Footer/Footer";
import Problem from "./components/Problem/Problem";
import Solution from "./components/Solution/Solution";
import PolicyFit from "./components/PolicyFit/PolicyFit";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import StakeholderWins from "./components/StakeHolders/StakeHolders";
import PilotMetrics from "./components/PilotMetrics/PilotMetrics";
import Roadmap from "./components/Roadmap/Roadmap";

const App = () => {
  return (
    <div>
      <Hero />
      <Problem />
      <Solution/>
      <PolicyFit/>
      <HowItWorks/>
      <StakeholderWins/>
      <PilotMetrics />
      {/* <Introduction /> */}
      {/* <InfoBanner /> */}
      {/* <OurServices /> */}
      <Platform />
      <Benefits />
      {/* <RecentWorks /> */}
      <Roadmap/>
      <Testimonials />
      {/* <FAQ /> */}
      <Blogs />
      <CTA />
      {/* <QuoteFooter /> */}
      <Footer />
    </div>
  );
};

export default App;
