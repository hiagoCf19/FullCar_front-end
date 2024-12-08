import { cn } from "@/app/lib/utils";
const Loading = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 dark:border-blue-500 border-primary",
        className
      )}
    ></div>
  );
};

export default Loading;
