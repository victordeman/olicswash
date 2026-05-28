"use client"

import { Order, OrderItem, Service } from "@prisma/client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { OrderTrackingModal } from "./OrderTrackingModal"

type OrderWithItems = Order & {
  orderItems: (OrderItem & {
    service: Service
  })[]
}

interface RecentOrdersProps {
  orders: OrderWithItems[]
}

export const RecentOrders = ({ orders }: RecentOrdersProps) => {
  const [selectedOrder, setSelectedOrder] = useState<OrderWithItems | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING": return "bg-gray-100 text-gray-700 border-gray-200"
      case "PICKUP_SCHEDULED": return "bg-blue-100 text-blue-700 border-blue-200"
      case "IN_PROGRESS": return "bg-amber-100 text-amber-700 border-amber-200"
      case "READY_FOR_DELIVERY": return "bg-indigo-100 text-indigo-700 border-indigo-200"
      case "DELIVERED": return "bg-green-100 text-green-700 border-green-200"
      case "CANCELLED": return "bg-red-100 text-red-700 border-red-200"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "PAID": return "bg-green-500"
      case "UNPAID": return "bg-amber-500"
      case "FAILED": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <Card className="border-none shadow-premium rounded-3xl overflow-hidden">
      <CardHeader className="px-8 pt-8">
        <CardTitle className="text-2xl font-black text-navy uppercase tracking-tighter">
          Recent <span className="text-primary">Orders</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        {orders.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-gray-500 font-medium">You haven&apos;t placed any orders yet.</p>
            <Button variant="primary" className="mt-4 rounded-xl" asChild>
              <a href="/booking">Book Your First Wash</a>
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-gray-100">
                  <TableHead className="font-bold text-navy uppercase text-xs tracking-widest">Order ID</TableHead>
                  <TableHead className="font-bold text-navy uppercase text-xs tracking-widest">Date</TableHead>
                  <TableHead className="font-bold text-navy uppercase text-xs tracking-widest">Status</TableHead>
                  <TableHead className="font-bold text-navy uppercase text-xs tracking-widest">Payment</TableHead>
                  <TableHead className="font-bold text-navy uppercase text-xs tracking-widest">Amount</TableHead>
                  <TableHead className="text-right font-bold text-navy uppercase text-xs tracking-widest">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id} className="hover:bg-gray-50/50 border-gray-100 group transition-colors">
                    <TableCell className="font-bold text-navy">#{order.id.slice(-6).toUpperCase()}</TableCell>
                    <TableCell className="text-gray-500 font-medium">
                      {format(new Date(order.createdAt), "MMM d, yyyy")}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`rounded-full px-3 py-1 font-bold text-[10px] uppercase tracking-wider ${getStatusColor(order.status)}`}>
                        {order.status.replace(/_/g, ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${getPaymentStatusColor(order.paymentStatus)}`} />
                        <span className="text-xs font-bold text-navy uppercase">{order.paymentStatus}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-black text-navy">₦{Number(order.totalAmount).toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-xl hover:bg-primary/10 hover:text-primary"
                        onClick={() => setSelectedOrder(order)}
                      >
                        <Eye className="h-5 w-5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>

      <OrderTrackingModal
        order={selectedOrder}
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </Card>
  )
}
