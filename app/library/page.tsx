"use client";

import { useState } from "react";
import { useInfiniteBooks } from "@/hooks/useInfiniteBooks";
import BookGrid from "@/components/BookGrid";
import SearchBar from "@/components/SearchBar";
import Loader from "@/components/Loader";

export default function LibraryPage() {
  const [query, setQuery] = useState("science");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isError,
  } = useInfiniteBooks(query);

  if (isError) {
    return (
      <div className="p-4 text-red-500">
        Failed to load books. Try again.
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
   
      <SearchBar setQuery={setQuery} />

      
      {isLoading ? (
        <Loader />
      ) : (
        <>
         
          <BookGrid
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />

        
          {isFetchingNextPage && (
            <div className="mt-4">
              <Loader />
            </div>
          )}

       
          {!hasNextPage && (
            <p className="text-center text-gray-500 mt-4">
              No more books
            </p>
          )}
        </>
      )}
    </div>
  );
}