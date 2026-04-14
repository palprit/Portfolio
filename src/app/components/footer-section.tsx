import { FileText, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { AlponaWatermark } from "./alpona-watermark";

export function FooterSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* CTA Card */}
        <div className="bg-[#C4603C] rounded-sm p-10 md:p-14 text-center relative overflow-hidden">
          {/* Subtle pattern */}
          <AlponaWatermark className="absolute -top-[250px] -right-[250px] w-[600px] h-[600px] text-[#FDF6F0] opacity-[0.05] pointer-events-none" />
          <AlponaWatermark className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] text-[#2D1810] opacity-[0.05] pointer-events-none" />

          <p
            className="font-['Tiro_Bangla'] text-[#FDF6F0]/60 mb-4 relative z-10"
            style={{ fontSize: "1rem" }}
          >
            যোগাযোগ করুন
          </p>

          <h2
            className="font-['Playfair_Display'] text-[#FDF6F0] mb-4 relative z-10"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", lineHeight: 1.3 }}
          >
            Looking for a designer who understands
            <br className="hidden md:block" /> both the user flow and the data model?
          </h2>

          <p
            className="font-['Inter'] text-[#FDF6F0]/70 max-w-xl mx-auto mb-10 relative z-10"
            style={{ fontSize: "0.93rem", lineHeight: 1.7 }}
          >
            Let's talk about
            what I can build for your team.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 relative z-50">
            <a
              href="https://drive.google.com/file/d/1h6VxbFrn2x8Oj9-OFPkLhARxvz8mFQ_U/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#FDF6F0] text-[#C4603C] px-8 py-3 rounded-sm hover:bg-[#F5E6D3] transition-colors w-full md:w-auto shadow-sm cursor-pointer pointer-events-auto"
              style={{ fontSize: "0.88rem", fontWeight: 500 }}
            >
              <FileText size={16} />
              Download Resume
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/pal--priti/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#FDF6F0]/30 text-[#FDF6F0] px-8 py-3 rounded-sm hover:bg-[#FDF6F0]/10 transition-colors w-full md:w-auto cursor-pointer pointer-events-auto"
              style={{ fontSize: "0.88rem", fontWeight: 500 }}
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:palpriti2005@gmail.com"
              className="flex items-center justify-center gap-2 border border-[#FDF6F0]/30 text-[#FDF6F0] px-8 py-3 rounded-sm hover:bg-[#FDF6F0]/10 transition-colors w-full md:w-auto cursor-pointer pointer-events-auto"
              style={{ fontSize: "0.88rem", fontWeight: 500 }}
            >
              <Mail size={16} />
              Email Me
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-12 pt-8 border-t border-[#2D1810]/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="font-['Tiro_Bangla'] text-[#C4603C]"
            style={{ fontSize: "1.2rem" }}
          >
            প্রীতি পাল
          </p>
          <p
            className="font-['Inter'] text-[#8B6F5E]"
            style={{ fontSize: "0.78rem" }}
          >
            Designed & built with terracotta dreams and bitter coffee. 2026.
          </p>
        </div>
      </div>
    </section>
  );
}