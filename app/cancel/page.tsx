import Link from "next/link";
import { XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CancelPage() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <XCircle className="mb-6 h-20 w-20 text-red-500" />

      <h1 className="text-4xl font-bold">
        Payment Cancelled
      </h1>

      <p className="mt-4 text-muted-foreground">
        Your payment was cancelled. No money has been charged.
      </p>

      <Button  className="mt-8">
        <Link href="/store">Return to Store</Link>
      </Button>
    </main>
  );
}