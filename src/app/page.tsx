import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import HeroSection from '@/components/Home/HeroSection';
import AboutSection from '@/components/Home/AboutSection';
import FeaturesSection from '@/components/Home/FeaturesSection';
import ExperienceSection from '@/components/Home/ExperienceSection';
import WhyUsSection from '@/components/Home/WhyUsSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import BookingFlowSection from '@/components/Home/BookingFlowSection';
import CTASection from '@/components/Home/CTASection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ExperienceSection />
        <WhyUsSection />
        <TestimonialsSection />
        <BookingFlowSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
