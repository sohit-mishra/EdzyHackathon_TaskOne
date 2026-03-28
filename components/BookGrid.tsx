"use client";

import { useRef, useEffect } from "react";
import BookCard from "./BookCard";

export default function BookGrid({
  data,
  fetchNextPage,
  hasNextPage,
}: any) {
  const loadMoreRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasNextPage]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
        {data?.pages.map((page: any) =>
          page.books.map((book: any, i: number) => (
            <BookCard key={i} book={book} />
          ))
        )}
      </div>

      <div ref={loadMoreRef} className="h-10" />
    </>
  );
}