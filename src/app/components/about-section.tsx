import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AlponaWatermark } from "./alpona-watermark";

const IMG_COFFEE =
  "https://files.catbox.moe/wiwcvp.jpg";

const interests = [
  {
    emoji: "📖",
    text: "Existential fiction — The Bell Jar, No Longer Human. Stories that dissect what it means to perform normalcy.",
  },
  {
    emoji: "🎬",
    text: "Psychologically layered anime — Death Note's cat-and-mouse logic, Jujutsu Kaisen's moral ambiguity.",
  },
  {
    emoji: "☕",
    text: "Bitter coffee only. No sugar. The kind that forces you to be present.",
  },
  {
    emoji: "📷",
    text: "Nature photography — training my eye for the composition rules I apply to every interface.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F5E6D3]/40 relative overflow-hidden">
      {/* Off-screen watermark */}
      <AlponaWatermark className="absolute -bottom-96 -right-48 w-[1000px] h-[1000px] text-[#C4603C] opacity-[0.05] pointer-events-none hidden lg:block" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <p
          className="font-['Inter'] text-[#C4603C] mb-3"
          style={{ fontSize: "0.75rem", letterSpacing: "0.15em" }}
        >
          ABOUT
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Text column */}
          <div className="md:col-span-1">
            <h2
              className="font-['Playfair_Display'] text-[#2D1810] mb-6"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.3 }}
            >
              I don't just design screens.
              <br />
              <span className="text-[#C4603C]">I design decisions.</span>
            </h2>

            <div className="space-y-5">
              <p
                className="font-['Inter'] text-[#2D1810]/75"
                style={{ fontSize: "0.95rem", lineHeight: 1.8 }}
              >
                Most UX designers stop at wireframes. I start where the data
                model begins. My academic research in time-series forecasting
                using PSO-optimized kernel regression taught me that every
                interface is, at its core, a decision engine, surfacing the
                right signal from noise.
              </p>
             
              <p
                className="font-['Inter'] text-[#2D1810]/75"
                style={{ fontSize: "0.95rem", lineHeight: 1.8 }}
              >
                BCA undergraduate, graduating 2026. Fluent in Figma and SQL.
                Equally comfortable debating information hierarchy and
                writing complex JOINs. That's not common and I design with
                that advantage.
              </p>
            </div>

            {/* Interests */}
            <div className="mt-10 space-y-4">
              <p
                className="font-['Inter'] text-[#8B6F5E]"
                style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
              >
                WHEN I'M NOT DESIGNING
              </p>
              {interests.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3"
                >
                  <span style={{ fontSize: "1.1rem" }}>{item.emoji}</span>
                  <p
                    className="font-['Inter'] text-[#2D1810]/65"
                    style={{ fontSize: "0.88rem", lineHeight: 1.6 }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="md:col-span-1 flex flex-col items-center gap-6">
            <div className="relative w-full h-full">
              <div className="w-full h-full min-h-80 bg-[#F0E0CC] rounded-sm overflow-hidden border border-[#2D1810]/8">
                <ImageWithFallback
                  src={IMG_COFFEE}
                  alt="Bitter coffee"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Offset decorative border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#C4603C]/20 rounded-sm -z-10" />
            </div>

            <p
              className="font-['Tiro_Bangla'] text-[#8B6F5E] text-center mt-2"
              style={{ fontSize: "0.9rem" }}
            >
              "তিক্ত কফি, তীক্ষ্ণ চিন্তা"
              <br />
              <span
                className="font-['Inter'] text-[#8B6F5E]/60"
                style={{ fontSize: "0.72rem" }}
              >
                Bitter coffee, sharp thinking
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}