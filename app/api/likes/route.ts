import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const [total, likes] = await Promise.all([
      prisma.like.aggregate({
        _sum: {
          likes: true,
        },
      }),
      prisma.like.findUnique({
        where: { id: 3 },
      }),
    ]);

    return Response.json({ total, likes });
  } catch (e) {
    console.log(e);
  }
}

export async function POST(request: Request) {
  try {
    const { count } = await request.json();
    const res = await prisma.like.upsert({
      where: {
        id: 7,
      },
      update: {
        likes: {
          increment: count,
        },
      },
      create: {
        id: 7,
        likes: count,
      },
    });
    return Response.json({ message: "Created" }, { status: 200 });
  } catch (e) {
    console.log(e);
  }
}
