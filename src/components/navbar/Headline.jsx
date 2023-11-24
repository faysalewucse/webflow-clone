import Container from "../Container";
import { MdOutlineArrowOutward } from "react-icons/md";

const Headline = () => {
  return (
    <div className="bg-primary hover:bg-primary2 text-white p-4 transition cursor-pointer">
      <Container>
        <div className="flex justify-between">
          <p>
            This just in: We surveyed 500 marketing leaders on the state of
            their website
          </p>
          <p className="font-semibold flex gap-2">
            Read Report <MdOutlineArrowOutward />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Headline;
