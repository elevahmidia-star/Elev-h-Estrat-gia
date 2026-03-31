'use client';

import { motion } from 'motion/react';
import { LineChart, Video, Camera, Share2, PenTool } from 'lucide-react';

const services = [
  {
    icon: <LineChart size={28} strokeWidth={1.5} />,
    title: 'Tráfego Pago',
    description: 'Gestão de campanhas de alta performance focada em conversão, escala e retorno sobre investimento (ROI) para o seu negócio.',
  },
  {
    icon: <Video size={28} strokeWidth={1.5} />,
    title: 'Vídeos Profissionais',
    description: 'Produção audiovisual cinematográfica para comerciais, vídeos institucionais e conteúdos de alto impacto que retêm a atenção.',
  },
  {
    icon: <Camera size={28} strokeWidth={1.5} />,
    title: 'Fotos Profissionais',
    description: 'Ensaios corporativos e fotografia de produtos em nosso estúdio próprio, transmitindo a verdadeira essência e qualidade da sua marca.',
  },
  {
    icon: <Share2 size={28} strokeWidth={1.5} />,
    title: 'Social Media',
    description: 'Gestão inteligente de redes sociais, criando uma comunidade engajada e um perfil que funciona como uma vitrine premium.',
  },
  {
    icon: <PenTool size={28} strokeWidth={1.5} />,
    title: 'Conteúdo Estratégico',
    description: 'Desenvolvemos conteúdo estratégico para fortalecer posicionamento, gerar percepção de valor e conectar marcas ao público certo.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-neutral-900/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Nossas Soluções
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-400 text-lg font-light"
          >
            Não executamos tarefas. Entregamos soluções integradas para elevar o posicionamento e os resultados da sua empresa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 hover:bg-neutral-900/80 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.05)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 mb-6 group-hover:text-purple-400 group-hover:border-purple-500/30 group-hover:scale-110 transition-all duration-500 shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
