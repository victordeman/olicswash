import { User } from "@prisma/client"
import { LogOut, User as UserIcon } from "lucide-react"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

interface DashboardHeaderProps {
  user: User
}

export const DashboardHeader = ({ user }: DashboardHeaderProps) => {
  return (
    <div className="bg-navy-dark pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary-bright flex items-center justify-center shadow-vibrant">
              <UserIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">
                Hello, <span className="text-primary-bright">{user.name?.split(' ')[0]}</span>
              </h1>
              <p className="text-gray-400 font-medium mt-1">
                Manage your laundry orders and profile settings.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="border-white/10 text-white hover:bg-white/5 font-bold rounded-xl h-12 px-6"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}
