import Stripe from "stripe";
import { NextResponse } from "next/server";
import { products } from "@/app/data/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const cartItems = await req.json();

    // Validate input
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json(
        { error: "Invalid cart items" },
        { status: 400 },
      );
    }

    const line_items = cartItems.map(
      (item: { id: number; quantity: number }) => {
        const product = products.find((p) => p.id === item.id);

        if (!product) {
          throw new Error(`Product with id ${item.id} not found.`);
        }

        return {
          quantity: item.quantity,
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              // Optional: add images, description, etc.
              // images: product.images ? [product.images[0]] : undefined,
            },
            unit_amount: Math.round(product.price * 100), // Convert to cents
          },
        };
      },
    );

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
      // success_url: "http://localhost:3000/success",
      // cancel_url: "http://localhost:3000/cancel",
      // Optional: Add customer email, shipping, etc.
      // customer_email: "customer@example.com",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
