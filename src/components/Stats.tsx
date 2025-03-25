import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Bot, Code, Eye } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 }
};

export function Stats() {
  const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  const [botsOnline, setBotsOnline] = useState(getRandomNumber(50, 100));
  const [sitesOnline, setSitesOnline] = useState(getRandomNumber(20, 45));
  const [clients, setClients] = useState(getRandomNumber(100, 200));
  const [visitors, setVisitors] = useState(() => {
    const saved = localStorage.getItem('visitorCount');
    if (!saved) {
      localStorage.setItem('visitorCount', '472');
      return 472;
    }
    return parseInt(saved);
  });

  useEffect(() => {
    const newCount = visitors + 1;
    setVisitors(newCount);
    localStorage.setItem('visitorCount', newCount.toString());

    const intervals = [
      setInterval(() => setBotsOnline(getRandomNumber(50, 100)), 300000),
      setInterval(() => setSitesOnline(getRandomNumber(20, 45)), 300000),
      setInterval(() => setClients(getRandomNumber(100, 200)), 300000)
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
    >
      <motion.div
        variants={item}
        whileHover={{ scale: 1.05 }}
        className="bg-black/20 backdrop-blur-sm rounded-xl p-6 cursor-pointer group border border-blue-400/20"
      >
        <div className="flex items-center justify-center mb-4">
          <Users className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
        </div>
        <h4 className="text-lg font-bold text-blue-400 text-center mb-2">{clients}+</h4>
        <p className="text-gray-300 text-center">Clientes Atendidos</p>
      </motion.div>
      
      <motion.div
        variants={item}
        whileHover={{ scale: 1.05 }}
        className="bg-black/20 backdrop-blur-sm rounded-xl p-6 cursor-pointer group border border-blue-400/20"
      >
        <div className="flex items-center justify-center mb-4">
          <Bot className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
        </div>
        <h4 className="text-lg font-bold text-blue-400 text-center mb-2">{sitesOnline}+</h4>
        <p className="text-gray-300 text-center">Sites Online</p>
      </motion.div>
      
      <motion.div
        variants={item}
        whileHover={{ scale: 1.05 }}
        className="bg-black/20 backdrop-blur-sm rounded-xl p-6 cursor-pointer group border border-blue-400/20"
      >
        <div className="flex items-center justify-center mb-4">
          <Code className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
        </div>
        <h4 className="text-lg font-bold text-blue-400 text-center mb-2">{botsOnline}+</h4>
        <p className="text-gray-300 text-center">Bots Online</p>
      </motion.div>

      <motion.div
        variants={item}
        whileHover={{ scale: 1.05 }}
        className="bg-black/20 backdrop-blur-sm rounded-xl p-6 cursor-pointer group border border-blue-400/20"
      >
        <div className="flex items-center justify-center mb-4">
          <Eye className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
        </div>
        <h4 className="text-lg font-bold text-blue-400 text-center mb-2">{visitors}</h4>
        <p className="text-gray-300 text-center">Visitantes</p>
      </motion.div>
    </motion.div>
  );
}