'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Portfólio', href: '#portfolio' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-950/80 backdrop-blur-md py-4 border-b border-neutral-800/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="relative h-[70px] w-[260px] md:h-[120px] md:w-[480px] lg:h-[160px] lg:w-[640px] block transition-all duration-300 -ml-2">
          <Image 
            src="https://i.postimg.cc/7Ypd8FmS/logo.png" 
            alt="ELEVÁH" 
            fill 
            className="object-contain object-left" 
            referrerPolicy="no-referrer" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5554999333799"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-white text-neutral-950 px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors"
          >
            Falar com especialista
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-neutral-950 border-b border-neutral-800/50 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5554999333799"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-sm font-medium bg-white text-neutral-950 px-5 py-3 rounded-full hover:bg-neutral-200 transition-colors mt-4"
            >
              Falar com especialista
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
