import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 pt-20 pb-10 border-t border-neutral-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="relative h-10 w-40 block mb-6">
              <Image 
                src="https://i.postimg.cc/7Ypd8FmS/logo.png" 
                alt="ELEVÁH" 
                fill 
                className="object-contain object-left" 
                referrerPolicy="no-referrer" 
              />
            </a>
            <p className="text-neutral-500 max-w-sm font-light leading-relaxed">
              Estratégia, conteúdo e performance para marcas que querem crescer de verdade.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Contato</h4>
            <ul className="space-y-4 text-neutral-400 font-light">
              <li>contato@elevah.com.br</li>
              <li>(54) 99933-3799</li>
              <li>Av. Borges de Medeiros, 1267, sala 204<br />Centro, Nova Prata - RS</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Redes Sociais</h4>
            <ul className="space-y-4 text-neutral-400 font-light">
              <li>
                <a href="https://www.instagram.com/elevah.creative/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@elevah.creative</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-900 text-sm text-neutral-600 font-light">
          <p>© {new Date().getFullYear()} ELEVÁH Agência. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
