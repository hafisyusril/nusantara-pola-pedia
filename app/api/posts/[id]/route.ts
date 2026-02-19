import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      author: true,
    },
  });

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({ data: post });
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await req.json();

  const post = await prisma.post.update({
    where: { id },
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
    },
  });

  return NextResponse.json({ data: post });
}

export async function DELETE(
  _req: Request,
  ctx: { params: Promise<{ id: string }> },
) {
  const { id } = await ctx.params;

  console.log("DELETE HIT:", id);

  await prisma.post.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Post deleted" });
}
