import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <CheckCircle2 className="mb-6 h-20 w-20 text-green-500" />

      <h1 className="text-4xl font-bold">
        Payment Successful!
      </h1>

      <p className="mt-4 text-muted-foreground">
        Thank you for your purchase. Your order has been received and a
        confirmation email has been sent to your email address.
      </p>

      <Button className="mt-8">
        <Link href="/store">Continue Shopping</Link>
      </Button>
    </main>
  );
}