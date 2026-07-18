"use client";
import Link from "next/link";

import { ArrowRight, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import HeroShowcase from "./components/HeroShowcase";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          <div>
            <Badge variant="secondary" className="mb-6">
              New Season Collection
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight lg:text-7xl">
              Everything you need for the beautiful game.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Explore premium football boots, match balls, jerseys, goalkeeper
              gloves, and training equipment designed for every player.
            </p>

            <div className="mt-8 flex gap-4">
              <Button size="lg">
                <Link href="/store">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* featured */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="mt-2 text-muted-foreground">
              Our most iconic products.
            </p>
          </div>

          <Button variant="ghost">
            <Link href="/store">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex justify-center">
          <HeroShowcase />
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <Truck className="mb-4 h-8 w-8 text-primary" />

              <h3 className="mb-2 text-lg font-semibold">Fast Shipping</h3>

              <p className="text-muted-foreground">
                Secure worldwide delivery with careful packaging.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <ShieldCheck className="mb-4 h-8 w-8 text-primary" />

              <h3 className="mb-2 text-lg font-semibold">Secure Payments</h3>

              <p className="text-muted-foreground">
                Checkout safely using Stripe.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <ShoppingBag className="mb-4 h-8 w-8 text-primary" />

              <h3 className="mb-2 text-lg font-semibold">Premium Quality</h3>

              <p className="text-muted-foreground">
                Carefully selected footballs inspired by legendary tournaments.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
