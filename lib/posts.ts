import { prisma } from "./prisma";

export async function getPosts() {
  let url = "/api/posts";
  
  // Detect if running on server or client
  if (typeof window === "undefined") {
    // On server, use absolute URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                     (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
                     "http://localhost:3000";
    url = `${baseUrl}/api/posts`;
  }
  
  try {
    const res = await fetch(url, {
      cache: "no-store",
      ...(typeof window === "undefined" && { 
        headers: { "User-Agent": "Next.js Server" } 
      }),
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("getPosts error:", error);
    // Return empty response structure for error cases
    return { data: [], meta: { count: 0 } };
  }
}

// export async function getPostsService() {
//   return prisma.post.findMany({
//     where: { published: true },
//     include: { author: true },
//     orderBy: { createdAt: "desc" },
//   });
// }