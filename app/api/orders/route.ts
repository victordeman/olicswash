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

    const order = await prisma.order.create({
      data: {
        customerName: fullName,
        customerPhone: phone,
        pickupAddress,
        deliveryAddress,
        totalAmount,
        status: "PENDING",
        paymentStatus: "PAID",
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
