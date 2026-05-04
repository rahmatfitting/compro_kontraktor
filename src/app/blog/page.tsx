import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import BlogHero from '@/components/Blog/BlogHero';
import BlogGrid from '@/components/Blog/BlogGrid';

export const metadata: Metadata = {
  title: 'Blog - LuxeVoyage | Travel Insights & Luxury Lifestyle',
  description: 'Discover the latest in luxury travel, destination guides, and lifestyle insights from the experts at LuxeVoyage. Expertly curated articles for the discerning traveler.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
