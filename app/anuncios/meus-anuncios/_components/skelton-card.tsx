import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/base_ui/ui/card";
import { Skeleton } from "@/app/base_ui/ui/skeleton";

const SkeltonCard = () => {
  return (
    <Card className="overflow-hidden bg-border/50 dark:bg-card/40 shadow-primary/20 shadow-lg border-none">
      <CardHeader className="p-0">
        <Skeleton className="h-48 w-full" /> {/* Image carousel placeholder */}
      </CardHeader>
      <CardContent className="px-4">
        <Skeleton className="h-3 w-3/4 mt-2" /> {/* Title placeholder */}
        <div className="mt-6 flex items-center justify-between mb-2">
          <Skeleton className="h-2 w-24" /> {/* Price placeholder */}
          <Skeleton className="h-2 w-20" />{" "}
          {/* Kilometers driven placeholder */}
        </div>
        <Skeleton className="h-2 w-48 mt-2" /> {/* Date placeholder */}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Skeleton className="h-2 w-16" /> {/* "Ver" button placeholder */}
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8" /> {/* Edit button placeholder */}
          <Skeleton className="h-8 w-8" /> {/* Delete button placeholder */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default SkeltonCard;
