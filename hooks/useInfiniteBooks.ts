import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBooks } from "@/lib/openLibrary";

export const useInfiniteBooks = (query: string) => {
  return useInfiniteQuery({
    queryKey: ["books", query],
    queryFn: ({ pageParam }) =>
      fetchBooks({ pageParam, query }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextPage : undefined,
  });
};