import { HeroSection } from "@/components/common/HeroSection";
import { Stats } from "@/components/common/Stats";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SectionHeader } from "@/components/ui/section-header";
import { Shirt, Wind, Trash2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <Stats />

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Professional Services"
            subtitle="We provide a wide range of laundry and cleaning services to meet your needs."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ServiceCard
              title="Wash & Fold"
              description="Everyday laundry washed, dried and perfectly folded for you."
              icon={Shirt}
            />
            <ServiceCard
              title="Dry Cleaning"
              description="Professional care for your most delicate and valuable garments."
              icon={Wind}
              iconColor="text-primary-bright"
            />
            <ServiceCard
              title="Curtain Cleaning"
              description="Deep cleaning for curtains and drapes to refresh your home."
              icon={Trash2}
              iconColor="text-accent"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
