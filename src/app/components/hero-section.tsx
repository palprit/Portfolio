import { ArrowDown } from "lucide-react";
import { AlponaWatermark } from "./alpona-watermark";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background motifs */}
      <AlponaWatermark className="absolute -top-[300px] -right-[300px] w-[900px] h-[900px] text-[#D4A356] opacity-[0.05] pointer-events-none hidden md:block" />
      <AlponaWatermark className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] text-[#C4603C] opacity-[0.05] pointer-events-none hidden md:block" />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Bengali greeting */}
        <p
          className="font-['Tiro_Bangla'] text-[#D4A356] mb-4"
          style={{ fontSize: "1.1rem" }}
        >
          নমস্কার
        </p>

        {/* Name */}
        <h1
          className="font-['Playfair_Display'] text-[#2D1810] mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
        >
          Priti Pal
        </h1>

        {/* Positioning statement */}
        <p
          className="font-['Inter'] text-[#2D1810]/60 max-w-2xl mx-auto mb-8"
          style={{ fontSize: "1.15rem", lineHeight: 1.7 }}
        >
          UX Designer who speaks fluent SQL.{" "}
          <span className="text-[#C4603C]">
            I translate complex data models, unit economics, and business
            constraints
          </span>{" "}
          into interfaces that make hard decisions feel simple.
        </p>

        {/* Micro-credentials */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            "8 months @ Green Dukan",
            "B2B Sustainable Packaging",
            "Data Science Research",
          ].map((tag) => (
            <span
              key={tag}
              className="font-['Inter'] text-[#8B6F5E] border border-[#2D1810]/10 px-4 py-1.5 rounded-sm"
              style={{ fontSize: "0.8rem", letterSpacing: "0.04em" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <a
          href="#work"
          className="inline-flex flex-col items-center gap-2 text-[#C4603C]/60 hover:text-[#C4603C] transition-colors"
        >
          <span className="font-['Inter']" style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>
            VIEW MY WORK
          </span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>

      {/* Bottom border ornament */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4603C]/20 to-transparent" />
    </section>
  );
}