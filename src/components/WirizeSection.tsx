import React from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, Shield, Zap, Users, MessageSquare } from 'lucide-react';

export function WirizeSection() {
  return (
    <section id="wirize-section" className="py-16 bg-gradient-to-b from-black to-blue-900/20 relative overflow-hidden">
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
                          <img
  src="https://i.postimg.cc/7hDj2V0D/wirize.gif"
  alt="Wirize Logo"
  class="w-38 h-48 mx-auto mb-6 rounded-full"
/>

            <h2 className="text-4xl font-bold text-blue-400 mb-4">Sistema de Hospedagem Wirize</h2>
            <p className="text-xl text-gray-300">Potencialize seus projetos com nossa infraestrutura de ponta</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-900/20 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20"
            >
              <Server className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-blue-400 mb-2">Servidores Premium</h3>
              <p className="text-gray-300">Infraestrutura de alta performance com uptime garantido</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-900/20 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20"
            >
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-blue-400 mb-2">Proteção DDoS</h3>
              <p className="text-gray-300">Segurança avançada para seus serviços</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-900/20 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20"
            >
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-blue-400 mb-2">Suporte 24/7</h3>
              <p className="text-gray-300">Equipe especializada sempre disponível</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-900/20 rounded-xl p-8 backdrop-blur-sm border border-blue-500/20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Sistema de Orçamento</h3>
                <p className="text-gray-300 mb-6">
                  Oferecemos soluções personalizadas para cada projeto. Entre em contato para um orçamento sob medida.
                </p>
                <ul className="space-y-4">
                  <motion.li 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <Zap className="w-5 h-5 text-blue-400" />
                    Bots Personalizados
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <Globe className="w-5 h-5 text-blue-400" />
                    Sites Personalizados
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <Shield className="w-5 h-5 text-blue-400" />
                    Segurança reforçada
                  </motion.li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <motion.a
                  href="https://discord.gg/wirize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageSquare className="w-5 h-5" />
                  Solicitar Orçamento
                </motion.a>
                
                <motion.div
                  className="bg-blue-900/30 p-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-center text-gray-300">
                    Entre em nosso Discord para conhecer mais sobre nossos serviços e receber um atendimento personalizado.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}