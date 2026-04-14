import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Beyond the Screen", href: "#photography" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDF6F0]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          className="font-['Tiro_Bangla'] text-[#C4603C]"
          style={{ fontSize: "1.5rem" }}
        >
          প্রীতি
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-['Inter'] text-[#2D1810]/70 hover:text-[#C4603C] transition-colors"
              style={{ fontSize: "0.85rem", letterSpacing: "0.03em" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1h6VxbFrn2x8Oj9-OFPkLhARxvz8mFQ_U/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#C4603C] text-[#FDF6F0] px-5 py-2 rounded-sm hover:bg-[#A84E30] transition-colors"
            style={{ fontSize: "0.85rem" }}
          >
            <FileText size={14} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#2D1810]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FDF6F0] border-t border-[#2D1810]/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-['Inter'] text-[#2D1810]/80 hover:text-[#C4603C]"
              style={{ fontSize: "0.95rem" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1h6VxbFrn2x8Oj9-OFPkLhARxvz8mFQ_U/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#C4603C] text-[#FDF6F0] px-5 py-3 rounded-sm mt-2"
            style={{ fontSize: "0.9rem" }}
          >
            <FileText size={14} />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}