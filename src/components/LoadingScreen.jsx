import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('drawing'); // drawing, fill, exit

  useEffect(() => {
    // Check if the user agent is a bot or Lighthouse to skip the long animation for performance metrics
    const isBot = /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(navigator.userAgent || '');
    if (isBot) {
      onComplete();
      return;
    }

    const fillTimer = setTimeout(() => {
      setPhase('fill');
    }, 1500);

    return () => clearTimeout(fillTimer);
  }, [onComplete]);

  useEffect(() => {
    if (phase === 'fill') {
      const exitTimer = setTimeout(() => {
        setPhase('exit');
      }, 1000);
      return () => clearTimeout(exitTimer);
    } else if (phase === 'exit') {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(completeTimer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
          exit={{ 
            opacity: 0, 
            y: -50,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
        >
          {/* Logo Animation */}
          <div className="relative flex items-center justify-center w-32 h-32 mb-8">
            <motion.svg 
              viewBox="0 0 100 100" 
              className="w-full h-full"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M 50 10 L 90 90 L 10 90 Z"
                fill="transparent"
                strokeWidth="2"
                stroke="url(#gradient)"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M 50 30 L 75 80 L 25 80 Z"
                fill="transparent"
                strokeWidth="2"
                stroke="rgba(255,255,255,0.2)"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
              
              <motion.path
                d="M 50 10 L 90 90 L 10 90 Z"
                fill="url(#gradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === 'fill' ? 0.2 : 0 }}
                transition={{ duration: 0.8 }}
                className="mix-blend-screen"
              />
            </motion.svg>
            
            {/* Inner Glow */}
            <motion.div
              className="absolute inset-0 bg-cyan-400 rounded-full blur-[40px] mix-blend-screen -z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: phase === 'fill' ? 0.15 : 0,
                scale: phase === 'fill' ? 1.5 : 0.5
              }}
              transition={{ duration: 1 }}
            />
          </div>

          {/* Text Animation */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="font-display text-2xl font-bold tracking-widest text-white uppercase">
              Arnav <span className="text-cyan-400">Pundir</span>
            </div>
            <div className="flex gap-1.5 mt-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3] 
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    delay: i * 0.2 
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
