import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LoadingScreen } from "./components/loading-screen";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { CaseStudySection } from "./components/case-study-section";
import { AboutSection } from "./components/about-section";
import { PhotographySection } from "./components/photography-section";
import { SkillsSection } from "./components/skills-section";
import { FooterSection } from "./components/footer-section";

export default function App() {
  const [loading, setLoading] = useState(() => {
    // Only show the loading screen once per session
    if (sessionStorage.getItem("portfolio_visited")) return false;
    sessionStorage.setItem("portfolio_visited", "1");
    return true;
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen
            key="loading-screen"
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-[#FDF6F0] font-['Inter'] relative"
        >
          {/* Global Subtle Grain Texture */}
          <div
            className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          <Navbar />
          <HeroSection />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4A356]/20 to-transparent" />
          <CaseStudySection />
          <AboutSection />
          <PhotographySection />
          <SkillsSection />
          <FooterSection />
        </motion.div>
      )}
    </>
  );
}