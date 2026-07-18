"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Header() {
  const { cartQuantity, openCart } = useShoppingCart();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Football<span className="text-primary">Store</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>

          <Link href="/store">
            <Button variant="ghost">Store</Button>
          </Link>

          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
        </nav>

        {/* Cart */}
        <Button
          variant="outline"
          size="icon"
          className="relative"
          onClick={openCart}
        >
          <ShoppingCart className="h-5 w-5" />

          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {cartQuantity}
          </span>
        </Button>
      </div>
    </header>
  );
}
