import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <img
                  src="https://i.postimg.cc/0Q1807PN/UOgF.gif"
                  alt="MVZINDEV"
                  className="w-full h-[400px] object-cover rounded-xl ring-4 ring-emerald-500/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
              </motion.div>
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl -z-10 group-hover:bg-emerald-500/30 transition-colors" />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-emerald-500">{t('about.title')}</h2>

              <div className="space-y-4 text-gray-300">
                <p>{t('about.description')}</p>
                <p>{t('about.impact')}</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <motion.div 
                  className="bg-black/20 p-4 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Code2 className="w-6 h-6 text-emerald-500 mb-2" />
                  <p className="text-sm text-gray-300">{t('about.webDev')}</p>
                </motion.div>
                <motion.div 
                  className="bg-black/20 p-4 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Bot className="w-6 h-6 text-emerald-500 mb-2" />
                  <p className="text-sm text-gray-300">{t('about.discordBots')}</p>
                </motion.div>
                <motion.div 
                  className="bg-black/20 p-4 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Heart className="w-6 h-6 text-emerald-500 mb-2" />
                  <p className="text-sm text-gray-300">{t('about.design')}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}