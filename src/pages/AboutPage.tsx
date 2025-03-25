import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-400 text-center mb-12">Sobre o Criador</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img
                src="https://i.postimg.cc/0Q1807PN/UOgF.gif"
                alt="MvzinDev"
                className="w-full rounded-xl shadow-lg"
              />
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-400">MvzinDev</h2>
              <p className="text-gray-300">
                Desenvolvedor apaixonado por tecnologia e inovação, com foco em criar soluções que impactam positivamente a comunidade.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-900/20 p-4 rounded-lg"
                >
                  <Code2 className="w-6 h-6 text-blue-400 mb-2" />
                  <p className="text-gray-300">Especialista em desenvolvimento web e sistemas de hospedagem</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-900/20 p-4 rounded-lg"
                >
                  <Bot className="w-6 h-6 text-blue-400 mb-2" />
                  <p className="text-gray-300">Criador de soluções para Discord e automação</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-900/20 p-4 rounded-lg"
                >
                  <Heart className="w-6 h-6 text-blue-400 mb-2" />
                  <p className="text-gray-300">Comprometido com a excelência e satisfação do cliente</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}