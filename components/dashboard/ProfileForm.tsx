"use client"

import * as z from "zod"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { User } from "@prisma/client"

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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { updateProfile } from "@/actions/profile"
import { toast } from "sonner"

const ProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional(),
  whatsappNumber: z.string().optional(),
})

interface ProfileFormProps {
  user: User
}

export const ProfileForm = ({ user }: ProfileFormProps) => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: user.name || "",
      phone: user.phone || "",
      whatsappNumber: user.whatsappNumber || "",
    },
  })

  const onSubmit = (values: z.infer<typeof ProfileSchema>) => {
    startTransition(() => {
      updateProfile(values)
        .then((data) => {
          if (data.error) {
            toast.error(data.error)
          }
          if (data.success) {
            toast.success(data.success)
          }
        })
    })
  }

  return (
    <Card className="border-none shadow-premium rounded-3xl overflow-hidden">
      <CardHeader className="p-8">
        <CardTitle className="text-2xl font-black text-navy uppercase tracking-tighter">
          Profile <span className="text-primary">Settings</span>
        </CardTitle>
        <CardDescription className="text-gray-500 font-medium">
          Keep your contact information up to date
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 pt-0">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-navy uppercase tracking-wider text-xs">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="08012345678"
                          className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsappNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-navy uppercase tracking-wider text-xs">WhatsApp Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="2348012345678"
                          className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              disabled={isPending}
              type="submit"
              variant="primary"
              className="w-full h-12 text-md font-black uppercase tracking-wider rounded-xl shadow-premium"
            >
              Save Changes
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
