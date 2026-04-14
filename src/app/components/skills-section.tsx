const skillGroups = [
  {
    category: "Product Thinking",
    description: "How I approach problems",
    skills: [
      "Information Architecture",
      "Data-to-UI Translation",
      "Unit Economics Visualization",
      "Progressive Disclosure Design",
      "Constraint-Based Problem Solving",
    ],
  },
  {
    category: "Design Execution",
    description: "How I build solutions",
    skills: [
      "Figma (Advanced)",
      "Prototyping & Interaction Design",
      "Wireframing",
      "Design Systems",
      "Visual & Graphic Design",
    ],
  },
  {
    category: "Technical Depth",
    description: "Why I design differently",
    skills: [
      "SQL & Complex Queries",
      "Data Modeling",
      "Algorithmic Thinking",
      "C++ / OOP Fundamentals",
      "API-Aware Interface Design",
    ],
  },
  {
    category: "Research & Strategy",
    description: "What informs my decisions",
    skills: [
      "B2B User Behavior Analysis",
      "Competitive Landscape Mapping",
      "Business Constraint Translation",
      "Stakeholder Communication",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#F5E6D3]/40">
      <div className="max-w-5xl mx-auto px-6">
        <p
          className="font-['Inter'] text-[#C4603C] mb-3"
          style={{ fontSize: "0.75rem", letterSpacing: "0.15em" }}
        >
          CAPABILITIES
        </p>

        <h2
          className="font-['Playfair_Display'] text-[#2D1810] mb-12"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.3 }}
        >
          Not a list of tools.{" "}
          <span className="text-[#C4603C]">A system of thinking.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#FDF6F0] border border-[#2D1810]/8 rounded-sm p-7"
            >
              <h3
                className="font-['Playfair_Display'] text-[#2D1810] mb-1"
                style={{ fontSize: "1.2rem" }}
              >
                {group.category}
              </h3>
              <p
                className="font-['Inter'] text-[#8B6F5E] mb-5"
                style={{ fontSize: "0.78rem" }}
              >
                {group.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-['Inter'] text-[#2D1810]/70 bg-[#F5E6D3] px-3 py-1.5 rounded-sm"
                    style={{ fontSize: "0.78rem" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
