"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loader() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="space-y-2">
          {/* Image skeleton */}
          <Skeleton className="w-full h-[250px] rounded-xl" />

          {/* Title */}
          <Skeleton className="h-4 w-[80%]" />

          {/* Author */}
          <Skeleton className="h-3 w-[60%]" />

          {/* Tags */}
          <div className="flex gap-2">
            <Skeleton className="h-3 w-10" />
            <Skeleton className="h-3 w-10" />
            <Skeleton className="h-3 w-10" />
          </div>
        </div>
      ))}
    </div>
  );
}