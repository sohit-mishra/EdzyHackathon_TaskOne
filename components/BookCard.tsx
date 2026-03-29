"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Book = {
  title: string;
  cover_i?: number;
  author_name?: string[];
  subject?: string[];
};

export default function BookCard({ book }: { book: Book }) {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "/defaultbook.png";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="p-2">
        <div className="relative w-full h-[250px]">
          <Image
            src={cover}
            alt={book.title}
            fill
            className="object-cover rounded"
          />
        </div>

        <h2 className="font-bold mt-2 line-clamp-2">
          {book.title}
        </h2>

        <p className="text-sm text-gray-500">
          {book.author_name?.[0]}
        </p>

        <div className="flex flex-wrap gap-1 mt-2">
          {book.subject?.slice(0, 3).map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}