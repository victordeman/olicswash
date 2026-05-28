import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Clock, CheckCircle2, Wallet } from "lucide-react"

interface StatsCardsProps {
  stats: {
    totalOrders: number
    activeOrders: number
    completedOrders: number
    totalSpent: number
  }
}

export const StatsCards = ({ stats }: StatsCardsProps) => {
  const items = [
    {
      label: "Total Orders",
      value: stats.totalOrders,
      icon: ShoppingBag,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: "Active Orders",
      value: stats.activeOrders,
      icon: Clock,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      label: "Completed",
      value: stats.completedOrders,
      icon: CheckCircle2,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      label: "Total Spent",
      value: `₦${stats.totalSpent.toLocaleString()}`,
      icon: Wallet,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <Card key={index} className="border-none shadow-premium rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                  {item.label}
                </p>
                <h3 className="text-2xl font-black text-navy mt-1 tracking-tighter">
                  {item.value}
                </h3>
              </div>
              <div className={`h-12 w-12 rounded-2xl ${item.bg} flex items-center justify-center transition-transform group-hover:rotate-12`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
