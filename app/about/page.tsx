
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@base-ui/react";
import { Info, ShieldCheck, GraduationCap } from "lucide-react";


export default function About() {
  return (
    <>
      {/* <Header /> */}

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight">About</h1>

          <p className="mt-3 text-muted-foreground">
            Learn more about this project and its purpose.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              <CardTitle>Educational Project</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              This website was built as a portfolio and educational project to
              demonstrate modern web development using Next.js, TypeScript,
              Tailwind CSS, shadcn/ui, and Stripe Checkout.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <CardTitle>Payments</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              No real payments are processed on this website. The checkout
              experience uses Stripe&apos;s test environment (sandbox) for
              demonstration purposes only.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Info className="h-6 w-6 text-primary" />
              <CardTitle>Disclaimer</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              The products displayed on this website are fictional examples used
              to showcase e-commerce functionality. This project is not intended
              for commercial use.
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
