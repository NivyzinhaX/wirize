import React from 'react';
import { motion } from 'framer-motion';
import { Server, Globe } from 'lucide-react';

export function Logo() {
  return (
    <motion.div
      className="relative w-48 h-48 mb-8"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Globe className="w-48 h-48 text-blue-500/20" />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Server className="w-24 h-24 text-blue-500 animate-pulse" />
      </motion.div>
    </motion.div>
  );
}