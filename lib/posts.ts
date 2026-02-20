// Client-side fetch - NO "use server" directive
// Used by admin page to fetch posts via API
export async function getPosts() {
  try {
    const res = await fetch("/api/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("[getPosts] Error:", error instanceof Error ? error.message : String(error));
    return { data: [], meta: { count: 0 } };
  }
}
