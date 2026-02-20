// components/BlogCard.tsx
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  published?: boolean;
}

export default function BlogCard({
  id,
  title,
  author,
  date,
  content,
  published = true,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
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
          cursor-pointer
        "
      >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-blue-100 mb-4">
          {author}, {new Date(date).toLocaleString()}
        </p>
        <p className="text-sm text-blue-50 line-clamp-3">{content}</p>
      </article>
    </Link>
  );
}
