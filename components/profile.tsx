import { signOut } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Session } from "next-auth";
const Profile = async ({ session }: { session: Session }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" focus:outline-none" asChild>
        <Button variant="outline">
          <Image
            className="rounded-full"
            src={
              session?.user?.image ||
              "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
            }
            width={30}
            height={30}
            alt="Picture of the author"
          />{" "}
          <span>{session?.user?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="text-center">
          <Link href="/my-links">My Links</Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex justify-center"
          suppressHydrationWarning
        >
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit" variant="outline">
              <span className="">Logout</span>
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
