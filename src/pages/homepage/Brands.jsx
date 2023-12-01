import Marquee from "react-fast-marquee";
import brand1 from "../../assets/brands/brand1.svg";
import brand2 from "../../assets/brands/brand2.svg";
import brand3 from "../../assets/brands/brand3.svg";
import brand4 from "../../assets/brands/brand4.svg";
import brand5 from "../../assets/brands/brand5.svg";
import brand6 from "../../assets/brands/brand6.svg";
import brand7 from "../../assets/brands/brand7.svg";
import brand8 from "../../assets/brands/brand8.svg";
import brand9 from "../../assets/brands/brand9.svg";
import brand10 from "../../assets/brands/brand10.svg";
import brand11 from "../../assets/brands/brand11.svg";
import brand12 from "../../assets/brands/brand12.svg";

const Brands = () => {
  return (
    <div className="py-20">
      <Marquee>
        <img className="w-40 object-cover mr-10" src={brand1} alt="" />
        <img className="w-40 object-cover mr-10" src={brand2} alt="" />
        <img className="w-40 object-cover mr-10" src={brand3} alt="" />
        <img className="w-40 object-cover mr-10" src={brand4} alt="" />
        <img className="w-40 object-cover mr-10" src={brand5} alt="" />
        <img className="w-40 object-cover mr-10" src={brand6} alt="" />
        <img className="w-40 object-cover mr-10" src={brand7} alt="" />
        <img className="w-40 object-cover mr-10" src={brand8} alt="" />
        <img className="w-40 object-cover mr-10" src={brand9} alt="" />
        <img className="w-40 object-cover mr-10" src={brand10} alt="" />
        <img className="w-40 object-cover mr-10" src={brand11} alt="" />
        <img className="w-40 object-cover mr-10" src={brand12} alt="" />
      </Marquee>
    </div>
  );
};

export default Brands;
