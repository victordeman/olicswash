import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-primary">
                <span className="mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-white">New</span>
                Professional Laundry Services in Port Harcourt
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-6xl">
                Clean Clothes, <br />
                <span className="text-primary">Happy Life!</span>
              </h1>
              <p className="max-w-[600px] text-lg text-gray-600 md:text-xl">
                Experience the best laundry and cleaning services. We take care of your clothes like they're our own. Fast, reliable, and affordable.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/book">
                  <Button size="lg" className="w-full text-lg sm:w-auto">Book a Wash</Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full text-lg sm:w-auto">View Services</Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square w-full max-w-[500px] mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary to-primary-bright opacity-10 animate-pulse"></div>
              <div className="flex h-full w-full items-center justify-center rounded-3xl border-2 border-dashed border-gray-200 bg-gray-50">
                <span className="text-gray-400">Hero Image (Flyer Placeholder)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Why Choose Us?</h2>
            <p className="mt-4 text-gray-600">The most trusted laundry service for your needs</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Fast Turnaround</h3>
                <p className="text-gray-500">We deliver your clothes clean and fresh within 24-48 hours.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-success">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Quality Guarantee</h3>
                <p className="text-gray-500">We use premium detergents and modern equipment to ensure the best results.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-accent-purple">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Expert Handling</h3>
                <p className="text-gray-500">From delicates to heavy curtains, our team knows how to handle every fabric.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
