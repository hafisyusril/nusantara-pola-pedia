import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/lib/posts";

export default async function HomePage() {
  const { data } = await getBlogs();

  return (
    <main  >
      <h1 className="text-3xl font-bold mb-8">Blog & News</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((post: any) => (
          <BlogCard
            key={post.id}
            title={post.title}
            author={post.author.name}
            date={post.createdAt}
            content={post.content}
            published={post.published}
          />
        ))}
      </div>
    </main>
  );
}


