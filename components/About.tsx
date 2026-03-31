'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Não somos apenas uma agência. Somos uma estrutura estratégica completa.
            </h2>
            <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
              <p>
                A ELEVÁH nasceu com o propósito de transformar a comunicação de marcas que buscam alto padrão, posicionamento e resultados reais.
              </p>
              <p>
                Trabalhamos com marketing estratégico, tráfego pago, produção de conteúdo, vídeos institucionais e comerciais, fotos profissionais e social media. Nossa abordagem une criatividade refinada com análise de dados.
              </p>
              <p>
                Contamos com uma estrutura física premium, incluindo sala para reuniões e um estúdio fotográfico próprio, além de uma equipe de profissionais altamente capacitados e focados no crescimento do seu negócio.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
              <div>
                <h4 className="text-4xl font-display font-light text-white mb-2">100+</h4>
                <p className="text-sm text-neutral-500 uppercase tracking-wider">Projetos Entregues</p>
              </div>
              <div>
                <h4 className="text-4xl font-display font-light text-white mb-2">360°</h4>
                <p className="text-sm text-neutral-500 uppercase tracking-wider">Visão Estratégica</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] lg:h-[650px] rounded-2xl overflow-hidden bg-neutral-900 group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
            <Image
              src="https://picsum.photos/seed/agency-office/800/1200?grayscale"
              alt="Estrutura ELEVÁH"
              fill
              className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent z-20" />
            <div className="absolute bottom-0 left-0 w-full p-8 z-30">
              <div className="w-12 h-1 bg-purple-500/80 mb-4 rounded-full" />
              <p className="text-white font-display text-xl md:text-2xl font-light">
                Estrutura pensada para <span className="font-semibold">resultados</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
