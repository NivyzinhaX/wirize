import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, Heart, Star, Music, Coffee, Sparkles } from 'lucide-react';

export function NivyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white">
      <header className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1
              className="text-6xl font-bold text-purple-400 mb-4"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                  "0 0 40px rgba(168, 85, 247, 0.7)",
                  "0 0 20px rgba(168, 85, 247, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              MvzinDev
            </motion.h1>
            <p className="text-xl text-purple-300">Desenvolvedora</p>
          </motion.div>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative rounded-2xl overflow-hidden"
              >
                <img
                  src="https://i.postimg.cc/0Q1807PN/UOgF.gif"
                  alt="Nivy"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-bold text-purple-300 mb-4">Sobre Mim</h2>
                  <p className="text-lg text-purple-100">
                    Desenvolvedor apaixonado por tecnologia, com foco em criar experiências únicas através de bots e websites.
                  </p>
                </motion.div>
              </motion.div>
            </section>

            <section className="grid md:grid-cols-2 gap-8 mb-20">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-purple-900/30 rounded-xl p-8 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                  <Code2 className="w-6 h-6" />
                  Habilidades
                </h3>
                <ul className="space-y-4">
                  {[
                    "Desenvolvimento de Bots Discord",
                    "Criação de Websites Modernos",
                    "UI/UX Design",
                    "Automação de Processos",
                    "Gerenciamento de Comunidades"
                  ].map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <Star className="w-4 h-4 text-purple-400" />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-purple-900/30 rounded-xl p-8 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                  <Heart className="w-6 h-6" />
                  Interesses
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Music, text: "Música" },
                    { icon: Coffee, text: "Café" },
                    { icon: Bot, text: "Tecnologia" },
                    { icon: Sparkles, text: "Criatividade" }
                  ].map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 bg-purple-800/30 p-3 rounded-lg"
                    >
                      <interest.icon className="w-5 h-5 text-purple-400" />
                      <span>{interest.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold text-purple-400 mb-8"
              >
                Projetos em Destaque
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Hello Emotions",
                    description: "Plataforma de bots para Discord",
                    icon: Heart
                  },
                  {
                    title: "Emotion Bot",
                    description: "Bot multifuncional para Discord",
                    icon: Bot
                  },
                  {
                    title: "Portfolio",
                    description: "Showcase de projetos e habilidades",
                    icon: Code2
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-purple-900/30 p-6 rounded-xl backdrop-blur-sm"
                  >
                    <project.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-purple-300 mb-2">{project.title}</h3>
                    <p className="text-purple-200">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}