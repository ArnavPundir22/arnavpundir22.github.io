import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CinematicSection({ children, className = '' }) {
  const ref = useRef(null);
  
  // Track this section's progress as it scrolls out of view (top of screen)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Scale down the section from 1 to 0.8 as it leaves the top of the viewport
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  // Fade it out and blur it to push it into the background
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // Offset the scroll to make it appear pinned
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]); // Move down 200px as it scrolls up
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, filter, y }}
      className={`w-full origin-top ${className}`}
    >
      {children}
    </motion.div>
  );
}
