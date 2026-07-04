import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({ children, className, onClick, href }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for the button translation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the magnetic pull
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Magnetic strength (lower divisor = stronger pull)
    x.set(middleX / 3);
    y.set(middleY / 3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Snap back to original position
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className={`relative inline-block ${className}`}
      {...props}
    >
      {/* Inner content wrapper to also apply slight magnetic pull */}
      <motion.span
        style={{
          x: useSpring(useMotionValue(isHovered ? x.get() / 2 : 0), springConfig),
          y: useSpring(useMotionValue(isHovered ? y.get() / 2 : 0), springConfig),
        }}
        className="flex items-center justify-center gap-2"
      >
        {children}
      </motion.span>
    </Component>
  );
}
