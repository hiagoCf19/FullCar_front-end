import { cn } from "@/app/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md dark:bg-muted/50 bg-[#a7a7a7]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
