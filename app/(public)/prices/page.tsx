"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Send, Loader2 } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function PricesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    serviceType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.fullName || !formData.phone || !formData.serviceType) {
      toast.error("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Prepare WhatsApp message
    const message = `*New Quote Request*%0A%0A*Name:* ${formData.fullName}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.serviceType}%0A*Details:* ${formData.message || 'None'}`;

    // Simulate processing
    setTimeout(() => {
      toast.success("Quote request prepared! Redirecting to WhatsApp...");
      setIsSubmitting(false);

      // Open WhatsApp
      window.open(`https://wa.me/2348108690772?text=${message}`, '_blank');

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        serviceType: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeader
            title="Service Quotes"
            subtitle="Customized and fair pricing tailored to your specific laundry and cleaning needs."
            invert
            className="mb-0"
          />
        </div>
      </section>

      {/* Pricing Information Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[3rem] shadow-xl p-10 md:p-16 border border-gray-100 text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">
                Custom Quotes for Your Needs
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium mb-10">
                At OLICS WASH, we believe in providing fair and accurate quotes based on the specific requirements of your order.
                Costs vary depending on garment type, volume, specific care instructions, and whether pickup/delivery is required.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 text-left">
                  <h4 className="font-black text-navy text-xl mb-3">Individual Items</h4>
                  <p className="text-gray-600 font-medium text-lg">
                    From daily wear to delicate fabrics, we provide specialized care for every piece in your wardrobe.
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-purple-50 border border-purple-100 text-left">
                  <h4 className="font-black text-navy text-xl mb-3">Bulk & Corporate</h4>
                  <p className="text-gray-600 font-medium text-lg">
                    Specialized rates for hotels, hospitals, and large-scale domestic requirements.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/booking" className="w-full sm:w-auto">
                  <Button size="lg" className="h-16 px-10 text-lg font-black rounded-2xl w-full shadow-premium group">
                    <Calendar className="mr-2 h-6 w-6" /> Book a Service
                  </Button>
                </Link>
                <a href="https://wa.me/2348108690772" className="w-full sm:w-auto">
                  <Button size="lg" variant="whatsapp" className="h-16 px-10 text-lg font-black rounded-2xl w-full shadow-premium group">
                    <MessageCircle className="mr-2 h-6 w-6" /> Quick Chat
                  </Button>
                </a>
              </div>
            </div>

            {/* Quote Inquiry Form */}
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
               <div className="bg-navy p-10 text-white text-center">
                  <h3 className="text-3xl font-black mb-2">Request a Quote</h3>
                  <p className="text-gray-400 font-medium">Fill in the details below and we&apos;ll get back to you with a custom estimate.</p>
               </div>
               <div className="p-10 md:p-16">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <Label htmlFor="fullName" className="text-lg font-bold text-navy">Full Name</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="h-14 rounded-xl border-2 focus:border-primary text-lg"
                            required
                          />
                       </div>
                       <div className="space-y-3">
                          <Label htmlFor="phone" className="text-lg font-bold text-navy">Phone / WhatsApp</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="0803 123 4567"
                            className="h-14 rounded-xl border-2 focus:border-primary text-lg"
                            required
                          />
                       </div>
                    </div>

                    <div className="space-y-3">
                       <Label htmlFor="serviceType" className="text-lg font-bold text-navy">Service Type</Label>
                       <Select onValueChange={handleSelectChange} value={formData.serviceType}>
                          <SelectTrigger className="h-14 rounded-xl border-2 focus:border-primary text-lg">
                             <SelectValue placeholder="Select the service you need" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl">
                             <SelectItem value="Wash, Fold & Press">Wash, Fold & Press</SelectItem>
                             <SelectItem value="Washing / Drying Only">Washing / Drying Only</SelectItem>
                             <SelectItem value="Ironing Only">Ironing Only</SelectItem>
                             <SelectItem value="Bulk Order / Wash">Bulk Order / Wash</SelectItem>
                             <SelectItem value="Fumigation / Biohazard">Fumigation / Biohazard</SelectItem>
                             <SelectItem value="Industrial / Domestic Cleaning">Industrial / Domestic Cleaning</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>

                    <div className="space-y-3">
                       <Label htmlFor="message" className="text-lg font-bold text-navy">Message / Additional Details</Label>
                       <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your needs (e.g., number of items, specific fabrics, pickup location...)"
                          className="min-h-[150px] rounded-2xl border-2 focus:border-primary text-lg p-5"
                       />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-16 rounded-2xl font-black text-xl shadow-premium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> Preparing...</>
                      ) : (
                        <><Send className="mr-2 h-6 w-6" /> Submit Quote Request</>
                      )}
                    </Button>
                  </form>
               </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-navy text-white text-center">
              <p className="font-bold text-lg mb-2 text-primary-bright">Need a detailed quote?</p>
              <p className="text-gray-300 font-medium max-w-2xl mx-auto">
                Our team is ready to provide you with a comprehensive breakdown. Contact us for bulk orders, special requests, and corporate accounts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
