import Link from "next/link";
import { CheckCircle2, ShoppingBag, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center animate-in zoom-in duration-500">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 className="h-12 w-12" />
        </div>

        <h1 className="text-4xl font-black text-navy mb-4">Order Placed!</h1>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          Thank you for choosing OLICS WASH. Your laundry pickup has been scheduled successfully.
        </p>

        <div className="space-y-4">
          <Link href="/dashboard" className="block">
            <Button size="lg" className="w-full h-14 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20">
              <ShoppingBag className="mr-2 h-5 w-5" /> View My Orders
            </Button>
          </Link>

          <Link href="/" className="block">
            <Button size="lg" variant="outline" className="w-full h-14 rounded-2xl font-bold text-lg">
              Return Home <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <div className="pt-8 border-t mt-8">
            <p className="text-sm text-gray-400 mb-4">Need immediate assistance?</p>
            <a href="https://wa.me/2348032399944">
              <Button variant="whatsapp" className="w-full h-12 rounded-xl font-bold">
                <MessageSquare className="mr-2 h-5 w-5" /> Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
