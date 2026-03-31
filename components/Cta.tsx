'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Cta() {
  return (
    <section id="contato" className="py-32 md:py-48 relative overflow-hidden bg-neutral-950 border-t border-neutral-900/50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
        >
          Pronto para elevar o seu próximo nível?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl md:text-2xl text-neutral-400 font-light mb-12"
        >
          Se a sua marca precisa de presença, posicionamento e resultado, a ELEVÁH está pronta.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="https://wa.me/5554999333799"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-neutral-950 px-10 py-5 rounded-full font-medium text-lg hover:bg-neutral-200 transition-all hover:scale-105 duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
          >
            Falar no WhatsApp <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
