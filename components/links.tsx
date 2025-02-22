import { Link } from "@prisma/client";
import { Session } from "next-auth";
import LinkComponent from "./link";
import LinkAddComponent from "./link-add";
const MyLinksComponent = ({
  session,
  links,
}: {
  session: Session;
  links: Link[];
}) => {
  return (
    <div>
      {links.length > 0 ? (
        <div>
          {links.map((link) => (
            <LinkComponent session={session} key={link.id} link={link} />
          ))}
          <LinkAddComponent session={session} />
        </div>
      ) : (
        <div>
          <LinkAddComponent session={session} />
        </div>
      )}
    </div>
  );
};

export default MyLinksComponent;
