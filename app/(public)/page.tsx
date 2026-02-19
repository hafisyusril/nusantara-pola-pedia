import BlogCard from "@/components/BlogCard";
import { getPosts } from "@/lib/posts";
import { Post } from "@/types/posts";
import Image from "next/image";

// Revalidate homepage every 60 seconds (ISR)
export const revalidate = 60;

export default async function HomePage() {
  let data: Post[] = [];
  
  try {
    const response = await getPosts()
    data = response.data || []
    console.log("[HomePage] Loaded posts:", data.length);
  } catch (error) {
    console.error("[HomePage] Failed to fetch posts:", error)
    // Return empty data, halaman tetap render
  }

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen flex items-center ">
        {/* Background Image */}
        <Image
          src="/hero-polapedia.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Hero Text */}
        <div className="relative z-10 text-center md:pl-25 px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-200 leading-tight">
            Empower your business,
            <br />
            <span className="text-blue-500">With us...</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Insights, strategies, and news to help your business grow faster in
            the digital era.
          </p>
        </div>

        {/* Gradient ke putih */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-white" />
      </section>

      {/* ================= BLOG SECTION ================= */}
      <section className="bg-white py-14">
        <main className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Blog & News</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((post: Post) => (
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
      </section>
    </>
  );
}
