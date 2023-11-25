import Marquee from "react-fast-marquee";
import upwork from "../../assets/upwork.png";
import { FaDropbox } from "react-icons/fa";

const Brands = () => {
  return (
    <div className="py-20">
      <Marquee>
        <img className="w-32 mr-10" src={upwork} alt="" />
        <div className="font-bold mr-10 text-white text-3xl">TED</div>
        <img className="w-32 mr-10" src={upwork} alt="" />
        <div className="flex gap-1 items-center font-bold mr-10 text-white text-3xl">
          <FaDropbox />
          Dropbox
        </div>
        <img className="w-32 mr-10" src={upwork} alt="" />
        <img className="w-32 mr-10" src={upwork} alt="" />
        <div className="mr-10 text-white text-3xl">IDIO</div>
        <div className="font-bold mr-10 text-white text-3xl">PHILIPS</div>
        <img className="w-32 mr-10" src={upwork} alt="" />
        <img className="w-32 mr-10" src={upwork} alt="" />
      </Marquee>
    </div>
  );
};

export default Brands;
