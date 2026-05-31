"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getServicePrices() {
  try {
    const prices = await prisma.servicePrice.findMany({
      orderBy: [
        { category: 'asc' },
        { sn: 'asc' }
      ]
    });

    // Convert Decimal to Number for client components
    const serializedPrices = prices.map(price => ({
      ...price,
      amount: Number(price.amount)
    }));

    return { success: true, data: serializedPrices };
  } catch (error) {
    console.error("Failed to fetch prices:", error);
    return { success: false, error: "Failed to fetch prices" };
  }
}

export async function updateServicePrice(id: string, amount: number) {
  try {
    const updatedPrice = await prisma.servicePrice.update({
      where: { id },
      data: { amount }
    });

    revalidatePath("/admin/prices");
    revalidatePath("/prices");

    return {
      success: true,
      data: {
        ...updatedPrice,
        amount: Number(updatedPrice.amount)
      }
    };
  } catch (error) {
    console.error("Failed to update price:", error);
    return { success: false, error: "Failed to update price" };
  }
}
