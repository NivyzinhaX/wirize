import React from 'react';
import { motion } from 'framer-motion';
import { Stats } from './Stats';
import { Logo } from './Logo';
import { Code, Sparkles, ArrowDown, Server, Globe } from 'lucide-react';

export function Hero() {
  const scrollToWirize = () => {
    document.getElementById('wirize-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center">
          <Logo />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <motion.div 
              className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-4 flex-wrap"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(59, 130, 246, 0.7)",
                  "0 0 20px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Server className="w-12 h-12 text-blue-500 animate-pulse" />
              <span className="text-blue-500">Wirize</span>
              <Globe className="w-12 h-12 text-blue-500 animate-pulse" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-blue-500/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block"
            >
              <p className="text-sm md:text-base text-blue-400">
                Sistema de Hospedagem Profissional
              </p>
            </motion.div>
          </motion.div>

          <Stats />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
          >
            Hospedagem de alta performance para seus projetos
          </motion.p>

          <motion.button
            onClick={scrollToWirize}
            className="group flex flex-col items-center text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ y: 5 }}
          >
            <span className="text-sm mb-2">Conheça a Wirize</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}