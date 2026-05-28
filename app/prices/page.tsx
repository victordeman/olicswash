"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Shirt, Scissors, ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WASH_DRY_PRICES = [
  { id: 1, description: "Shirt / T-Shirt / Blouse (Folding)", amount: 1200 },
  { id: 2, description: "Shirt / T-Shirt / Blouse (Hanging)", amount: 1300 },
  { id: 3, description: "Trouser / Skirt (Folding)", amount: 1200 },
  { id: 4, description: "Trouser / Skirt (Hanging)", amount: 1300 },
  { id: 5, description: "Gown / Coverall", amount: 2250 },
  { id: 6, description: "Blazer / Jacket", amount: 3000 },
  { id: 7, description: "Native (Up & Down)", amount: 3000 },
  { id: 8, description: "Native (3 piece Agbada)", amount: 5500 },
  { id: 9, description: "Native (Top only)", amount: 2000 },
  { id: 10, description: "Bulk Wash & Dry", amount: 6000 },
  { id: 11, description: "Big Towel", amount: 3500 },
  { id: 12, description: "Small Towel", amount: 2500 },
  { id: 13, description: "Bed Sheets & Pillow cases", amount: 3500 },
  { id: 14, description: "Duvet", amount: 5000 },
  { id: 15, description: "Towel House Robe", amount: 3000 },
  { id: 16, description: "Foot Towel", amount: 2000 },
  { id: 17, description: "Curtain (Thick)", amount: 3000 },
  { id: 18, description: "Curtain (Light)", amount: 2500 },
  { id: 19, description: "Boxers / Underwear", amount: 900 },
  { id: 20, description: "Stocking (pair)", amount: 500 },
  { id: 21, description: "Stain Removing", amount: 3500 },
];

const IRONING_PRICES = [
  { id: 22, description: "Shirt / T-Shirt / Blouse", amount: 700 },
  { id: 23, description: "Trouser / Skirt", amount: 700 },
  { id: 24, description: "Gown / Coverall", amount: 1000 },
  { id: 25, description: "Blazer / Jacket", amount: 1500 },
  { id: 26, description: "Bed sheets & Pillow cases", amount: 900 },
  { id: 27, description: "Duvet Cover", amount: 1000 },
  { id: 28, description: "Curtain / Agbada", amount: 1500 },
  { id: 29, description: "Children School uniform", amount: 900 },
];

export default function PricesPage() {
  const [search, setSearch] = useState("");

  const filteredWashDry = WASH_DRY_PRICES.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  const filteredIroning = IRONING_PRICES.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeader
            title="Transparent Pricing"
            subtitle="Explore our competitive and transparent pricing for all your laundry needs."
            invert
            className="mb-0"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-12">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for an item (e.g. Shirt, Duvet...)"
                className="pl-12 h-14 rounded-2xl border-gray-200 bg-white shadow-sm text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <Tabs defaultValue="wash-dry" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-gray-100 rounded-2xl h-16">
                <TabsTrigger
                  value="wash-dry"
                  className="rounded-xl font-bold text-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
                >
                  <Shirt className="mr-2 h-5 w-5" /> Washing / Drying Only
                </TabsTrigger>
                <TabsTrigger
                  value="ironing"
                  className="rounded-xl font-bold text-lg data-[state=active]:bg-white data-[state=active]:text-accent data-[state=active]:shadow-sm"
                >
                  <Scissors className="mr-2 h-5 w-5" /> Ironing Only
                </TabsTrigger>
              </TabsList>

              <TabsContent value="wash-dry" className="animate-in fade-in-50 duration-500">
                <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
                  <Table>
                    <TableHeader className="bg-gray-50/50">
                      <TableRow className="hover:bg-transparent border-b-2">
                        <TableHead className="w-[80px] font-black text-navy py-6 pl-8">S/N</TableHead>
                        <TableHead className="font-black text-navy py-6">Description</TableHead>
                        <TableHead className="text-right font-black text-navy py-6 pr-8">Amount (₦)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredWashDry.length > 0 ? (
                        filteredWashDry.map((item) => (
                          <TableRow key={item.id} className="group hover:bg-primary/5 transition-colors">
                            <TableCell className="font-bold text-gray-400 pl-8 py-5">{item.id}</TableCell>
                            <TableCell className="font-bold text-navy py-5">{item.description}</TableCell>
                            <TableCell className="text-right font-black text-primary py-5 pr-8">
                              {item.amount.toLocaleString()}
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={3} className="text-center py-12 text-gray-500 font-medium">
                            No items found matching your search.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="ironing" className="animate-in fade-in-50 duration-500">
                <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
                  <Table>
                    <TableHeader className="bg-gray-50/50">
                      <TableRow className="hover:bg-transparent border-b-2">
                        <TableHead className="w-[80px] font-black text-navy py-6 pl-8">S/N</TableHead>
                        <TableHead className="font-black text-navy py-6">Description</TableHead>
                        <TableHead className="text-right font-black text-navy py-6 pr-8">Amount (₦)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredIroning.length > 0 ? (
                        filteredIroning.map((item) => (
                          <TableRow key={item.id} className="group hover:bg-accent/5 transition-colors">
                            <TableCell className="font-bold text-gray-400 pl-8 py-5">{item.id}</TableCell>
                            <TableCell className="font-bold text-navy py-5">{item.description}</TableCell>
                            <TableCell className="text-right font-black text-accent py-5 pr-8">
                              {item.amount.toLocaleString()}
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={3} className="text-center py-12 text-gray-500 font-medium">
                            No items found matching your search.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 p-8 rounded-3xl bg-blue-50 border border-blue-100">
              <p className="text-navy font-bold text-lg mb-2">Note:</p>
              <p className="text-gray-600 font-medium">
                Prices are subject to change. Contact us for bulk orders and special requests.
              </p>
            </div>

            <div className="mt-16 text-center">
              <Link href="/booking">
                <Button size="lg" className="h-16 px-12 text-xl font-black rounded-2xl shadow-premium group">
                  Book Now <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
