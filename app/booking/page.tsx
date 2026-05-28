"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Shirt, Wind, Truck, Home, User, Layers, ShieldCheck,
  ChevronRight, ChevronLeft, Calendar, MapPin,
  Phone, User as UserIcon, CheckCircle2, CreditCard, Loader2, Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const bookingSchema = z.object({
  services: z.array(z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    quantity: z.number().min(1),
  })).min(1, "Please select at least one service"),
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  whatsappNumber: z.string().optional(),
  pickupAddress: z.string().min(10, "Pickup address is required"),
  deliveryAddress: z.string().min(10, "Delivery address is required"),
  pickupDate: z.string().min(1, "Pickup date is required"),
  pickupTime: z.string().min(1, "Pickup time is required"),
  deliveryDate: z.string().min(1, "Delivery date is required"),
  deliveryTime: z.string().min(1, "Delivery time is required"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const ALL_SERVICES = [
  { id: "s1", name: "Self Service Laundry", price: 2500, icon: User },
  { id: "s2", name: "Bulk Order / Wash", price: 15000, icon: Layers },
  { id: "s3", name: "Wash, Fold & Press", price: 3500, icon: Shirt },
  { id: "s4", name: "Pick Up & Delivery", price: 1500, icon: Truck },
  { id: "s5", name: "Drop-off Laundry", price: 2000, icon: Wind },
  { id: "s6", name: "Fumigation / Biohazard", price: 25000, icon: ShieldCheck },
  { id: "s7", name: "Industrial / Domestic Cleaning", price: 20000, icon: Home },
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const { register, control, handleSubmit, watch, formState: { errors }, trigger, setValue } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      services: [],
      fullName: "",
      email: "",
      phone: "",
      pickupAddress: "",
      deliveryAddress: "",
      pickupDate: "",
      pickupTime: "",
      deliveryDate: "",
      deliveryTime: "",
    }
  });

  const { append, remove } = useFieldArray({
    control,
    name: "services"
  });

  const selectedServices = watch("services");
  const subtotal = selectedServices.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger("services");
    } else if (step === 2) {
      isValid = await trigger(["fullName", "email", "phone", "pickupAddress", "deliveryAddress", "pickupDate", "pickupTime", "deliveryDate", "deliveryTime"]);
    } else {
      isValid = true;
    }

    if (isValid) setStep(step + 1);
    else toast.error("Please fill in all required fields correctly.");
  };

  const prevStep = () => setStep(step - 1);

  const toggleService = (service: typeof ALL_SERVICES[0]) => {
    const index = selectedServices.findIndex(s => s.id === service.id);
    if (index > -1) {
      remove(index);
    } else {
      append({ id: service.id, name: service.name, price: service.price, quantity: 1 });
    }
  };

  const updateQuantity = (id: string, delta: number) => {
    const index = selectedServices.findIndex(s => s.id === id);
    if (index === -1) return;

    const newQty = Math.max(1, selectedServices[index].quantity + delta);
    const updatedServices = [...selectedServices];
    updatedServices[index] = { ...updatedServices[index], quantity: newQty };

    setValue("services", updatedServices);
  };

  const handlePayment = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      const PaystackPop = (await import('@paystack/inline-js')).default;
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
        email: data.email,
        amount: subtotal * 100,
        currency: 'NGN',
        onSuccess: async (transaction: { reference: string }) => {
          const response = await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...data,
              paymentReference: transaction.reference,
              totalAmount: subtotal
            })
          });

          if (response.ok) {
            toast.success("Payment successful! Order placed.");
            router.push('/booking/success');
          } else {
            toast.error("Order failed but payment was successful. Please contact support.");
          }
        },
        onCancel: () => {
          toast.error("Payment cancelled.");
          setIsSubmitting(false);
        }
      });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during payment.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Book Your Service"
            subtitle="Complete the steps below to schedule your premium laundry or cleaning service."
          />

          {/* Progress Bar */}
          <div className="mb-12 flex items-center justify-between">
            {[1, 2, 3, 4].map((i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-2">
                  <div className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold transition-all",
                    step === i ? "bg-primary text-white scale-110 shadow-lg" :
                    step > i ? "bg-green-500 text-white" : "bg-white text-gray-400 border-2 border-gray-200"
                  )}>
                    {step > i ? <CheckCircle2 className="h-6 w-6" /> : i}
                  </div>
                  <span className={cn("text-xs font-bold uppercase tracking-wider", step === i ? "text-primary" : "text-gray-400")}>
                    {i === 1 ? "Services" : i === 2 ? "Logistics" : i === 3 ? "Review" : "Payment"}
                  </span>
                </div>
                {i < 4 && <div className={cn("h-1 flex-grow mx-4 rounded-full", step > i ? "bg-green-500" : "bg-gray-200")} />}
              </React.Fragment>
            ))}
          </div>

          <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit(handlePayment)}>

                {step === 1 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {ALL_SERVICES.map((service) => {
                        const selectedService = selectedServices.find(s => s.id === service.id);
                        const isSelected = !!selectedService;
                        return (
                          <div
                            key={service.id}
                            className={cn(
                              "rounded-2xl border-2 p-6 transition-all hover:border-primary",
                              isSelected ? "border-primary bg-primary/5" : "border-gray-100 bg-white"
                            )}
                          >
                            <div className="flex items-center gap-4">
                              <div
                                onClick={() => toggleService(service)}
                                className={cn("cursor-pointer rounded-xl p-3", isSelected ? "bg-primary text-white" : "bg-gray-100 text-primary")}
                              >
                                <service.icon className="h-6 w-6" />
                              </div>
                              <div className="flex-grow cursor-pointer" onClick={() => toggleService(service)}>
                                <h4 className="font-bold text-navy">{service.name}</h4>
                                <p className="text-sm font-black text-primary">₦{service.price.toLocaleString()}</p>
                              </div>
                              {isSelected && (
                                <div className="flex items-center gap-3 bg-white rounded-xl border p-1">
                                  <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); updateQuantity(service.id, -1); }}
                                    className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 font-bold"
                                  >-</button>
                                  <span className="font-black text-navy min-w-[20px] text-center">{selectedService.quantity}</span>
                                  <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); updateQuantity(service.id, 1); }}
                                    className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 font-bold"
                                  >+</button>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {errors.services && <p className="text-red-500 text-sm">{errors.services.message}</p>}
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="font-bold">Full Name</Label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input {...register("fullName")} placeholder="John Doe" className="pl-10 h-12 rounded-xl" />
                        </div>
                        {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label className="font-bold">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input {...register("email")} placeholder="john@example.com" className="pl-10 h-12 rounded-xl" />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label className="font-bold">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input {...register("phone")} placeholder="0803 123 4567" className="pl-10 h-12 rounded-xl" />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label className="font-bold">Pickup Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Textarea {...register("pickupAddress")} placeholder="Enter full address" className="pl-10 min-h-[100px] rounded-xl" />
                        </div>
                        {errors.pickupAddress && <p className="text-red-500 text-xs">{errors.pickupAddress.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label className="font-bold">Delivery Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Textarea {...register("deliveryAddress")} placeholder="Same as pickup or new address" className="pl-10 min-h-[100px] rounded-xl" />
                        </div>
                        {errors.deliveryAddress && <p className="text-red-500 text-xs">{errors.deliveryAddress.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                       <div className="space-y-4">
                          <h4 className="font-bold flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" /> Pickup Schedule</h4>
                          <div className="grid grid-cols-2 gap-4">
                             <Input type="date" {...register("pickupDate")} className="h-12 rounded-xl" />
                             <Input type="time" {...register("pickupTime")} className="h-12 rounded-xl" />
                          </div>
                       </div>
                       <div className="space-y-4">
                          <h4 className="font-bold flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" /> Delivery Schedule</h4>
                          <div className="grid grid-cols-2 gap-4">
                             <Input type="date" {...register("deliveryDate")} className="h-12 rounded-xl" />
                             <Input type="time" {...register("deliveryTime")} className="h-12 rounded-xl" />
                          </div>
                       </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="rounded-2xl bg-gray-50 p-6 space-y-4">
                      <h4 className="text-xl font-bold border-b pb-4">Order Summary</h4>
                      {selectedServices.map((s) => (
                        <div key={s.id} className="flex justify-between items-center py-2">
                          <div>
                            <p className="font-bold">{s.name}</p>
                            <p className="text-sm text-gray-500">Qty: {s.quantity}</p>
                          </div>
                          <p className="font-black text-primary">₦{(s.price * s.quantity).toLocaleString()}</p>
                        </div>
                      ))}
                      <div className="border-t pt-4 mt-4 flex justify-between items-center">
                        <p className="text-xl font-black">Estimated Total</p>
                        <p className="text-3xl font-black text-primary">₦{subtotal.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-8 text-center animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CreditCard className="h-12 w-12" />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-3xl font-black">Final Step</h3>
                       <p className="text-gray-500">Securely pay for your service using Paystack.</p>
                    </div>
                    <div className="rounded-3xl bg-navy p-10 text-white">
                       <p className="text-gray-400 uppercase font-bold tracking-widest mb-2">Total Payable</p>
                       <p className="text-5xl font-black">₦{subtotal.toLocaleString()}</p>
                    </div>
                  </div>
                )}

                <div className="mt-12 flex gap-4 pt-8 border-t">
                  {step > 1 && (
                    <Button type="button" variant="outline" size="lg" className="h-14 px-8 rounded-xl font-bold" onClick={prevStep}>
                      <ChevronLeft className="mr-2 h-5 w-5" /> Back
                    </Button>
                  )}
                  {step < 4 ? (
                    <Button type="button" size="lg" className="h-14 flex-grow rounded-xl font-bold" onClick={nextStep}>
                      Continue <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  ) : (
                    <Button type="submit" size="lg" className="h-14 flex-grow rounded-xl font-bold" disabled={isSubmitting}>
                      {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</> : "Pay Now with Paystack"}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
