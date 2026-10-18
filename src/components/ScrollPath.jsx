import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollPath() {
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <>
      {/* Sleek top-of-viewport reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-[9999] origin-left shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        style={{ scaleX }}
      />
    </>
  );
}
