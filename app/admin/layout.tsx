import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Tag,
  ShoppingBag,
  Users,
  LogOut,
  Settings,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Manage Prices", href: "/admin/prices", icon: Tag },
  { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Users", href: "/admin/users", icon: Users },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex w-72 flex-col bg-navy text-white">
        <div className="p-8">
          <Link href="/" className="flex items-center space-x-1 group">
            <span className="text-2xl font-black tracking-tighter text-white">
              OLICS<span className="text-primary-bright">WASH</span>
            </span>
          </Link>
          <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">Admin Panel</p>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-4 px-4 py-4 rounded-xl font-bold text-gray-300 hover:bg-white/10 hover:text-white transition-all group"
              >
                <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto border-t border-white/10">
          <Link href="/admin/settings">
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/10 h-12 gap-4 rounded-xl">
              <Settings className="h-5 w-5" />
              Settings
            </Button>
          </Link>
          <form action="/api/auth/signout" method="POST">
             <Button variant="ghost" type="submit" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20 h-12 gap-4 rounded-xl mt-2">
                <LogOut className="h-5 w-5" />
                Logout
              </Button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden h-16 bg-white border-b flex items-center justify-between px-6">
          <span className="text-xl font-black tracking-tighter text-navy">
            OLICS<span className="text-primary-bright">WASH</span>
          </span>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-navy" />
          </Button>
        </header>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
