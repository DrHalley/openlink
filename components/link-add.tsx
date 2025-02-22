import { AddLink } from "@/lib/AddLink";
import { Button } from "./ui/button";

const LinkAddComponent = async () => {
  return (
    <div className="flex justify-center">
      <form action={AddLink}>
        <div className="flex gap-[4vw]">
          <label className=" text-3xl" htmlFor="title">
            Your Link Title
          </label>
          <label className="text-3xl" htmlFor="link">
            Your Link
          </label>
        </div>
        <div className="flex gap-5">
          <input
            required
            className="border-2 rounded-xl border-black w-30 "
            type="text"
            id="title"
            name="title"
          />
          <input
            required
            className="border-2 rounded-xl border-black w-30"
            type="text"
            id="link"
            name="link"
          />
        </div>
        <div className="flex justify-center">
          <Button className=" bg-green-500" type="submit">
            Add Link
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LinkAddComponent;
