"use client";

import { getBlogs } from "@/lib/posts";
import { Post } from "@/types/posts";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getBlogs();
      setPosts(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl text-black font-bold mb-4">Posts</h1>

        <Link
          href="/admin/posts/create"
          className="inline-block mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Create Post
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="border px-3 py-2 w-12">ID</th>
              <th className="border px-3 py-2 w-56">Title</th>
              <th className="border px-3 py-2">Content</th>
              <th className="border px-3 py-2 w-40">Author</th>
              <th className="border px-3 py-2 w-32">Action</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-blue-50 transition">
                {/* ID */}
                <td className="border px-3 py-2">
                  <span
                    className="block max-w-10 truncate font-mono text-xs text-gray-600"
                    title={post.id}
                  >
                    {post.id}
                  </span>
                </td>

                {/* Title */}
                <td className="border px-3 py-2 font-medium">{post.title}</td>

                {/* Content */}
                <td className="border px-3 py-2">
                  <p className="line-clamp-2 text-gray-700">{post.content}</p>
                </td>

                {/* Author */}
                <td className="border px-3 py-2">{post.author.name}</td>

                {/* Action */}
                <td className="border px-3 py-2">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


{
    
}