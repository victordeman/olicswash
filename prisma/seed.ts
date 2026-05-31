import { PrismaClient } from "@prisma/client"
import { WASH_DRY_PRICES, IRONING_PRICES } from "../lib/pricing-data"

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding prices...")

  try {
    // Clear existing prices
    await prisma.servicePrice.deleteMany()

    // Seed WASHING_DRYING prices
    for (const item of WASH_DRY_PRICES) {
      await prisma.servicePrice.create({
        data: {
          category: "WASHING_DRYING",
          sn: item.id,
          description: item.description,
          amount: item.amount,
        },
      })
    }

    // Seed IRONING prices
    for (const item of IRONING_PRICES) {
      await prisma.servicePrice.create({
        data: {
          category: "IRONING",
          sn: item.id,
          description: item.description,
          amount: item.amount,
        },
      })
    }

    console.log("Seeding completed successfully.")
  } catch (error) {
    console.error("Seeding failed:", error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
