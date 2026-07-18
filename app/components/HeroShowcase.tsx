"use client";

import Image from "next/image";
import { products } from "@/app/data/products";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroCarousel() {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <div className="flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-3xl object-cover"
                priority
              />

              <div className="mt-6 text-center">
                <h2 className="text-2xl font-semibold">{product.name}</h2>

                <p className="mt-2 text-primary font-medium">
                  ${product.price.toFixed(2)}
                </p>

                <p className="mt-2 text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
