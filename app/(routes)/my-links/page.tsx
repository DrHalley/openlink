import { auth } from "@/auth";
import MyLinksComponent from "@/components/links";
import Navbar from "@/components/navbar";
import { prisma } from "@/prisma";

export default async function MyLinksPage() {
  const session = await auth();

  if (!session) {
    return <div>Not authenticated</div>;
  }
  const user = await prisma.user.findFirst({
    where: { email: session.user?.email ?? "" },
    include: { links: true },
  });

  const links = user?.links || [];

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />

      <MyLinksComponent links={links} />
    </div>
  );
}
