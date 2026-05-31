"use client";

import React, { useState, useEffect } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Shirt, Scissors, ChevronRight, Loader2 } from "lucide-react";
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
import { getServicePrices } from "@/actions/prices";

interface SerializedServicePrice {
  id: string;
  category: string;
  sn: number;
  description: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

export default function PricesPage() {
  const [search, setSearch] = useState("");
  const [prices, setPrices] = useState<SerializedServicePrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPrices() {
      setLoading(true);
      const result = await getServicePrices();
      if (result.success) {
        setPrices(result.data as SerializedServicePrice[] || []);
      }
      setLoading(false);
    }
    loadPrices();
  }, []);

  const filteredWashDry = prices.filter((item) =>
    item.category === "WASHING_DRYING" &&
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  const filteredIroning = prices.filter((item) =>
    item.category === "IRONING" &&
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

            {loading ? (
              <div className="flex flex-col items-center justify-center py-24">
                <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                <p className="text-gray-500 font-bold italic text-lg">Fetching latest prices...</p>
              </div>
            ) : (
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
                              <TableCell className="font-bold text-gray-400 pl-8 py-5">{item.sn}</TableCell>
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
                              <TableCell className="font-bold text-gray-400 pl-8 py-5">{item.sn}</TableCell>
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
            )}

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
