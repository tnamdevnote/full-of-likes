import prisma from "@/prisma/prisma";
import { createHash } from "crypto";

function getCurrentUserId(requestHeaders: Headers) {
  const ipAddress = requestHeaders.get("x-forwarded-for") || "0.0.0.0";
  const id = createHash("md5")
    .update(ipAddress + process.env.IP_ADDRESS_SALT, "utf8")
    .digest("hex");

  return id;
}

export async function GET(request: Request) {
  try {
    console.log(request.headers.get("x-forwarded-for"));
    const currentUserId = getCurrentUserId(request.headers);
    console.log(currentUserId);
    const [sum, likes] = await Promise.all([
      prisma.like.aggregate({
        _sum: {
          likes: true,
        },
      }),
      prisma.like.findUnique({
        where: { id: currentUserId },
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

export async function POST(request: Request) {
  try {
    const currentUserId = getCurrentUserId(request.headers);
    await prisma.like.upsert({
      where: {
        id: currentUserId,
      },
      update: {
        likes: {
          increment: 1,
        },
      },
      create: {
        id: currentUserId,
        likes: 0,
      },
    });
    return Response.json({ message: "Created" }, { status: 200 });
  } catch (e) {
    console.log(e);
  }
}

export async function PUT(request: Request) {
  try {
    const currentUserId = getCurrentUserId(request.headers);
    await prisma.like.update({
      where: {
        id: currentUserId,
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
