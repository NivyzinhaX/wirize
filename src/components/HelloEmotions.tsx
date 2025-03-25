import React from 'react';
import { Heart, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function HelloEmotions() {
  return (
    <section id="hello-emotions" className="py-16 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <h2 className="text-4xl font-bold text-emerald-400">Hello Emotions</h2>
            </motion.div>
            <p className="text-xl text-gray-300">
              Capacitando comunidades Discord com soluções inteligentes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 rounded-xl p-6 text-center hover:bg-gray-900/70 transition-all cursor-pointer"
            >
              <Heart className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Comunidade Primeiro</h3>
              <p className="text-gray-300">Construindo soluções que priorizam a experiência do usuário</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 rounded-xl p-6 text-center hover:bg-gray-900/70 transition-all cursor-pointer"
            >
              <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Segurança Confiável</h3>
              <p className="text-gray-300">Sistemas avançados de proteção para seu servidor</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 rounded-xl p-6 text-center hover:bg-gray-900/70 transition-all cursor-pointer"
            >
              <Zap className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Rápido & Eficiente</h3>
              <p className="text-gray-300">Performance otimizada para qualquer escala</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Conquistas Recentes</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <span className="w-16 text-emerald-400 font-bold">250+</span>
                <span className="text-gray-300">Servidores Discord ativos</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <span className="w-16 text-emerald-400 font-bold">200+</span>
                <span className="text-gray-300">Clientes satisfeitos</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <span className="w-16 text-emerald-400 font-bold">99.9%</span>
                <span className="text-gray-300">Tempo de atividade</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}