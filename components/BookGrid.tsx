"use client";

import { useRef, useEffect } from "react";
import BookCard from "./BookCard";

type Book = {
  title: string;
  cover_i?: number;
  author_name?: string[];
  subject?: string[];
};

type Page = {
  books: Book[];
};

type Props = {
  data: {
    pages: Page[];
  };
  fetchNextPage: () => void;
  hasNextPage: boolean;
};

export default function BookGrid({
  data,
  fetchNextPage,
  hasNextPage,
}: Props) {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    const current = loadMoreRef.current;

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
        {data?.pages.map((page, pageIndex) =>
          page.books.map((book, i) => (
            <BookCard key={`${pageIndex}-${i}`} book={book} />
          ))
        )}
      </div>

      <div ref={loadMoreRef} className="h-10" />
    </>
  );
}