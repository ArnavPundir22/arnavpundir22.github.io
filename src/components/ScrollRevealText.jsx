import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollRevealText({ text, className }) {
  const container = useRef(null);
  
  // Track the scroll progress of this specific text container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 50%"] // Starts revealing when top hits 80% of viewport, finishes when bottom hits 50%
  });

  const words = text.split(" ");

  return (
    <p ref={container} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        // Calculate the range for each word so they reveal sequentially
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        // Map the scroll progress to opacity for this specific word
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        const color = useTransform(scrollYProgress, [start, end], ["#475569", "#f8fafc"]); // slate-600 to slate-50

        return (
          <motion.span 
            key={i} 
            className="mr-1" // Add space after each word
            style={{ opacity, color }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}
