import HeroSection from '@/components/home/hero-section';
import FeaturedWork from '@/components/home/featured-work';
import ContactCTA from '@/components/home/contact-cta';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturedWork />
      <ContactCTA />
    </div>
  );
}
