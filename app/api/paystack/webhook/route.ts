import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const signature = req.headers.get("x-paystack-signature");

  if (!signature) {
    return new NextResponse("Invalid signature", { status: 400 });
  }

  // Verify signature with secret key
  // ... verification logic ...

  if (body.event === "charge.success") {
    // Update order status in DB
    const reference = body.data.reference;
    console.log(`Payment successful for reference: ${reference}`);
  }

  return new NextResponse("OK", { status: 200 });
}
