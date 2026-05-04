import type { Metadata } from 'next';
import './globals.css';
import ChatWidget from '@/components/Chat/ChatWidget';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Arkana Konstruksi | Modern & Premium Construction',
  description: 'Arkana Konstruksi menghadirkan standar baru dalam dunia pembangunan. Kami menggabungkan estetika modern, material premium, dan ketepatan waktu.',
  keywords: 'kontraktor, konstruksi modern, renovasi rumah, desain interior, arkana konstruksi',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
