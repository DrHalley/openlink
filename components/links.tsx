import { Link } from "@prisma/client";
import LinkComponent from "./link";
import LinkAddComponent from "./link-add";
const MyLinksComponent = ({ links }: { links: Link[] }) => {
  return (
    <div>
      {links.length > 0 ? (
        <div>
          {links.map((link) => (
            <LinkComponent key={link.id} link={link} />
          ))}
          <LinkAddComponent />
        </div>
      ) : (
        <div>
          <LinkAddComponent />
        </div>
      )}
    </div>
  );
};

export default MyLinksComponent;
