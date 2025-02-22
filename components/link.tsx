import { Link } from "@prisma/client";
import { Button } from "./ui/button";
import { deleteLink } from "@/lib/DeleteLink";
import { Session } from "next-auth";
import LinkAddComponent from "./link-add";

const LinkComponent = async ({
  link,
  session,
}: {
  link: Link;
  session: Session;
}) => {
  return (
    <div>
      <div className=" flex gap-3 w-full justify-center">
        <p className="inline text-3xl">{link.title}</p>{" "}
        <a className="text-3xl" href={link.url}>
          Link
        </a>
        <form
          className="flex items-center"
          action={async () => {
            "use server";
            deleteLink(link);
          }}
        >
          <Button className="h-8" type="submit" variant="destructive">
            🗑️
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LinkComponent;
