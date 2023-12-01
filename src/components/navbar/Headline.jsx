import Container from "../Container";
import { MdOutlineArrowOutward } from "react-icons/md";

const Headline = () => {
  return (
    <div className="bg-primary hover:bg-primary2 text-white md:py-4 py-2 text-sm transition cursor-pointer">
      <Container>
        <div className="md:px-4 px-2 md:flex justify-between">
          <p className="scale-y-105">
            This just in: We surveyed 500 marketing leaders on the state of
            their website
          </p>
          <p className="group/item font-semibold flex gap-2 scale-y-105 md:mt-0 mt-2">
            Read Report
            <MdOutlineArrowOutward className="group-hover/item:pb-1 group-hover/item:pl-1" />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Headline;
