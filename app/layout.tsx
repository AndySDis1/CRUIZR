import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cruizr - Express Your Presence, Connect Your World',
  description: 'A modern social presence network that respects your privacy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen antialiased`}>
        <div className="relative min-h-screen">
          {/* Background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-[#050507] via-[#050507] to-slate-900 -z-10" />
          
          {/* Ambient light effects */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
          </div>

          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}