import React from "react";
import {
  TrendingUp,
  ShoppingBag,
  Users,
  Activity
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Revenue",
    value: "₦0.00",
    description: "+0% from last month",
    icon: TrendingUp,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "New Orders",
    value: "0",
    description: "+0 from yesterday",
    icon: ShoppingBag,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Total Customers",
    value: "0",
    description: "+0 new users",
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Active Sessions",
    value: "0",
    description: "Live users on site",
    icon: Activity,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black text-navy">Admin Dashboard</h1>
          <p className="text-gray-500 font-medium">Welcome back! Here&apos;s an overview of your platform.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="border-none shadow-sm rounded-[2rem] overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                  {stat.title}
                </CardTitle>
                <div className={`${stat.bg} p-2 rounded-xl`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-black text-navy">{stat.value}</div>
                <p className="text-xs font-bold text-gray-400 mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm rounded-[2rem]">
          <CardHeader>
            <CardTitle className="text-xl font-black text-navy">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-gray-100 rounded-3xl">
              <p className="text-gray-400 font-bold italic">No recent activity to show.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-[2rem]">
          <CardHeader>
            <CardTitle className="text-xl font-black text-navy">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/50 transition-colors cursor-pointer group">
              <p className="font-black text-navy group-hover:text-primary transition-colors">Manage Prices</p>
              <p className="text-sm text-gray-500 font-medium">Update washing and ironing rates</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/50 transition-colors cursor-pointer group">
              <p className="font-black text-navy group-hover:text-accent transition-colors">View All Orders</p>
              <p className="text-sm text-gray-500 font-medium">Check status of pending pickups</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-500/50 transition-colors cursor-pointer group">
              <p className="font-black text-navy group-hover:text-purple-600 transition-colors">Platform Settings</p>
              <p className="text-sm text-gray-500 font-medium">Configure site-wide preferences</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
