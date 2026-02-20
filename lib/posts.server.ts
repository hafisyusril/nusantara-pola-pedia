"use server";

import { prisma } from "./prisma";

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
