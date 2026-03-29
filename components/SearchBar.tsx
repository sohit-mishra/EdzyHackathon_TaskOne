"use client";

import { Input } from "@/components/ui/input";
import { useDebounce } from "use-debounce";
import { useState, useEffect } from "react";

type Props = {
  setQuery: (value: string) => void;
};

export default function SearchBar({ setQuery }: Props) {
  const [text, setText] = useState("");
  const [debounced] = useDebounce(text, 400);

  useEffect(() => {
    setQuery(debounced || "science");
  }, [debounced, setQuery]);

  return (
    <div className="mx-auto my-10 w-full max-w-md">
      <Input
        placeholder="Search books..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}