"use client";

import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";

import { products } from "@/app/data/products";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button } from "@/components/ui/button";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();

  const product = products.find((p) => p.id === id);

  if (!product) return null;

  return (
    <div className="flex gap-4 rounded-lg border p-4">
      <Image
        src={product.image}
        alt={product.name}
        width={80}
        height={80}
        className="rounded-md object-cover"
      />

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-semibold">{product.name}</h3>

          <p className="text-sm text-muted-foreground">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => decreaseQuantity(id)}
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span className="w-8 text-center font-medium">
              {quantity}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={() => increaseQuantity(id)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="destructive"
            size="icon"
            onClick={() => removeFromCart(id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}