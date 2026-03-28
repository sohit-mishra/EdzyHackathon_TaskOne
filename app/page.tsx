"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      
      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold"
      >
        📚 Open Library Explorer
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-500 max-w-xl"
      >
        Explore thousands of books with smooth infinite scrolling and blazing fast UI.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6"
      >
        <Link href="/library">
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Explore Books →
          </button>
        </Link>
      </motion.div>

    </div>
  );
}