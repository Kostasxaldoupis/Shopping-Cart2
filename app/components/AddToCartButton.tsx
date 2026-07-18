"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface AddToCartButtonProps {
  id: number;
}

export default function AddToCartButton({
  id,
}: AddToCartButtonProps) {
  const { addToCart } = useShoppingCart();

  return (
    <Button size="lg" onClick={() => addToCart(id)}>
      <ShoppingBag className="mr-2 h-5 w-5" />
      Add to Cart
    </Button>
  );
}