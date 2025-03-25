import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code, Zap, MessageSquare, Shield, Workflow } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

const services = {
  pt: [
    {
      icon: Bot,
      title: "Desenvolvimento de Bots",
      description: "Bots personalizados para atender suas necessidades específicas",
      code: "const bot = new Discord.Client();"
    },
    {
      icon: Workflow,
      title: "Automação de Servidor",
      description: "Otimize as operações do seu servidor Discord com nosso bots",
      code: "await automate.workflow(server);"
    },
    {
      icon: Code,
      title: "Integração de APIs",
      description: "Conecte seu servidor Discord com serviços e APIs externos em desenvolvimento!",
      code: "api.connect(discord, services);"
    },
    {
      icon: Shield,
      title: "Sistemas de Moderação",
      description: "Ferramentas avançadas para manter sua comunidade segura por completo",
      code: "mod.protect(server, rules);"
    },
    {
      icon: MessageSquare,
      title: "Recursos Comunitários",
      description: "Ferramentas de Divulgação para tornar seu servidor mais interativo",
      code: "community.engage();"
    },
    {
      icon: Zap,
      title: "Otimização de Performance",
      description: "Otimize seus bots existentes para melhor desempenho",
      code: "await optimize(bot);"
    }
  ],
  en: [
    {
      icon: Bot,
      title: "Bot Development",
      description: "Custom bots to meet your specific needs",
      code: "const bot = new Discord.Client();"
    },
    {
      icon: Workflow,
      title: "Server Automation",
      description: "Optimize your Discord server operations with automated workflows",
      code: "await automate.workflow(server);"
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Connect your Discord server with external services and APIs",
      code: "api.connect(discord, services);"
    },
    {
      icon: Shield,
      title: "Moderation Systems",
      description: "Advanced tools to keep your community safe",
      code: "mod.protect(server, rules);"
    },
    {
      icon: MessageSquare,
      title: "Community Features",
      description: "Engagement tools to make your server more interactive",
      code: "community.engage();"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your existing bots for better performance",
      code: "await optimize(bot);"
    }
  ]
};

export function Services() {
  const { i18n } = useTranslation();
  const currentServices = services[i18n.language as keyof typeof services] || services.pt;

  return (
    // Removendo o fundo azul e a renderização da seção de serviços
    <section id="services" className="hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Removendo o título também */}
          {/*
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-emerald-500"
          >
            {'function Services() {'}
          </motion.h2>
          */}

          {/* Comentado para desativar a seção */}
          {/*
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCards]}
            effect="cards"
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                effect: 'slide'
              },
              1024: {
                slidesPerView: 3,
                effect: 'slide'
              },
            }}
            className="services-swiper"
          >
            {currentServices.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-emerald-900/30 via-black/50 to-emerald-900/30 rounded-xl p-6 h-full backdrop-blur-lg border border-emerald-500/20 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <service.icon className="w-10 h-10 text-emerald-500 mb-4 transform transition-transform group-hover:rotate-12" />
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <pre className="bg-black/50 p-2 rounded text-xs text-emerald-500 overflow-x-auto">
                    <code>{service.code}</code>
                  </pre>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          */}
        </motion.div>
      </div>
    </section>
  );
}
