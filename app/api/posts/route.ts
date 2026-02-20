import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const published = searchParams.get("published");
    const take = Number(searchParams.get("take")) || 10;

    const posts = await prisma.post.findMany({
      where: published ? { published: published === "true" } : undefined,
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
      take,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      data: posts,
      meta: { count: posts.length },
    });
  } catch (error) {
    console.error("[API /posts] Error:", error);
    return NextResponse.json(
      { 
        data: [], 
        meta: { count: 0 },
        error: error instanceof Error ? error.message : "Failed to fetch posts"
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const user = await getUserFromRequest();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: user.userId
    },
  });

  return NextResponse.json({ data: post }, { status: 201 });
}

