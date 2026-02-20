"use server";

import { prisma } from "./prisma";

// Fetch posts via API (for client-side)
export async function getPosts() {
  let url = "/api/posts";
  
  // Detect if running on server or client
  if (typeof window === "undefined") {
    // On server, use absolute URL
    let baseUrl = "";
    
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    } else if (process.env.VERCEL_URL) {
      // Vercel automatically provides VERCEL_URL (e.g., "my-app.vercel.app")
      baseUrl = `https://${process.env.VERCEL_URL}`;
    } else {
      // Fallback for local development only
      baseUrl = "http://localhost:3000";
    }
    
    url = `${baseUrl}/api/posts`;
    console.log("[getPosts] Using URL:", url, "| VERCEL_URL:", process.env.VERCEL_URL);
  }
  
  try {
    const res = await fetch(url, {
      cache: "force-cache",
      ...(typeof window === "undefined" && { 
        headers: { "User-Agent": "Next.js Server" } 
      }),
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("[getPosts] Error:", {
      url,
      error: error instanceof Error ? error.message : String(error),
      vercelUrl: process.env.VERCEL_URL,
      publicBaseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    });
    // Return empty response structure for error cases
    return { data: [], meta: { count: 0 } };
  }
}

// Direct database query for server components (no API call needed)
export async function getPublicPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true }, // Only published posts
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    // Convert Date objects to ISO strings for consistency with API response
    const formattedPosts = posts.map((post) => ({
      ...post,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
      deletedAt: post.deletedAt ? post.deletedAt.toISOString() : null,
    }));

    return { data: formattedPosts, meta: { count: formattedPosts.length } };
  } catch (error) {
    console.error("[getPublicPosts] Error:", error);
    return { data: [], meta: { count: 0 } };
  }
}

// Get single post by ID
export async function getPostById(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    if (!post) {
      return null;
    }

    // Convert Date objects to ISO strings
    return {
      ...post,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
      deletedAt: post.deletedAt ? post.deletedAt.toISOString() : null,
    };
  } catch (error) {
    console.error("[getPostById] Error:", error);
    return null;
  }
}
