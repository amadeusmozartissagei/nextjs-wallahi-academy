import MitraHero from '@/components/MitraHero';
import MitraSteps from '@/components/MitraSteps';
import MitraCommission from '@/components/MitraCommission';
import MitraCTA from '@/components/MitraCTA';
import MitraFAQ from '@/components/MitraFAQ';

export default function MitraPage() {
  return (
    <div className="min-h-screen">
      <MitraHero />
      <MitraSteps />
      <MitraCommission />
      <MitraCTA />
      <MitraFAQ />
    </div>
  );
}
