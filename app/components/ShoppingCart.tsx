"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { products } from "../data/products";

import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

export default function ShoppingCart() {
  const { isOpen, closeCart, cartItems } = useShoppingCart();

  const total = cartItems.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);

    if (!product) return sum;

    return sum + product.price * item.quantity;
  }, 0);

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeCart();
      }}
    >
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-bold">Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} quantity={item.quantity} />
          ))}
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="mb-4 flex items-center justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Button
            className="w-full"
            size="lg"
            disabled={cartItems.length === 0}
            onClick={async () => {
              const response = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(cartItems),
              });

              const data = await response.json();

              window.location.href = data.url;
            }}
          >
            Proceed to Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
