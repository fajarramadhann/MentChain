import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Internal Components
import HomeSection from "./components/Home";
import Navbar from "./components/Navbar";
import WhatYouGetSection from "./components/WhatsWillYouGet";
import CommunitySection from "./components/Community";
import CTASection from "./components/CallToActionAI";
import Chat from "./components/AiAgent";
import AboutUsSection from "./components/AboutUs";

function App() {
  const { connected } = useWallet();

  return (
    <Router>
      <div className="bg-bgLight">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HomeSection />
              <WhatYouGetSection />
              <CTASection />
              <CommunitySection />
            </>
          } />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<AboutUsSection />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;