import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import potImage from "../../imports/image-5.png";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If the image is already cached and loaded before React attaches the listener
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    
    // Show the rotating pot for 5 seconds AFTER the image has fully loaded
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onComplete, isLoaded]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#FDF6F0] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Preload the image early */}
      <link rel="preload" as="image" href={potImage} />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="mb-12 relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
        {/* Wheel Base (Spinning) */}
        <div className="absolute bottom-[-10px] w-full">
          <svg
            viewBox="0 0 200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <ellipse cx="100" cy="30" rx="80" ry="15" fill="#D4A356" opacity="0.15" />
            
            <motion.ellipse
              cx="100" cy="30" rx="80" ry="15"
              stroke="#D4A356" strokeWidth="2" fill="none"
              strokeDasharray="15 15"
              animate={{ strokeDashoffset: [0, -30] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.ellipse
              cx="100" cy="30" rx="55" ry="10"
              stroke="#D4A356" strokeWidth="1.5" fill="none" opacity="0.6"
              strokeDasharray="10 10"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        {/* 3D Pot */}
        <motion.div 
          className={`relative w-full h-full z-10 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          animate={{ 
            scaleX: [1, 1.02, 0.98, 1], 
            scaleY: [1, 0.98, 1.02, 1] 
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "bottom center" }}
        >
          <img 
            ref={imgRef}
            src={potImage} 
            alt="3D Terracotta Pot Illustration" 
            className="w-full h-full object-contain drop-shadow-lg"
            onLoad={() => setIsLoaded(true)}
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
        </motion.div>
      </div>

      {/* Name / Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <p
          className="font-['Playfair_Display'] text-[#2D1810] text-2xl tracking-wider"
        >
          প্রীতি
        </p>
        <p className="font-['Inter'] text-[#8B6F5E] text-xs tracking-[0.2em] mt-2 font-medium">
          CRAFTED WITH CARE
        </p>
      </motion.div>
    </motion.div>
  );
}