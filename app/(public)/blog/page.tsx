import BlogCard from "@/components/BlogCard";

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function BlogPage() {
  const { data } = await getBlogs();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-300 mb-8">Blog & News</h1>

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
    </section>
  );
}
