import { Skeleton } from "./ui/skeleton";

export default function LikesSkeleton() {
  return (
    <div className="group rounded-xl">
      <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
        <Skeleton className="absolute h-full w-full object-cover object-center" />
        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--muted)/0),hsl(var(--muted)/0.4),hsl(var(--muted)/0.8)_100%)] mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
          <Skeleton className="mb-2 h-6 w-3/4 pt-4 font-semibold md:mb-3 md:pt-4 lg:pt-4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <Skeleton className="absolute right-4 top-4 h-8 w-8 rounded-full" />
      </div>
    </div>
  );
}
