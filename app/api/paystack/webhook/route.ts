import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.json();
  const signature = req.headers.get("x-paystack-signature");
  const secret = process.env.PAYSTACK_SECRET_KEY;

  if (!signature || !secret) {
    return new NextResponse("Invalid request", { status: 400 });
  }

  // Verify signature
  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(body))
    .digest("hex");

  if (hash !== signature) {
    return new NextResponse("Invalid signature", { status: 401 });
  }

  if (body.event === "charge.success") {
    const { reference } = body.data;

    try {
      await prisma.order.update({
        where: { paymentReference: reference },
        data: {
          paymentStatus: "PAID",
          status: "PICKUP_SCHEDULED"
        }
      });
      console.log(`Payment verified and order updated for reference: ${reference}`);
    } catch (error) {
      console.error(`Error updating order for reference ${reference}:`, error);
      // We still return 200 to Paystack as we received the webhook
    }
  }

  return new NextResponse("OK", { status: 200 });
}
