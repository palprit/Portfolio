import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Photo = {
  src: string;
  caption: string;
  note: string;
  tall: boolean;
};

const photos: Photo[] = [
  {
    src: "https://files.catbox.moe/gh49js.jpg",
    caption: "Depth & Layering",
    note: "Foreground-background separation. The same principle I use in card hierarchy.",
    tall: true,
  },
  {
    src: "https://files.catbox.moe/vuazu1.jpg",
    caption: "Detail & Focus",
    note: "Selective attention. Drawing the eye to what matters—exactly like visual hierarchy in UI.",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1677397333707-7b833006983d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb2xrYXRhJTIwdGVycmFjb3R0YSUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYwOTg3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Terracotta Geometry",
    note: "Temple carvings as grid systems—centuries of modular design before Figma.",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1652355045956-41665ecf16fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZW5nYWxpJTIwYWxwb25hJTIwZmxvb3IlMjBhcnQlMjBwYXR0ZXJufGVufDF8fHx8MTc3NjA5ODcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Alpona & Rhythm",
    note: "Bengali floor art as pattern language—repetition, symmetry, and deliberate imperfection.",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1759486786590-75f4d62917c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdXJnYSUyMHB1amElMjBwYW5kYWwlMjBCZW5nYWwlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NzYwOTg3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Ephemeral Craft",
    note: "Puja pandals—immersive experiences designed to be temporary. The original pop-up UX.",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1756497907223-c23ae3f07e7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZW5nYWwlMjBzdW5zZXQlMjByaXZlciUyMGdvbGRlbiUyMGhvdXJ8ZW58MXx8fHwxNzc2MDk0NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Color Temperature",
    note: "Warm tones draw emotion. Cool tones build trust. Knowing when to use which.",
    tall: false,
  },
];

function PhotoCard({
  photo,
  index,
  onClick,
}: {
  photo: Photo;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="break-inside-avoid group relative overflow-hidden rounded-sm bg-[#F0E0CC] cursor-pointer"
      onClick={onClick}
    >
      <ImageWithFallback
        src={photo.src}
        alt={photo.caption}
        loading="lazy"
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          photo.tall ? "h-80" : "h-56"
        }`}
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-[#2D1810]/0 group-hover:bg-[#2D1810]/70 transition-all duration-300 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100">
        <span
          className="font-['Playfair_Display'] text-[#FDF6F0] mb-1"
          style={{ fontSize: "1.1rem" }}
        >
          {photo.caption}
        </span>
        <span
          className="font-['Inter'] text-[#FDF6F0]/70"
          style={{ fontSize: "0.78rem", lineHeight: 1.5 }}
        >
          {photo.note}
        </span>
      </div>
    </motion.div>
  );
}

function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const photo = photos[currentIndex];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0)
        onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && currentIndex < photos.length - 1)
        onNavigate(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [currentIndex, photos.length, onClose, onNavigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-[#1a0f0a]/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 text-[#FDF6F0]/70 hover:text-[#FDF6F0] transition-colors z-10"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <span
        className="absolute top-6 left-6 font-['Inter'] text-[#FDF6F0]/40"
        style={{ fontSize: "0.78rem" }}
      >
        {currentIndex + 1} / {photos.length}
      </span>

      {/* Nav arrows */}
      {currentIndex > 0 && (
        <button
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-[#FDF6F0]/50 hover:text-[#FDF6F0] transition-colors z-10"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
        >
          <ChevronLeft size={32} />
        </button>
      )}
      {currentIndex < photos.length - 1 && (
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-[#FDF6F0]/50 hover:text-[#FDF6F0] transition-colors z-10"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Image + caption */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="flex flex-col items-center max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ImageWithFallback
          src={photo.src}
          alt={photo.caption}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-sm"
        />
        <div className="mt-5 text-center max-w-lg">
          <span
            className="font-['Playfair_Display'] text-[#FDF6F0] block"
            style={{ fontSize: "1.3rem" }}
          >
            {photo.caption}
          </span>
          <span
            className="font-['Inter'] text-[#FDF6F0]/50 block mt-2"
            style={{ fontSize: "0.85rem", lineHeight: 1.6 }}
          >
            {photo.note}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PhotographySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="photography" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <p
          className="font-['Inter'] text-[#C4603C] mb-3"
          style={{ fontSize: "0.75rem", letterSpacing: "0.15em" }}
        >
          BEYOND THE SCREEN
        </p>

        <h2
          className="font-['Playfair_Display'] text-[#2D1810] mb-3"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.3 }}
        >
          Nature Photography as Design Practice
        </h2>
        <p
          className="font-['Inter'] text-[#8B6F5E] max-w-2xl mb-12"
          style={{ fontSize: "0.93rem", lineHeight: 1.7 }}
        >
          Every photograph is an exercise in the same skills I bring to
          interfaces: hierarchy, framing, focus, and knowing what to leave out.
          Here's what my camera teaches me about design.
        </p>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {photos.map((photo, i) => (
            <PhotoCard
              key={`${photo.caption}-${i}`}
              photo={photo}
              index={i}
              onClick={() => setLightboxIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={photos}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}