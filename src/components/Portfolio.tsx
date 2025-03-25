import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Users } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = {
  pt: [
    {
      icon: MessageSquare,
      title: "Orçamento Personalizado",
      description: "Criação de bots personalizados de Discord com inteligência artificial e soluções sob demanda",
      code: "await createBot(botConfig);"
    },
    {
      icon: Users,
      title: "Bot de Ticket com IA",
      description: "Bot de suporte automatizado com sistema de tickets, utilizando IA para otimizar a experiência do usuário",
      code: "await createTicketSystem(bot);"
    },
    {
      icon: Bot,
      title: "Bot de Vendas Completo",
      description: "Automatização completa de vendas no Discord, com integração de pagamentos e controle de estoque",
      code: "await processSale(bot);"
    }
  ],
  en: [
    {
      icon: MessageSquare,
      title: "Custom Quote",
      description: "Custom Discord bots creation with AI and on-demand solutions",
      code: "await createBot(botConfig);"
    },
    {
      icon: Users,
      title: "AI Ticket Bot",
      description: "Automated support bot with a ticket system, using AI to optimize the user experience",
      code: "await createTicketSystem(bot);"
    },
    {
      icon: Bot,
      title: "Complete Sales Bot",
      description: "Full sales automation on Discord, with payment integration and inventory management",
      code: "await processSale(bot);"
    }
  ]
};

export function Portfolio() {
  // Supondo que você tenha um método de tradução ou um hook para determinar o idioma
  const i18n = { language: 'pt' }; // ou 'en', baseado na escolha do usuário

  const selectedProjects = projects[i18n.language];

  return (
    <section id="portfolio" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-emerald-400"
        >
          {'<Portfolio />'}
        </motion.h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="portfolio-swiper"
        >
          {selectedProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-black/20 backdrop-blur-sm rounded-xl p-6 h-full"
              >
                <project.icon className="w-12 h-12 text-emerald-400 mb-4 transform transition-transform group-hover:rotate-12" />
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <pre className="text-xs text-gray-400">{project.code}</pre>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
