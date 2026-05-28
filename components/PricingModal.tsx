"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface PriceRow {
  id: number;
  description: string;
  amount: number;
}

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  prices: PriceRow[];
}

export const PricingModal = ({ isOpen, onClose, title, prices }: PricingModalProps) => {
  const router = useRouter();

  const handleProceed = () => {
    onClose();
    router.push("/booking");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl bg-white">
        <DialogHeader className="p-8 pb-4 bg-gray-50/50">
          <DialogTitle className="text-2xl font-black text-navy">{title} — Price List</DialogTitle>
        </DialogHeader>

        <div className="flex-grow overflow-y-auto px-8 py-4">
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm bg-white">
            <Table>
              <TableHeader className="bg-gray-50/50">
                <TableRow className="hover:bg-transparent border-b-2">
                  <TableHead className="w-[60px] font-black text-navy py-4 pl-6">S/N</TableHead>
                  <TableHead className="font-black text-navy py-4">Description</TableHead>
                  <TableHead className="text-right font-black text-navy py-4 pr-6">Amount (₦)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prices.map((item, index) => (
                  <TableRow key={item.id} className="group hover:bg-primary/5 transition-colors">
                    <TableCell className="font-bold text-gray-400 pl-6 py-4">{index + 1}</TableCell>
                    <TableCell className="font-bold text-navy py-4">{item.description}</TableCell>
                    <TableCell className="text-right font-black text-primary py-4 pr-6">
                      {item.amount.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <DialogFooter className="p-8 pt-4 flex flex-col sm:flex-row gap-4 bg-gray-50/50">
          <Button variant="outline" onClick={onClose} className="h-14 px-8 rounded-xl font-bold border-gray-200">
            Close
          </Button>
          <Button onClick={handleProceed} className="h-14 px-8 rounded-xl font-bold flex-grow sm:flex-grow-0">
            Proceed to Book <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
