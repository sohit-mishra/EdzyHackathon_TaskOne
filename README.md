# 📚 Infinite Open Library Explorer

A high-performance, infinite-scrolling book explorer built using
**Next.js (App Router)**, **TanStack Query**, **React Virtual**, and
**shadcn/ui**.

------------------------------------------------------------------------

## 🚀 Features

-   🔍 Search books using Open Library API
-   ♾️ Infinite scrolling with pagination
-   ⚡ Virtualized rendering for 1000+ items
-   🎨 Responsive UI (Mobile, Tablet, Desktop)
-   🌙 Dark/Light mode support
-   🧠 Debounced search (400ms)
-   🧩 Clean architecture with reusable components

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   Next.js (App Router + TypeScript)
-   TanStack Query (React Query)
-   React Virtual
-   Tailwind CSS
-   shadcn/ui
-   Axios

------------------------------------------------------------------------

## 📂 Folder Structure

```
project/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── library/
│       └── page.tsx
├── components/
│   ├── BookCard.tsx
│   ├── BookGrid.tsx
│   ├── Loader.tsx
│   ├── SearchBar.tsx
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── skeleton.tsx
├── hooks/
│   └── useInfiniteBooks.ts
├── lib/
│   ├── openLibrary.ts
│   └── utils.ts
├── providers/
│   └── ReactQueryProvider.tsx
├── public/
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

------------------------------------------------------------------------

## ⚙️ Installation

```bash
git clone https://github.com/sohit-mishra/EdzyHackathon_TaskOne.git
cd EdzyHackathon_TaskOne
npm install
npm run dev
```

------------------------------------------------------------------------

## ▶️ Run Project

``` bash
npm run dev
```

Open in browser:

    http://localhost:3000/library

------------------------------------------------------------------------

## 🌐 API Used

-   Open Library Search API\
    https://openlibrary.org/search.json?q=<query>&page=<n>

------------------------------------------------------------------------

## ⚡ Performance Strategy

-   Infinite scroll using Intersection Observer
-   Virtualization using React Virtual
-   Cached API calls via React Query
-   Fixed image aspect ratio to avoid layout shifts

------------------------------------------------------------------------

## 🎯 Bonus Features

-   Sort by year (asc/desc)
-   Back to top button
-   URL query persistence (?q=search)
-   Prefetch next page
-   Placeholder image fallback

------------------------------------------------------------------------

## 📌 Notes

-   Default search query: `science`
-   20 items fetched per page
-   Fully responsive layout using Tailwind grid

------------------------------------------------------------------------

## 👨‍💻 Author

Sohit Mishra

------------------------------------------------------------------------

## 📄 License

This project is for educational and hackathon purposes.
