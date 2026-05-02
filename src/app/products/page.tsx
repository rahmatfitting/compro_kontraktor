import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductsHero from '@/components/Products/ProductsHero';
import ProductsList from '@/components/Products/ProductsList';
import PricingSection from '@/components/Products/PricingSection';

export const metadata: Metadata = {
  title: 'Products - ERPPro | Enterprise Resource Planning Modules',
  description: 'Explore ERPPro\'s comprehensive suite of ERP modules including Finance, HR, Supply Chain, Manufacturing, and Business Intelligence. Scalable solutions for every enterprise.',
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsHero />
        <ProductsList />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
