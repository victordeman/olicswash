import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      phone,
      pickupAddress,
      deliveryAddress,
      pickupDate,
      pickupTime,
      deliveryDate,
      deliveryTime,
      paymentReference,
      totalAmount,
      services
    } = body;

    // Create the order
    // Note: We check if user exists or create a guest record if we had that logic,
    // for now we store customer details directly on the order.
    const order = await prisma.order.create({
      data: {
        customerName: fullName,
        customerPhone: phone,
        pickupAddress,
        deliveryAddress,
        totalAmount,
        status: "PENDING",
        paymentStatus: "PAID", // Initial state after client-side Paystack success
        paymentReference,
        pickupDate: new Date(pickupDate),
        pickupTime,
        deliveryDate: new Date(deliveryDate),
        deliveryTime,
        orderItems: {
          create: services.map((s: { id: string; quantity: number; price: number }) => ({
            serviceId: s.id,
            quantity: s.quantity,
            price: s.price
          }))
        }
      }
    });

    return NextResponse.json({ success: true, orderId: order.id });
  } catch (error) {
    console.error("ORDER_CREATE_ERROR", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
