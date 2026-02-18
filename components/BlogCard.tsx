// components/BlogCard.tsx
import React from "react";

interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  content: string;
  published?: boolean;
}

export default function BlogCard({
  title,
  author,
  date,
  content,
  published = true,
}: BlogCardProps) {
  return (
    <article
      className="
        rounded-xl
        bg-linear-to-br from-blue-500 to-blue-600
        p-6
        text-white
        shadow-lg
        transition
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-blue-100 mb-4">
        oleh {author} - dibuat {new Date(date).toLocaleDateString()}
      </p>
      <p className="text-sm text-blue-50 line-clamp-3">{content}</p>
      {published && (
        <div className="mt-6">
          <span className="inline-block text-xs font-medium bg-white/20 px-3 py-1 rounded-full">
            Published
          </span>
        </div>
      )}
    </article>
  );
}
