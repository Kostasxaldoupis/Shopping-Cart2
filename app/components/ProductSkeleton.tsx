import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <div className="rounded-xl border p-4">
      <div className="space-y-4">
        <Skeleton className="aspect-square w-full rounded-lg" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-5 w-1/4" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
}
