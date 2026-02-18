import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  const post = await prisma.post.findUnique({
    where: { id: params.id },
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
  { params }: { params: { id: string } },
) {
  const body = await req.json();

  const post = await prisma.post.update({
    where: { id: params.id },
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
  { params }: { params: { id: string } },
) {
  await prisma.post.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ message: "Post deleted" }, { status: 204 });
}
