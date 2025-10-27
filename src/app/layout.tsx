import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Akualita Academy - Beranda",
  description: "Kami bantu kamu tingkatkan keterampilan, raih sertifikasi resmi, dan siap hadapi dunia kerja dengan lebih percaya diri!",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
