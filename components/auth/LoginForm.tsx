"use client"

import * as z from "zod"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"

import { LoginSchema } from "@/lib/schemas"
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
import { login } from "@/actions/auth"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("")

    startTransition(() => {
      login(values)
        .then((data) => {
          setError(data?.error)
        })
    })
  }

  return (
    <Card className="w-full max-w-md shadow-premium border-none rounded-3xl overflow-hidden">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-black tracking-tighter text-navy uppercase">
          Welcome <span className="text-primary">Back</span>
        </CardTitle>
        <CardDescription className="text-gray-500 font-medium">
          Log in to manage your laundry orders
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
            <div className="text-right">
              <Link href="/auth/forgot-password" className="text-sm font-bold text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button
              disabled={isPending}
              type="submit"
              variant="primary"
              className="w-full h-12 text-md font-black uppercase tracking-wider rounded-xl shadow-premium"
            >
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="text-sm text-gray-500 font-medium text-center w-full">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="text-primary hover:underline font-bold">
            Register
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
