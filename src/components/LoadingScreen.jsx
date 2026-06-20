import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('pulsing'); // pulsing, expanding, exit

  useEffect(() => {
    // Pulse for 2 seconds, then trigger the massive expansion
    const pulseTimer = setTimeout(() => {
      setPhase('expanding');
    }, 2000);

    return () => clearTimeout(pulseTimer);
  }, []);

  useEffect(() => {
    if (phase === 'expanding') {
      const expandTimer = setTimeout(() => {
        setPhase('exit');
      }, 800); // Duration matches the expansion animation
      return () => clearTimeout(expandTimer);
    } else if (phase === 'exit') {
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 500); // Final fade out
      return () => clearTimeout(exitTimer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#060a14] overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Central AI Orb */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Core White Light */}
            <motion.div
              className="absolute flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white rounded-full z-20 shadow-[0_0_40px_rgba(255,255,255,0.8)]"
              animate={
                phase === 'pulsing' 
                  ? { scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] } 
                  : { scale: 40, opacity: 0 } // Expands massively to cover screen
              }
              transition={
                phase === 'pulsing'
                  ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.8, ease: "easeIn" }
              }
            >
              <span className="text-black font-bold font-['Poppins'] tracking-widest text-xs md:text-sm uppercase select-none">
                Welcome
              </span>
            </motion.div>
            {/* Cyan Inner Glow */}
            <motion.div
              className="absolute w-32 h-32 md:w-48 md:h-48 bg-cyan-400 rounded-full blur-xl mix-blend-screen z-10"
              animate={
                phase === 'pulsing' 
                  ? { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] } 
                  : { scale: 30, opacity: 0 }
              }
              transition={
                phase === 'pulsing'
                  ? { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }
                  : { duration: 0.8, ease: "easeIn" }
              }
            />
            {/* Indigo Outer Glow */}
            <motion.div
              className="absolute w-48 h-48 md:w-64 md:h-64 bg-indigo-500 rounded-full blur-2xl mix-blend-screen z-0"
              animate={
                phase === 'pulsing' 
                  ? { scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] } 
                  : { scale: 20, opacity: 0 }
              }
              transition={
                phase === 'pulsing'
                  ? { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
                  : { duration: 0.8, ease: "easeIn" }
              }
            />
          </div>

          {/* Awakening Text */}
          <AnimatePresence>
            {phase === 'pulsing' && (
              <motion.div
                className="absolute bottom-20 md:bottom-32 flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-cyan-400 font-mono tracking-[0.4em] text-xs md:text-sm uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                  Awakening
                </div>
                <div className="flex gap-2 mt-3">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(34,211,238,1)]"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
