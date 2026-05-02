import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import BlogHero from '@/components/Blog/BlogHero';
import BlogGrid from '@/components/Blog/BlogGrid';

export const metadata: Metadata = {
  title: 'Blog - ERPPro | Insights & Industry News',
  description: 'Stay updated with the latest ERP trends, digital transformation insights, and best practices for enterprise resource planning. Expert articles and case studies.',
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
