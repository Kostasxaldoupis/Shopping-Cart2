"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "../data/products";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useShoppingCart();

  return (
    <Card className="overflow-hidden transition hover:-translate-y-1 hover:border-primary">
      <CardContent className="p-0">
        <Link href={`/store/${product.name.toLocaleLowerCase()}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="aspect-square w-full object-cover"
          />
        </Link>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-4 p-5">
        <div>
          <h3 className="font-semibold">{product.name}</h3>

          <p className="text-primary font-medium">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <Button className="w-full" onClick={() => addToCart(product.id)}>
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
