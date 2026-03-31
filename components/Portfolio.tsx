'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Nosso Portfólio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-400 text-lg font-light"
            >
              Resultados reais construídos com estratégia, estética e execução impecável.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-b from-neutral-900/60 to-neutral-950 border border-neutral-800/50 hover:border-purple-500/20 p-10 md:p-20 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-700"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          
          <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-6">Em Curadoria</h3>
          <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Nosso portfólio completo está sendo atualizado. Enquanto isso, entre em contato para solicitar cases do seu nicho ou entender como estruturaríamos a estratégia e produção da sua marca.
          </p>
          <a
            href="https://wa.me/5554999333799"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-neutral-950 px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-colors"
          >
            Solicitar cases <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
