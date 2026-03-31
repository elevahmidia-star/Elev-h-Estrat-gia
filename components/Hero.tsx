'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent z-0" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neutral-800/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-neutral-900/80 border border-purple-500/20 text-neutral-300 text-xs font-medium tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(168,85,247,0.1)] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            Agência de Posicionamento Premium
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8 drop-shadow-2xl"
        >
          Estratégia, conteúdo e performance para marcas que querem{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-purple-400/70">
            crescer de verdade.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Atuamos com tráfego pago, vídeos e fotos profissionais, social media e conteúdo estratégico para elevar o nível do seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="https://wa.me/5554999333799"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-neutral-950 px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105"
          >
            Solicitar diagnóstico <ArrowRight size={18} />
          </a>
          <a
            href="#servicos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 text-white px-8 py-4 rounded-full font-medium hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
          >
            Conhecer serviços
          </a>
        </motion.div>
      </div>
    </section>
  );
}
