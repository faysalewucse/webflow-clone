import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const TrustedOrgCard = ({ borderColor, title, middleText, midTitle }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-aos="fade-left"
      className="md:w-[350px] group/item h-[40vh] flex flex-col justify-between text-white py-5 px-8 transition-all duration-700 hover:text-dark cursor-pointer rounded shadow-2xl"
      style={{
        backgroundColor: hovered ? borderColor : "#080808",
        border: `1px solid ${hovered ? borderColor : borderColor}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h6 className="font-semibold">{title}</h6>
      <div>
        <h6 className="font-bold text-8xl">{middleText}</h6>
        <h6>{midTitle}</h6>
      </div>
      <h6 className="flex items-center gap-3">
        Read Story <FaArrowRight className="transition group-hover/item:ml-4" />
      </h6>
    </div>
  );
};

export default TrustedOrgCard;
