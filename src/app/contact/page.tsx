import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ContactHero from '@/components/Contact/ContactHero';
import ContactForm from '@/components/Contact/ContactForm';

export const metadata: Metadata = {
  title: 'Hubungi Arkana Konstruksi - Konsultasi Proyek & Estimasi Biaya',
  description: 'Hubungi tim ahli Arkana Konstruksi untuk konsultasi proyek pembangunan, renovasi, dan desain arsitektur. Kami siap membantu mewujudkan visi bangunan Anda.',
};


export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
