"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CreatePostPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        toast.error("Failed to create post")
        throw new Error(err.message || "Failed to create post");
      }

      toast.success("Create post success!")
      router.push("/admin/posts");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-6xl">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        Create New Post
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Post title"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            required
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Write your content here..."
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-600 text-sm">
            {error}
          </p>
        )}

        {/* Action */}
        <div className="flex justify-end gap-3">
          

          <button
            type="button"
            onClick={() => router.back()}
            className="border px-4 py-2 rounded cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  );
}


{
    
}