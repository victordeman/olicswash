"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import * as z from "zod"

const ProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional(),
  whatsappNumber: z.string().optional(),
})

export const updateProfile = async (values: z.infer<typeof ProfileSchema>) => {
  const session = await auth()

  if (!session?.user?.id) {
    return { error: "Unauthorized" }
  }

  const validatedFields = ProfileSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        ...validatedFields.data,
      },
    })

    revalidatePath("/dashboard")
    return { success: "Profile updated!" }
  } catch (error) {
    return { error: "Something went wrong!" }
  }
}
