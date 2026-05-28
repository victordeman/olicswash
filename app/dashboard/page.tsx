import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { StatsCards } from "@/components/dashboard/StatsCards"
import { RecentOrders } from "@/components/dashboard/RecentOrders"
import { ProfileForm } from "@/components/dashboard/ProfileForm"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/auth/login")
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      orders: {
        orderBy: { createdAt: "desc" },
        include: { orderItems: { include: { service: true } } }
      }
    }
  })

  if (!user) {
    redirect("/auth/login")
  }

  const stats = {
    totalOrders: user.orders.length,
    activeOrders: user.orders.filter(o => !["DELIVERED", "CANCELLED"].includes(o.status)).length,
    completedOrders: user.orders.filter(o => o.status === "DELIVERED").length,
    totalSpent: user.orders
      .filter(o => o.paymentStatus === "PAID")
      .reduce((sum, o) => sum + Number(o.totalAmount), 0)
  }

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      <DashboardHeader user={user} />

      <main className="container mx-auto px-4 -mt-8">
        <StatsCards stats={stats} />

        <div className="mt-12">
          <Tabs defaultValue="orders" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="bg-white p-1 h-14 rounded-2xl shadow-premium border-none">
                <TabsTrigger
                  value="orders"
                  className="px-8 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-bold transition-all"
                >
                  My Orders
                </TabsTrigger>
                <TabsTrigger
                  value="profile"
                  className="px-8 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-bold transition-all"
                >
                  Profile Settings
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="orders" className="space-y-6">
              <RecentOrders orders={user.orders} />
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <div className="max-w-2xl mx-auto">
                <ProfileForm user={user} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
