'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const differentials = [
  'Estratégia Personalizada',
  'Produção Profissional',
  'Equipe Capacitada',
  'Estrutura Física para Atendimento',
  'Estúdio Fotográfico Próprio',
  'Visão Criativa com Foco em Resultado',
  'Posicionamento de Marca',
  'Atendimento Próximo e Profissional',
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">ELEVÁH</span>?
            </h2>
            <p className="text-neutral-400 text-lg font-light mb-10 leading-relaxed">
              Diferente de agências tradicionais, nós oferecemos uma estrutura completa e integrada. Do planejamento à execução, cada detalhe é pensado para transmitir autoridade e gerar conversão.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="text-purple-500/70 shrink-0 mt-1 group-hover:text-purple-400 transition-colors" size={20} />
                  <span className="text-neutral-300 font-medium group-hover:text-white transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-auto rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/50 shadow-[0_0_40px_rgba(0,0,0,0.5)] group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-neutral-900/50 to-neutral-950/90 z-10 group-hover:from-purple-900/30 transition-colors duration-700" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center p-8 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10" />
                <h3 className="text-2xl font-display font-light text-white mb-4">Estrutura Premium</h3>
                <p className="text-neutral-400 text-sm max-w-xs mx-auto">
                  Nosso estúdio e sala de reuniões foram projetados para receber sua marca com o mais alto padrão.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
