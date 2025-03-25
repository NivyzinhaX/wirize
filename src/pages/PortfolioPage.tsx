import React from 'react';
import { motion } from 'framer-motion';
import { CompletedServices } from '../components/CompletedServices';

export function PortfolioPage() {
  return (
    <div className="pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-12">Grandes Parcerias</h1>
        <CompletedServices />
      </motion.div>
    </div>
  );
}