"use client";

import React, { useState, useEffect } from "react";
import {
  getServicePrices,
  updateServicePrice
} from "@/actions/prices";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Save,
  Loader2,
  Shirt,
  Scissors,
  Search,
  RefreshCw
} from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

// Define a type for serialized ServicePrice
interface SerializedServicePrice {
  id: string;
  category: string;
  sn: number;
  description: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

const PriceSchema = z.object({
  amount: z.number().min(0, "Price must be at least 0"),
});

type PriceFormValues = z.infer<typeof PriceSchema>;

export default function AdminPricesPage() {
  const [prices, setPrices] = useState<SerializedServicePrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    setLoading(true);
    const result = await getServicePrices();
    if (result.success) {
      setPrices(result.data as SerializedServicePrice[] || []);
    } else {
      toast.error(result.error || "Failed to load prices");
    }
    setLoading(false);
  };

  const handlePriceUpdate = (id: string, newAmount: number) => {
    setPrices(prev => prev.map(p => p.id === id ? { ...p, amount: newAmount } : p));
  };

  const washDryPrices = prices.filter(p => p.category === "WASHING_DRYING" && p.description.toLowerCase().includes(searchTerm.toLowerCase()));
  const ironingPrices = prices.filter(p => p.category === "IRONING" && p.description.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-navy">Manage Prices</h1>
          <p className="text-gray-500 font-medium">Update the service rates across the platform.</p>
        </div>
        <Button
          variant="outline"
          onClick={fetchPrices}
          disabled={loading}
          className="rounded-xl font-bold h-12"
        >
          {loading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : <RefreshCw className="h-5 w-5 mr-2" />}
          Refresh Data
        </Button>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search items..."
          className="pl-12 h-14 rounded-2xl border-none shadow-sm text-lg bg-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 bg-white rounded-[2rem] shadow-sm">
          <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
          <p className="text-gray-500 font-bold">Loading prices from database...</p>
        </div>
      ) : (
        <Tabs defaultValue="washing" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-gray-100 rounded-2xl h-16">
            <TabsTrigger
              value="washing"
              className="rounded-xl font-bold text-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
            >
              <Shirt className="mr-2 h-5 w-5" /> Washing / Drying
            </TabsTrigger>
            <TabsTrigger
              value="ironing"
              className="rounded-xl font-bold text-lg data-[state=active]:bg-white data-[state=active]:text-accent data-[state=active]:shadow-sm"
            >
              <Scissors className="mr-2 h-5 w-5" /> Ironing Only
            </TabsTrigger>
          </TabsList>

          <TabsContent value="washing">
            <PriceTable
              data={washDryPrices}
              accentColor="primary"
              onUpdate={handlePriceUpdate}
            />
          </TabsContent>

          <TabsContent value="ironing">
            <PriceTable
              data={ironingPrices}
              accentColor="accent"
              onUpdate={handlePriceUpdate}
            />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}

interface PriceTableProps {
  data: SerializedServicePrice[];
  accentColor: "primary" | "accent";
  onUpdate: (id: string, amount: number) => void;
}

function PriceTable({ data, accentColor, onUpdate }: PriceTableProps) {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-gray-100">
      <Table>
        <TableHeader className="bg-gray-50/50">
          <TableRow className="hover:bg-transparent border-b-2">
            <TableHead className="w-[80px] font-black text-navy py-6 pl-8">S/N</TableHead>
            <TableHead className="font-black text-navy py-6">Description</TableHead>
            <TableHead className="w-[200px] font-black text-navy py-6">Amount (₦)</TableHead>
            <TableHead className="w-[150px] text-right font-black text-navy py-6 pr-8">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((item) => (
              <PriceRow
                key={item.id}
                item={item}
                accentColor={accentColor}
                onUpdate={onUpdate}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-12 text-gray-500 font-medium">
                No items found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function PriceRow({ item, accentColor, onUpdate }: {
  item: SerializedServicePrice,
  accentColor: "primary" | "accent",
  onUpdate: (id: string, amount: number) => void
}) {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<PriceFormValues>({
    resolver: zodResolver(PriceSchema),
    defaultValues: {
      amount: item.amount,
    },
  });

  const isDirty = form.formState.isDirty;

  async function onSubmit(values: PriceFormValues) {
    setIsPending(true);
    const result = await updateServicePrice(item.id, values.amount);
    if (result.success) {
      toast.success(`${item.description} updated`);
      onUpdate(item.id, values.amount);
      form.reset({ amount: values.amount });
    } else {
      toast.error(result.error || "Failed to update price");
    }
    setIsPending(false);
  }

  return (
    <TableRow className="group hover:bg-gray-50/50 transition-colors">
      <TableCell className="font-bold text-gray-400 pl-8 py-5">{item.sn}</TableCell>
      <TableCell className="font-bold text-navy py-5">{item.description}</TableCell>
      <TableCell className="py-5">
        <Form {...form}>
          <form id={`form-${item.id}`} onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <div className="relative w-full max-w-[160px]">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₦</span>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        disabled={isPending}
                        className="pl-8 font-black text-navy h-11 rounded-xl border-gray-200 focus:border-primary transition-all"
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </TableCell>
      <TableCell className="text-right py-5 pr-8">
        <Button
          form={`form-${item.id}`}
          type="submit"
          size="sm"
          className={`h-11 px-6 rounded-xl font-black ${
            isDirty
              ? (accentColor === 'primary' ? 'bg-primary hover:bg-primary/90' : 'bg-accent hover:bg-accent/90')
              : 'bg-gray-100 text-gray-400 hover:bg-gray-100'
          } transition-all`}
          disabled={!isDirty || isPending}
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save
            </>
          )}
        </Button>
      </TableCell>
    </TableRow>
  );
}
