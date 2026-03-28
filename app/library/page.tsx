"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInfiniteBooks } from "@/hooks/useInfiniteBooks";
import BookGrid from "@/components/BookGrid";
import SearchBar from "@/components/SearchBar";

export default function LibraryPage() {
  const [query, setQuery] = useState("science");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteBooks(query);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4"
    >
      <SearchBar setQuery={setQuery} />

      {isLoading ? (
        <p className="mt-4">Loading...</p>
      ) : (
        <BookGrid
          data={data}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      )}
    </motion.div>
  );
}