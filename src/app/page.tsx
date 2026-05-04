import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import HeroSection from '@/components/Home/HeroSection';
import AboutSection from '@/components/Home/AboutSection';
import ServicesSection from '@/components/Home/ServicesSection';
import WhyUsSection from '@/components/Home/WhyUsSection';
import ClientProjectMap from '@/components/Map';
import PortfolioSection from '@/components/Home/PortfolioSection';
import WorkflowSection from '@/components/Home/WorkflowSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import CommitmentSection from '@/components/Home/CommitmentSection';
import CTASection from '@/components/Home/CTASection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <ClientProjectMap />
        <PortfolioSection />
        <WorkflowSection />
        <TestimonialsSection />
        <CommitmentSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
// Force refresh
