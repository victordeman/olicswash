"use client"

import { Order, OrderItem, Service } from "@prisma/client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CheckCircle2, Clock, Package, Truck, MapPin } from "lucide-react"

type OrderWithItems = Order & {
  orderItems: (OrderItem & {
    service: Service
  })[]
}

interface OrderTrackingModalProps {
  order: OrderWithItems | null
  isOpen: boolean
  onClose: () => void
}

export const OrderTrackingModal = ({ order, isOpen, onClose }: OrderTrackingModalProps) => {
  if (!order) return null

  const steps = [
    { status: "PENDING", label: "Order Placed", icon: Package, description: "Your order has been received and is waiting for pickup." },
    { status: "PICKUP_SCHEDULED", label: "Pickup Scheduled", icon: CalendarIcon, description: "A rider has been assigned to pick up your laundry." },
    { status: "IN_PROGRESS", label: "Cleaning in Progress", icon: Clock, description: "Your clothes are being professionally cleaned." },
    { status: "READY_FOR_DELIVERY", label: "Ready for Delivery", icon: Truck, description: "Cleaning complete! Your order is ready to be delivered." },
    { status: "DELIVERED", label: "Delivered", icon: CheckCircle2, description: "Laundry delivered successfully. Thank you for choosing OLICS WASH!" },
  ]

  const currentStatusIndex = steps.findIndex(s => s.status === order.status)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl rounded-3xl p-8 border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-navy uppercase tracking-tighter">
            Order <span className="text-primary">Tracking</span>
            <span className="ml-4 text-sm font-bold text-gray-400">#{order.id.slice(-8).toUpperCase()}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-8 space-y-12">
          {/* Tracking Timeline */}
          <div className="relative space-y-8">
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gray-100" />

            {steps.map((step, index) => {
              const isCompleted = index <= currentStatusIndex
              const isCurrent = index === currentStatusIndex
              const Icon = step.icon

              return (
                <div key={step.status} className="relative flex gap-6 items-start">
                  <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 ${
                    isCompleted ? "bg-primary text-white shadow-vibrant scale-110" : "bg-white text-gray-300 border-2 border-gray-100"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1 pt-1">
                    <h4 className={`text-lg font-black uppercase tracking-tight ${isCompleted ? "text-navy" : "text-gray-300"}`}>
                      {step.label}
                    </h4>
                    <p className={`text-sm mt-1 font-medium ${isCompleted ? "text-gray-500" : "text-gray-300"}`}>
                      {step.description}
                    </p>
                    {isCurrent && (
                      <span className="inline-flex mt-2 items-center rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary animate-pulse">
                        Current Status
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Order Summary */}
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
            <div className="space-y-4">
              <h5 className="font-black text-navy uppercase text-xs tracking-widest flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Pickup & Delivery
              </h5>
              <div className="space-y-3">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase">Pickup Address</p>
                  <p className="text-sm font-medium text-navy leading-relaxed">{order.pickupAddress}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase">Delivery Address</p>
                  <p className="text-sm font-medium text-navy leading-relaxed">{order.deliveryAddress}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-black text-navy uppercase text-xs tracking-widest flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" /> Services Ordered
              </h5>
              <div className="space-y-2">
                {order.orderItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <span className="font-bold text-navy">{item.quantity}x {item.service.name}</span>
                    <span className="font-medium text-gray-500">₦{Number(item.price).toLocaleString()}</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-black text-navy uppercase text-xs">Total Amount</span>
                  <span className="font-black text-primary text-lg">₦{Number(order.totalAmount).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
