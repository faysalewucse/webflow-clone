import { BiChevronDown } from "react-icons/bi";
import GetStartedButton from "../components/GetStartedButton";
import { FaChevronDown } from "react-icons/fa6";

const AllFeatures = () => {
  return (
    <div className="text-white p-2 md:p-10">
      <p className="text-xs border border-dark2 p-2 flex items-center gap-2 w-fit">
        All Features
        <BiChevronDown />
      </p>
      <p className="text-4xl font-bold scale-y-110 mt-10">
        <span className="text-dark2 text-4xl">Interactions</span>
        <br /> Build website animations and interactions visually.
      </p>
      <p className="text-xs my-5">
        Webflows interactions and animations tools bring all the power of CSS
        and JavaScript into a completely visual tool, empowering designers to
        build complex, rich animations without even thinking about code. Get
        started — its free
      </p>
      <div className="md:w-1/2 ">
        <GetStartedButton />
      </div>
      <p className="text-xs flex items-center gap-5 mt-10">
        Learn More about interactions <FaChevronDown />
      </p>
    </div>
  );
};

export default AllFeatures;
