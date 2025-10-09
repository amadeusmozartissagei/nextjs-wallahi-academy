import HeroSection from '@/components/HeroSection';
import ProgramSection from '@/components/ProgramSection';
import BenefitsSection from '@/components/BenefitsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased">
      <HeroSection />
      <ProgramSection />
      <BenefitsSection />
      <ContactSection />
    </div>
  );
}
