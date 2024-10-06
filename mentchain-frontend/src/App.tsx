import { useWallet } from "@aptos-labs/wallet-adapter-react";

// Internal Components
import HomeSection from "./components/Home";
import Navbar from "./components/Navbar";
import WhatYouGetSection from "./components/WhatsWillYouGet";
import AboutUsSection from "./components/AboutUs";
import CommunitySection from "./components/Community";
import AiAgent from "./components/AiAgent";
import CTASection from "./components/CallToActionAI";

import LandingPage from "./pages/landingPage"

function App() {
   const { connected } = useWallet();

  return (
    <>
    <div className="bg-bgLight">
        {connected ? (
          <>
          <Navbar />
          <HomeSection />
          <WhatYouGetSection />
          <CTASection />
          {/* <AboutUsSection /> */}
          <CommunitySection />
          {/* <AiAgent /> */}
          </>
        ) : (
          <>
          {/* <h1>Not connected</h1> */}
          <Navbar />
          <HomeSection />
          <WhatYouGetSection />
          <CTASection />
          {/* <AboutUsSection /> */}
          <CommunitySection />
          </>
        )}
        {/* <LandingPage /> */}
        </div>
    </>
  )
}

export default App
