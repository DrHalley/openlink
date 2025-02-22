import LinkUserComponent from "@/components/links-user";
import { prisma } from "@/prisma";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;
  const user = await prisma.user.findFirst({
    where: {
      name: name,
    },
    include: {
      links: true,
    },
  });
  if (!user || !user.id) {
    throw new Error("User Not found");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="text-5xl block w-full">
        <h1 className="text-center">{user.name}`s Links</h1>
      </div>

      <div className="flex flex-col gap-2">
        {user.links.map((link) => (
          <LinkUserComponent key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
}
