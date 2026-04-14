import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  TrendingUp,
  Package,
  DollarSign,
  BarChart3,
  Layers,
  ArrowRight,
} from "lucide-react";

const IMG_PACKAGING =
  "https://images.unsplash.com/photo-1769610712905-efbfdb66a4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHBhY2thZ2luZyUyMGVjbyUyMGZyaWVuZGx5JTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc3NjA5NDQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_DASHBOARD =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBkYXRhJTIwYW5hbHl0aWNzJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwxfHx8fDE3NzYwOTQ0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const phases = [
  {
    num: "01",
    title: "The Business Problem",
    content:
      'Green Dukan is a consumer-facing platform dedicated to making eco-friendly living accessible. The primary challenge wasn\'t just "selling products" IT WAS BUILDING TRUST. In a market flooded with "greenwashing," users struggled to identify truly sustainable products versus clever marketing.',
    bullets: [
      "Curate a verified selection of eco-friendly goods.",
      'Bridge the "information gap" at the point of purchase through an interactive Eco-Scanner.',
    ],
  },
  {
    num: "02",
    title: 'The "Eco-Scanner" Innovation',
    content:
      "The core differentiator I designed was a mobile-integrated Eco-Scanner. This tool was built to solve the transparency problem:",
    bullets: [
      'Instant Verification: Users scan a barcode or label to see a product\'s "Eco-Score."',
      "Ingredient Transparency: Automatically highlights harmful chemicals or non-biodegradable components.",
      'Contextual Education: Instead of just saying a product is "bad," it suggests a verified sustainable alternative available on Green Dukan.',
    ],
  },
  {
    num: "03",
    title: "Constraints I Designed Around",
    content: "",
    bullets: [
      'Trust over Hype: The UI needed to feel clinical and credible, not just "earthy" and aesthetic. I used clean data visualizations for the Eco-Scanner results.',
      'Mobile-First Utility: Designed for "on-the-go" scanning. The scanner interface had to be lightning-fast with one-handed navigation for users physically shopping in stores.',
      "Information Hierarchy: Displaying complex certifications (FSC, Organic, Plastic-Free) in a way that a casual shopper could understand in under 3 seconds.",
    ],
  },
  {
    num: "04",
    title: "Data → Design Translation",
    content:
      'I translated raw sustainability data into a "Sustainability Scorecard."',
    bullets: [
      "The Summary Card: Surfaces the three things users care about most: Recyclability, Carbon Footprint, and Ethical Sourcing.",
      "Progressive Disclosure: Users can tap into any metric to see the specific certifications or data points backing up the score, reducing cognitive load while maintaining total transparency.",
    ],
    accent:
      "The website wasn't just a shop; it was a tool. By using the Eco-Scanner as a hook, we drove user acquisition. When a user scans a non-sustainable product elsewhere, the app provides a direct link to purchase a greener alternative on Green Dukan, turning a moment of doubt into a conversion.",
  },
  {
    num: "05",
    title: "Measurable Impact",
    content: "",
    metrics: [
      { label: "Comparison completion rate", value: "+42%" },
      { label: "Time to first inquiry", value: "-35%" },
      { label: "Cart abandonment reduction", value: "22%" },
      { label: "Repeat B2B orders", value: "+28%" },
    ],
  },
];

export function CaseStudySection() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <p
          className="font-['Inter'] text-[#C4603C] mb-3"
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
          }}
        >
          FEATURED CASE STUDY
        </p>

        <h2
          className="font-['Playfair_Display'] text-[#2D1810] mb-2"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            lineHeight: 1.2,
          }}
        >
          Green Dukan
        </h2>
        <p
          className="font-['Inter'] text-[#8B6F5E] mb-10"
          style={{ fontSize: "1rem" }}
        >
          B2B Sustainable Packaging Platform &middot; UI/UX
          Intern &middot; 8 Months
        </p>

        {/* Hero images */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          <div className="relative overflow-hidden rounded-sm bg-[#F5E6D3] aspect-[4/3]">
            <ImageWithFallback
              src={IMG_PACKAGING}
              alt="Sustainable packaging materials"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2D1810]/60 to-transparent p-4">
              <span
                className="font-['Inter'] text-[#FDF6F0]"
                style={{ fontSize: "0.75rem" }}
              >
                Eco-Friendly Website
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-sm bg-[#F5E6D3] aspect-[4/3]">
            <ImageWithFallback
              src={IMG_DASHBOARD}
              alt="Analytics dashboard interface"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2D1810]/60 to-transparent p-4">
              <span
                className="font-['Inter'] text-[#FDF6F0]"
                style={{ fontSize: "0.75rem" }}
              >
                Cost-projection & comparison engine
              </span>
            </div>
          </div>
        </div>

        {/* Role tags */}
        <div className="flex flex-wrap gap-3 mb-14">
          {[
            {
              icon: <Layers size={14} />,
              text: "Information Architecture",
            },
            {
              icon: <DollarSign size={14} />,
              text: "Unit Economics UI",
            },
            {
              icon: <BarChart3 size={14} />,
              text: "Data Visualization",
            },
            {
              icon: <Package size={14} />,
              text: "Material Comparison Engine",
            },
            {
              icon: <TrendingUp size={14} />,
              text: "Financial Projections",
            },
          ].map((tag) => (
            <span
              key={tag.text}
              className="flex items-center gap-1.5 font-['Inter'] text-[#C4603C] bg-[#C4603C]/8 px-3 py-1.5 rounded-sm"
              style={{ fontSize: "0.78rem" }}
            >
              {tag.icon}
              {tag.text}
            </span>
          ))}
        </div>

        {/* Phases */}
        <div className="space-y-16">
          {phases.map((phase) => (
            <div key={phase.num} className="relative">
              {/* Phase number */}
              <div className="flex items-baseline gap-4 mb-4">
                <span
                  className="font-['Playfair_Display'] text-[#D4A356]/30"
                  style={{ fontSize: "3rem", lineHeight: 1 }}
                >
                  {phase.num}
                </span>
                <h3
                  className="font-['Playfair_Display'] text-[#2D1810]"
                  style={{ fontSize: "1.5rem" }}
                >
                  {phase.title}
                </h3>
              </div>

              {phase.content && (
                <p
                  className="font-['Inter'] text-[#2D1810]/75 max-w-3xl ml-0 md:ml-20"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                  }}
                >
                  {phase.content}
                </p>
              )}

              {phase.accent && (
                <p
                  className="font-['Inter'] text-[#C4603C] mt-4 ml-0 md:ml-20 border-l-2 border-[#C4603C]/30 pl-4"
                  style={{
                    fontSize: "0.88rem",
                    fontStyle: "italic",
                  }}
                >
                  {phase.accent}
                </p>
              )}

              {phase.bullets && (
                <ul className="ml-0 md:ml-20 mt-3 space-y-3">
                  {phase.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-['Inter'] text-[#2D1810]/75"
                      style={{
                        fontSize: "0.93rem",
                        lineHeight: 1.7,
                      }}
                    >
                      <ArrowRight
                        size={14}
                        className="text-[#D4A356] mt-1.5 shrink-0"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {phase.metrics && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-0 md:ml-20 mt-6">
                  {phase.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-[#F5E6D3]/60 border border-[#2D1810]/8 rounded-sm p-5 text-center"
                    >
                      <span
                        className="font-['Playfair_Display'] text-[#C4603C] block mb-1"
                        style={{ fontSize: "1.8rem" }}
                      >
                        {m.value}
                      </span>
                      <span
                        className="font-['Inter'] text-[#8B6F5E]"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}