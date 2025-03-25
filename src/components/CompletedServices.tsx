import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, Code2, Briefcase, Users, Server, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function CompletedServices() {
  const { t } = useTranslation();

  return (
    <section id="completed-services" className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
            {/* Title */}
          </h2>

          {/* Itaú Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-orange-500/10 to-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-blue-500/20 relative group"
            >
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                  alt="Banco Itaú Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Building2 className="w-12 h-12 text-blue-500" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold text-blue-500">Banco Itaú</h3>
                      <p className="text-lg text-gray-300">Desenvolvimento Front-end</p>
                    </div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    href="https://www.itau.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-8 h-8" />
                  </motion.a>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    O nosso dono teve Participação no desenvolvimento front-end do maior banco privado do Brasil, 
                    contribuindo com interfaces modernas e inovadoras para milhões de usuários.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="bg-blue-500/20 text-blue-500 px-4 py-2 rounded-full text-sm flex items-center gap-2"
                    >
                      <Code2 className="w-4 h-4" />
                      React.js
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="bg-blue-500/20 text-blue-500 px-4 py-2 rounded-full text-sm flex items-center gap-2"
                    >
                      <Code2 className="w-4 h-4" />
                      TypeScript
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="bg-blue-500/20 text-blue-500 px-4 py-2 rounded-full text-sm flex items-center gap-2"
                    >
                      <Code2 className="w-4 h-4" />
                      Next.js
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Nexus RP Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-blue-500/20"
            >
              <div className="relative h-48">
                <img
                  src="https://i.postimg.cc/B68CPh6H/a-db28392fa7dc0a6416535095a0514e49.gif"
                  alt="Grupo Nexus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-500">Grupo Nexus</h3>
                  <a
                    href="https://discord.gg/nexusrp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-300">
                  Desenvolvimento de soluções personalizadas para todos servidores pertencentes ao Grupo Nexus,
                  incluindo sistemas de automação e tickets personalizados!
                </p>
              </div>
            </motion.div>

            {/* Rush Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-blue-500/20"
            >
              <div className="relative h-48">
                <img
                  src="https://cdn.discordapp.com/attachments/973677168464912464/1260853704886714421/banner-header-xs.png?ex=67e2fdc4&is=67e1ac44&hm=0ff210930507feba856136b5aa88833697041f57a985049841a9e22a7f0ce862&"
                  alt="Rush Fugas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-500">Rush</h3>
                  <a
                    href="https://discord.gg/rushp1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-300">
                  Desenvolvimento de soluções personalizadas para bots de discord, para o melhor servidor de fuga da rede do fivem!
                </p>
              </div>
            </motion.div>

                        {/* Stella Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-blue-500/20"
            >
              <div className="relative h-48">
                <img
                  src="https://public-blob.squarecloud.dev/852603072026247220/39356926403_m8nmwk99-a47f.png"
                  alt="Rush Fugas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-500">Stella Bot</h3>
                  <a
                    href="https://discord.gg/dWyYcaRJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-300">
                  Desenvolvimento de um site do mais novo bot de discord a STELLA BOT!
                </p>
              </div>
            </motion.div>

            {/* Discloud Card (Smaller) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-blue-500/20"
            >
              <div className="relative h-32">
                <img
                  src="https://i.postimg.cc/4ykp7sjR/image.jpg"
                  alt="Discloud"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-500">DISCLOUD HOSPEDAGENS</h3>
                  <a
                    href="https://discloud.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-300 text-sm">
                  Melhor hospedagem de websites e bots
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
