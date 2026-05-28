"use client"

import * as z from "zod"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"

import { RegisterSchema } from "@/lib/schemas"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { register } from "@/actions/auth"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("")
    setSuccess("")

    startTransition(() => {
      register(values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
    })
  }

  return (
    <Card className="w-full max-w-md shadow-premium border-none rounded-3xl overflow-hidden">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-black tracking-tighter text-navy uppercase">
          Create <span className="text-primary">Account</span>
        </CardTitle>
        <CardDescription className="text-gray-500 font-medium">
          Sign up to start booking your laundry services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-navy uppercase tracking-wider text-xs">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="John Doe"
                        className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-navy uppercase tracking-wider text-xs">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="john.doe@example.com"
                        type="email"
                        className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-navy uppercase tracking-wider text-xs">Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="••••••••"
                        type="password"
                        className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {error && (
              <div className="bg-destructive/15 p-3 rounded-xl flex items-center gap-x-2 text-sm text-destructive font-medium">
                <p>{error}</p>
              </div>
            )}
            {success && (
              <div className="bg-success/15 p-3 rounded-xl flex items-center gap-x-2 text-sm text-success font-medium">
                <p>{success}</p>
              </div>
            )}
            <Button
              disabled={isPending}
              type="submit"
              variant="primary"
              className="w-full h-12 text-md font-black uppercase tracking-wider rounded-xl shadow-premium"
            >
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="text-sm text-gray-500 font-medium text-center w-full">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary hover:underline font-bold">
            Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
