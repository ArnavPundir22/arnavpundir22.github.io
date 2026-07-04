import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollPath() {
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll progress so the animation isn't jittery
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-50 mix-blend-screen">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Faint background track */}
        <path
          d="M 20 0 C 20 25, 80 25, 80 50 C 80 75, 20 75, 50 100"
          vectorEffect="non-scaling-stroke"
          stroke="rgba(34, 211, 238, 0.1)"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Glowing animated line */}
        <motion.path
          d="M 20 0 C 20 25, 80 25, 80 50 C 80 75, 20 75, 50 100"
          vectorEffect="non-scaling-stroke"
          stroke="#22d3ee"
          strokeWidth="4"
          fill="none"
          style={{ 
            pathLength: smoothProgress,
            filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.8))'
          }}
        />
      </svg>
    </div>
  );
}
