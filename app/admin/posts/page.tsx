"use client";

import ConfirmModal from "@/components/ConfirmModal";
import { getPosts } from "@/lib/posts";
import { Post } from "@/types/posts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loadingDelete, setLoadingDelete] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPosts();
        console.log("[Admin Posts] Response:", response);
        
        const postsData = response?.data || [];
        console.log("[Admin Posts] Posts data:", postsData);
        
        if (Array.isArray(postsData)) {
          setPosts(postsData);
        } else {
          console.error("[Admin Posts] Data is not an array:", postsData);
          setPosts([]);
        }
      } catch (error) {
        console.error("[Admin Posts] Failed to fetch:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  async function handleDelete() {
    if (!selectedId) return;

    try {
      setLoadingDelete(true);

      await fetch(`/api/posts/${selectedId}`, {
        method: "DELETE",
      });

      setPosts((prev) => prev.filter((p) => p.id !== selectedId));

      setOpen(false);
      setSelectedId(null);
    } finally {
      setLoadingDelete(false);
    }
  }

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
              <th className="border px-3 py-2 w-32">Created at</th>
              <th className="border px-3 py-2 w-56">Title</th>
              <th className="border px-3 py-2">Content</th>
              <th className="border px-3 py-2 w-25">Author</th>
              <th className="border px-3 py-2 w-20">Action</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-blue-50 transition">
                {/* ID */}
                <td className="border px-3 py-2">
                  <span
                    className="block max-w-30 truncate font-mono text-xs text-gray-600"
                    title={post.id}
                  >
                    {new Date(post.createdAt).toLocaleString()}
                  </span>
                </td>

                {/* Title */}
                <td className="border px-3 py-2 font-medium">{post.title}</td>

                {/* Content */}
                <td className="border px-3 py-2">
                  <p className="line-clamp-2 text-gray-700">{post.content}</p>
                </td>

                {/* Author */}
                <td className="border px-3 py-2 text-center">
                  {post.author.name}
                </td>

                {/* Action */}
                <td className="border px-3 py-2">
                  <div className="flex justify-center gap-2">
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="text-blue-600 text-xl hover:text-blue-800"
                      title="Edit post"
                    >
                      <FaEdit />
                    </Link>

                    <button
                      onClick={() => {
                        setSelectedId(post.id);
                        setOpen(true);
                      }}
                      className="text-red-600 text-xl cursor-pointer hover:text-red-800"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmModal
        open={open}
        title="Delete Post"
        description="Are you sure you want to delete this post? This action cannot be undone."
        confirmText="Delete"
        loading={loadingDelete}
        onCancel={() => {
          setOpen(false);
          setSelectedId(null);
        }}
        onConfirm={handleDelete}
      />
      
    </div>
  );
}
