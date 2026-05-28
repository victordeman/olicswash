import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
      <Card className="w-full max-w-md shadow-premium border-none rounded-3xl overflow-hidden">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-black tracking-tighter text-navy uppercase">
            Reset <span className="text-primary">Password</span>
          </CardTitle>
          <CardDescription className="text-gray-500 font-medium">
            Enter your email and we&apos;ll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold text-navy uppercase tracking-wider text-xs">Email Address</Label>
              <Input
                id="email"
                placeholder="john.doe@example.com"
                type="email"
                className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all rounded-xl"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              className="w-full h-12 text-md font-black uppercase tracking-wider rounded-xl shadow-premium"
            >
              Send Reset Link
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-sm text-gray-500 font-medium text-center w-full">
            Remember your password?{" "}
            <Link href="/auth/login" className="text-primary hover:underline font-bold">
              Back to Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
