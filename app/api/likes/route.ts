import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const [sum, likes] = await Promise.all([
      prisma.like.aggregate({
        _sum: {
          likes: true,
        },
      }),
      prisma.like.findUnique({
        where: { id: 7 },
      }),
    ]);

    return Response.json({
      total: sum?._sum.likes || 0,
      likes: likes?.likes || 0,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function POST() {
  try {
    await prisma.like.upsert({
      where: {
        id: 7,
      },
      update: {
        likes: {
          increment: 1,
        },
      },
      create: {
        id: 7,
        likes: 0,
      },
    });
    return Response.json({ message: "Created" }, { status: 200 });
  } catch (e) {
    console.log(e);
  }
}

export async function PUT() {
  try {
    await prisma.like.update({
      where: {
        id: 7,
      },
      data: {
        likes: {
          decrement: 1,
        },
      },
    });

    return Response.json({ message: "Updated" }, { status: 200 });
  } catch (e) {
    console.log(e);
  }
}
