import { prisma } from "@/prisma";
import { Session } from "next-auth";
import { auth } from "@/auth";
export async function AddLink(formData: FormData) {
  "use server";
  const session = await auth(); // Oturum bilgisini al

  if (!session || !session.user || !session.user.email) {
    console.error("Unauthorized Access: No valid session found.");
    throw new Error("Unauthorized");
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  if (!user) {
    console.error("Unauthorized Access: No valid session found.");
    throw new Error("Unauthorized");
  }

  const rawFormData = {
    title: formData.get("title")?.toString(),
    link: formData.get("link")?.toString(),
  };
  if (!rawFormData.link) {
    rawFormData.link = "https://google.com";
  }

  const create = await prisma.link.create({
    data: {
      title: rawFormData.title,
      url: rawFormData.link,
      userId: user.id,
    },
  });
}
