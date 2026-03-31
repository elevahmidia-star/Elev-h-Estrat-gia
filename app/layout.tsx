import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'ELEVÁH | Estratégia, Conteúdo e Performance',
  description: 'Estratégia, conteúdo e performance para marcas que querem crescer de verdade.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-neutral-950 text-neutral-50 font-sans antialiased selection:bg-neutral-800 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
