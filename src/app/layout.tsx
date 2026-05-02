import type { Metadata } from 'next';
import './globals.css';
import ChatWidget from '@/components/Chat/ChatWidget';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'ERPPro - Enterprise Resource Planning Solutions',
  description: 'ERPPro delivers cutting-edge enterprise resource planning solutions that streamline your business operations, boost productivity, and drive growth. Trusted by 500+ enterprises worldwide.',
  keywords: 'ERP, enterprise resource planning, business management, automation, cloud ERP, manufacturing ERP',
  openGraph: {
    title: 'ERPPro - Enterprise Resource Planning Solutions',
    description: 'Streamline your business operations with our premium ERP solutions.',
    type: 'website',
  },
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
