import { Link, PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserLinks(userSession: any) {
  const user = (await prisma.user.findFirst({
    where: { email: userSession.user.email },
    include: {
      links: true, // Include the links
    },
  })) as User & { links: Link[] };

  if (user) {
    return user.links; // `user.links` should now be available
  } else {
    return null; // Handle case if the user is not found
  }
}
