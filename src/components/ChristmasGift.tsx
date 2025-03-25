import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, TreePine } from 'lucide-react';

function SantaCountdown() {
  const calculateTimeUntilChristmas = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const christmas = new Date(currentYear, 11, 25);
    
    if (now > christmas) {
      christmas.setFullYear(currentYear + 1);
    }
    
    const diff = christmas.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return { days, hours, minutes };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeUntilChristmas());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeUntilChristmas());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div 
        className="bg-gray-900/90 p-8 rounded-xl relative overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <motion.div 
          className="absolute -top-10 -right-10 text-emerald-400/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <TreePine className="w-40 h-40" />
        </motion.div>
        
        <div className="text-center relative z-10">
          <motion.div 
            className="flex items-center gap-2 mb-4 justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <TreePine className="w-8 h-8 text-emerald-400" />
            <h2 className="text-2xl font-bold text-emerald-400">Contagem Regressiva</h2>
            <TreePine className="w-8 h-8 text-emerald-400" />
          </motion.div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-emerald-400/10 p-4 rounded-lg">
              <p className="text-3xl font-bold text-emerald-400">{timeLeft.days}</p>
              <p className="text-sm text-gray-300">Dias</p>
            </div>
            <div className="bg-emerald-400/10 p-4 rounded-lg">
              <p className="text-3xl font-bold text-emerald-400">{timeLeft.hours}</p>
              <p className="text-sm text-gray-300">Horas</p>
            </div>
            <div className="bg-emerald-400/10 p-4 rounded-lg">
              <p className="text-3xl font-bold text-emerald-400">{timeLeft.minutes}</p>
              <p className="text-sm text-gray-300">Minutos</p>
            </div>
          </div>
          
          <p className="text-lg text-emerald-400">até o Natal! 🎄</p>
        </div>
      </motion.div>
    </div>
  );
}

export function ChristmasGift() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="fixed bottom-4 right-4 z-50 cursor-pointer"
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <Gift className="w-12 h-12 text-emerald-400" />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
            <SantaCountdown />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}