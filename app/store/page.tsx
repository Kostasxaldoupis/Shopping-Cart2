import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default async function StorePage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Store</h1>

          <p className="mt-2 text-muted-foreground">
            Browse our collection of football products.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}