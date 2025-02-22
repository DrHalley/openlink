import { Link } from "@prisma/client";
import { Button } from "./ui/button";

const LinkUserComponent = async ({ link }: { link: Link }) => {
  return (
    <div className="flex justify-center">
      <Button asChild>
        <a href={link.url}>{link.title}</a>
      </Button>
    </div>
  );
};

export default LinkUserComponent;
