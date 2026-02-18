import { prisma } from "./prisma";

export async function getPublishedPosts() {
  return await prisma.post.findMany({
    where: { published: true, deletedAt: null },
    orderBy: { createdAt: "desc" },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
}

export async function getAllPostsForAdmin() {
  return await prisma.post.findMany({
    where: { published: true, deletedAt: null },
    orderBy: { createdAt: "desc" },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
}


