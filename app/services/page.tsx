import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/common/ServiceCard";
import {
  Shirt,
  Wind,
  Package,
  Truck,
  Home,
  User,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Self Service Laundry",
    description: "Fast and easy self-service laundry for those on the go. High-tech machines at your disposal.",
    icon: User,
    color: "text-blue-600",
    price: "₦2,500"
  },
  {
    title: "Bulk Order / Wash",
    description: "Large volume laundry services for hotels, hospitals, and organizations. Tailored pricing.",
    icon: Layers,
    color: "text-purple-600",
    price: "₦15,000"
  },
  {
    title: "Wash, Fold & Press",
    description: "Professional washing, precise folding, and crisp pressing. The gold standard for your daily wear.",
    icon: Shirt,
    color: "text-blue-500",
    price: "₦3,500"
  },
  {
    title: "Pick Up & Delivery",
    description: "Convenient laundry service right at your doorstep. We collect and return your fresh laundry.",
    icon: Truck,
    color: "text-primary-bright",
    price: "₦1,500"
  },
  {
    title: "Drop-off Laundry",
    description: "Simply drop your clothes with us and pick them up clean and fresh. Perfect for busy professionals.",
    icon: Wind,
    color: "text-accent",
    price: "₦2,000"
  },
  {
    title: "Fumigation / Biohazard",
    description: "Professional pest control and biohazard decontamination services using eco-friendly chemicals.",
    icon: ShieldCheck,
    color: "text-green-600",
    price: "₦25,000"
  },
  {
    title: "Industrial / Domestic Cleaning",
    description: "Deep cleaning solutions for homes, offices, and industries. Every corner polished to perfection.",
    icon: Home,
    color: "text-primary",
    price: "₦20,000"
  },
  {
    title: "Supplies / Procurements",
    description: "Quality laundry chemicals and professional equipment supply for other cleaning businesses.",
    icon: Package,
    color: "text-orange-600",
    price: "₦10,000"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeader
            title="Our Professional Services"
            subtitle="Premium laundry and cleaning solutions tailored for residents and businesses in Port Harcourt."
            invert
            className="mb-0"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:gap-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconColor={service.color}
                price={service.price}
                ctaText="Book This Service"
                detailed={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Need Help CTA */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-[3rem] bg-gradient-to-br from-primary to-primary-bright p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
             <div className="absolute bottom-0 left-0 -ml-12 -mb-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
             <div className="relative z-10">
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-md">
                   <Zap className="h-10 w-10 text-primary-bright" />
                </div>
                <h2 className="mb-6 text-4xl font-black md:text-5xl">Custom Cleaning Request?</h2>
                <p className="mx-auto mb-10 max-w-2xl text-xl text-white/80">
                  Don&apos;t see exactly what you need? We offer specialized packages for commercial contracts and unique cleaning challenges.
                </p>
                <div className="flex flex-col justify-center gap-6 sm:flex-row">
                   <Link href="/booking">
                      <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold">
                        Start Booking
                      </Button>
                   </Link>
                   <a href="https://wa.me/2348032399944">
                      <Button size="lg" variant="whatsapp" className="h-16 px-10 text-xl font-bold">
                        Speak to an Expert
                      </Button>
                   </a>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
