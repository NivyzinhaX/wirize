import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Sparkles, Laptop, Server, Database } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    className="absolute"
    style={{
      filter: 'blur(1px)',
    }}
  >
    <motion.div
      animate={{
        y: [-20, 20, -20],
        x: [-20, 20, -20],
        rotate: [0, 360],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <Icon className="w-8 h-8 text-emerald-400/30" />
    </motion.div>
  </motion.div>
);

export function LoadingScreen() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <FloatingIcon icon={Laptop} delay={0.2} />
        <FloatingIcon icon={Server} delay={0.4} />
        <FloatingIcon icon={Database} delay={0.6} />
        <FloatingIcon icon={Code2} delay={0.8} />
      </div>

      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              animate={hovered ? { rotate: 360 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Terminal className="w-12 h-12 text-emerald-400" />
            </motion.div>
            
            <motion.h1 
              className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400"
              animate={{ 
                backgroundPosition: ['0% center', '200% center'],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              MvzinDev
            </motion.h1>

            <motion.div
              animate={hovered ? { rotate: -360 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Terminal className="w-12 h-12 text-emerald-400" />
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -inset-4"
              >
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2"
                  animate={{ y: [-20, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="relative">
          <motion.div
            className="h-2 w-48 mx-auto bg-black rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400"
              initial={{ width: '0%' }}
              animate={{ 
                width: '100%',
                transition: {
                  duration: 2,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>

          <motion.p
            className="mt-4 text-emerald-400 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading amazing experience...
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}