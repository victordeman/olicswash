import { HeroSection } from "@/components/common/HeroSection";
import { Stats } from "@/components/common/Stats";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import {
  Shirt,
  Wind,
  Package,
  Truck,
  Home,
  User,
  Layers,
  Clock,
  ShieldCheck,
  Star,
  ArrowRight,
  Scissors
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      title: "Washing / Drying",
      description: "Fast and easy self-service laundry for those on the go.",
      icon: User,
      color: "text-blue-600"
    },
    {
      title: "Ironing Only",
      description: "Professional ironing and pressing for all garment types.",
      icon: Scissors,
      color: "text-accent"
    },
    {
      title: "Bulk Order",
      description: "Large volume laundry services for hotels, hospitals, and more.",
      icon: Layers,
      color: "text-purple-600"
    },
    {
      title: "Fumigation / Biohazard",
      description: "Professional pest control and biohazard decontamination services.",
      icon: ShieldCheck,
      color: "text-green-600"
    },
    {
      title: "Industrial / Domestic Cleaning",
      description: "Comprehensive cleaning solutions for homes and industries.",
      icon: Home,
      color: "text-primary"
    },
    {
      title: "Pick Up & Delivery",
      description: "Convenient laundry service right at your doorstep.",
      icon: Truck,
      color: "text-primary-bright"
    },
    {
      title: "Wash, Fold & Press",
      description: "Professional washing, precise folding, and crisp pressing.",
      icon: Shirt,
      color: "text-blue-500"
    },
    {
      title: "Drop-off Laundry",
      description: "Drop your clothes and pick them up clean and fresh.",
      icon: Wind,
      color: "text-accent"
    }
  ];

  const steps = [
    { title: "Book Online", description: "Schedule a service through our platform or WhatsApp.", icon: Clock },
    { title: "We Pick Up", description: "Our team collects your laundry from your location.", icon: Truck },
    { title: "Clean & Process", description: "We use premium detergents and professional care.", icon: Shirt },
    { title: "Deliver Back", description: "Your fresh clothes delivered back within 24-48 hours.", icon: Package }
  ];

  return (
    <div className="flex flex-col">
      <HeroSection />

      <Stats />

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Professional Services"
            subtitle="Explore our comprehensive range of laundry and cleaning solutions tailored to your specific needs."
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconColor={service.color}
                ctaText="Book Now"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section / Why Choose Us */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-3xl bg-blue-50 lg:aspect-square">
               <div className="flex h-full w-full items-center justify-center border-4 border-dashed border-primary/20">
                  <p className="text-primary font-bold">About Section Image (Flyer Visual)</p>
               </div>
            </div>

            <div className="space-y-8">
              <SectionHeader
                title="Why Choose OLICS WASH?"
                subtitle="We are committed to providing the highest standards of laundry and cleaning services in Port Harcourt."
                align="left"
                className="mb-0"
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {[
                  { title: "Professional Staff", icon: User },
                  { title: "Reliable Service", icon: ShieldCheck },
                  { title: "Affordable Prices", icon: Star },
                  { title: "Fast Turnaround", icon: Clock }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-primary/20 transition-all">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-navy">{item.title}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                OLICS WASH is Port Harcourt&apos;s most reliable professional laundry and cleaning service.
                We bring the sparkle back to your fabrics with professional care and eco-friendly products.
              </p>

              <Button size="lg" className="px-8 font-bold">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-navy py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="How It Works"
            subtitle="Simple, fast, and convenient. Four easy steps to perfectly clean clothes."
            invert
          />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="group relative text-center space-y-6">
                {i < steps.length - 1 && (
                  <div className="absolute top-12 left-1/2 hidden h-0.5 w-full bg-primary/20 lg:block" />
                )}
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-primary-bright backdrop-blur-md transition-all group-hover:bg-primary group-hover:text-white">
                  <step.icon className="h-10 w-10" />
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-bright text-white text-sm font-bold">
                    {i + 1}
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">{step.title}</h4>
                  <p className="text-gray-400 font-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="What Our Customers Say"
            subtitle="Trusted by thousands of residents and businesses across Port Harcourt."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { name: "Blessing Okoro", review: "Best laundry service in PH! My clothes always come back smelling amazing and perfectly folded." },
              { name: "Chidi Mensah", review: "Very professional and fast. The pick-up and delivery service has saved me so much time." },
              { name: "Tamuno George", review: "High quality cleaning for my suits. I highly recommend OLICS WASH for professional garments." }
            ].map((testi, i) => (
              <div key={i} className="flex flex-col space-y-6 p-8 rounded-3xl bg-gray-50 border border-gray-100">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-gray-600 italic font-medium">&quot;{testi.review}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {testi.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-navy">{testi.name}</p>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-primary py-24 text-white">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="container relative mx-auto px-4 text-center md:px-6">
          <h2 className="mb-8 text-4xl font-black tracking-tight sm:text-5xl">
            Ready to experience the <br className="hidden sm:block" />
            <span className="text-primary-bright underline underline-offset-8">OLICS WASH difference?</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-medium text-white/80">
            Book your first service today and get premium care for your garments.
            Available for homes, hotels, and offices.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Link href="/booking">
              <Button size="lg" variant="secondary" className="h-16 px-10 text-xl shadow-2xl">
                Book a Wash Now
              </Button>
            </Link>
            <a href="https://wa.me/2348108690772">
              <Button size="lg" variant="whatsapp" className="h-16 px-10 text-xl shadow-2xl">
                Chat with us on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
