import { prisma } from "@/prisma";
import { Link } from "@prisma/client";

export async function deleteLink(link: Link) {
  const user = await prisma.user.findUnique({
    where: {
      id: link.userId,
    },
    include: { links: true },
  });
  if (!user) return null;

  await prisma.link.delete({
    where: {
      id: link.id,
    },
  });
}
