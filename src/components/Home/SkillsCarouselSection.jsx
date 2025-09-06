"use client";
import { useRef, useEffect } from "react";


export default function SkillsCarouselSection() {
const skills = [
  "Next.js", "React", "Tailwind CSS", "Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary", "Framer Motion", "Three.js", "Node.js", "Redux", "Socket.io", "TypeScript", "Vercel", "GitHub Actions"
];

function StarBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/70 dark:bg-pink-200/40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            opacity: Math.random() * 0.7 + 0.3,
            filter: "blur(1px)"
          }}
        />
      ))}
    </div>
  );
}
  const carouselRef = useRef(null);
  useEffect(() => {
    let scrollAmount = 0;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        scrollAmount += 1;
        if (scrollAmount > carouselRef.current.scrollWidth / 2) scrollAmount = 0;
        carouselRef.current.scrollLeft = scrollAmount;
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full max-w-7xl mb-16 space-y-8 relative">
      <StarBackground />
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 dark:from-blue-400 dark:via-pink-400 dark:to-yellow-300 mb-8 tracking-tight text-center drop-shadow-lg">Skills & Technologies</h2>
      <div ref={carouselRef} className="flex gap-8 overflow-x-auto whitespace-nowrap py-8 px-4 rounded-3xl bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 dark:from-blue-900 dark:via-pink-900 dark:to-yellow-900 shadow-2xl ring-4 ring-blue-400/20 dark:ring-pink-400/20 relative z-10">
        {skills.map(skill => (
          <div
            key={skill}
            className="px-8 py-4 rounded-2xl bg-white dark:bg-neutral-800 text-blue-600 dark:text-pink-300 font-extrabold shadow-lg ring-4 ring-blue-400/30 dark:ring-pink-400/30 hover:ring-8 hover:shadow-blue-400/40 dark:hover:shadow-pink-400/40 transition-all duration-300 cursor-pointer text-xl select-none hover:scale-105"
            style={{ perspective: "600px", transformStyle: "preserve-3d" }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
