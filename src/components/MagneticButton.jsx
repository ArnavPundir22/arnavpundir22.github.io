import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MagneticButton({ children, className, onClick, href }) {
  const ref = useRef(null);

  // Motion values for the button translation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the magnetic pull
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // Subtle inner spring-linked motion for layered magnetic effect
  const innerX = useTransform(mouseX, val => val * 0.35);
  const innerY = useTransform(mouseY, val => val * 0.35);

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
    // Snap back to original position
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, onClick } : { onClick };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className={`relative inline-block ${className}`}
      {...props}
    >
      {/* Inner content wrapper to also apply slight magnetic pull */}
      <motion.span
        style={{ x: innerX, y: innerY }}
        className="flex items-center justify-center gap-2"
      >
        {children}
      </motion.span>
    </Component>
  );
}
