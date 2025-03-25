import React from 'react';
import { motion } from 'framer-motion';

export function NivyLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open('/nivy', '_blank')}
      className="cursor-pointer relative group"
    >
      <motion.div
        className="text-8xl font-bold text-emerald-500 relative z-10"
        animate={{ 
          textShadow: [
            "0 0 20px rgba(16, 185, 129, 0.5)", // Verde claro
            "0 0 40px rgba(16, 185, 129, 0.7)", // Verde médio
            "0 0 20px rgba(16, 185, 129, 0.5)"  // Verde claro
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        N
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-emerald-500/20 blur-2xl -z-10 group-hover:bg-emerald-500/30 transition-colors"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}
