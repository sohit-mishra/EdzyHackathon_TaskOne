import axios from "axios";

export const fetchBooks = async ({ pageParam = 1, query = "science" }) => {
  const res = await axios.get(
    `https://openlibrary.org/search.json?q=${query}&page=${pageParam}`
  );

  return {
    books: res.data.docs,
    nextPage: pageParam + 1,
    hasMore: res.data.docs.length > 0,
  };
};