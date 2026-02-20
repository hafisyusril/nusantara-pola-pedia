import { getPostById } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  const publishDate = new Date(post.createdAt).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center text-blue-200 hover:text-white mb-4 transition"
          >
            <span className="mr-2">←</span> Kembali ke Beranda
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-blue-400 pt-4 mt-4">
            <div>
              <p className="text-blue-100 mb-2">Oleh {post.author.name}</p>
              <time className="text-blue-200 text-sm">{publishDate}</time>
            </div>
            {!post.published && (
              <div className="mt-4 md:mt-0 inline-block bg-yellow-500 text-yellow-900 px-3 py-1 rounded text-sm font-semibold">
                Draft
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            {post.content}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-300" />

        {/* Author Info */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            Tentang Penulis
          </h3>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">{post.author.name}</p>
              <p className="text-gray-600 text-sm">{post.author.email}</p>
              <p className="text-gray-700 mt-2">
                Penulis profesional dari Nusantara Pola-pedia
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts Section (Optional) */}
        <div className="border-t pt-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Artikel Lainnya
          </h3>
          <div className="grid gap-4">
            <Link
              href="/"
              className="block p-4 border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-500 transition"
            >
              <p className="text-blue-600 hover:text-blue-800 font-semibold">
                ← Lihat semua artikel
              </p>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
