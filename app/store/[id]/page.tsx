import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/app/components/AddToCartButton";
import { ArrowLeft, ShoppingBag } from "lucide-react";

import { products } from "@/app/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <Link href="/store">
        <Button variant="ghost" className="mb-10">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Store
        </Button>
      </Link>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Product Image */}
        <div className="overflow-hidden rounded-2xl border bg-card">
          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={700}
            className="aspect-square w-full object-cover transition duration-300 hover:scale-105"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <Badge className="mb-4 w-fit" variant="secondary">
            {product.category}
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight">{product.name}</h1>

          <p className="mt-6 text-4xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-8 max-w-xl leading-8 text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8 space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Brand:</span>{" "}
              {product.brand}
            </p>

            <p>
              <span className="font-medium text-foreground">Category:</span>{" "}
              {product.category}
            </p>
          </div>

          <div className="mt-10">
            <AddToCartButton id={product.id} />
          </div>
          
        </div>
      </div>
    </main>
  );
}
