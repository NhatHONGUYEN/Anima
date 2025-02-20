import { Skeleton } from "./ui/skeleton";

export function PopoverSkeleton() {
  return (
    <div className="w-96">
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  );
}
