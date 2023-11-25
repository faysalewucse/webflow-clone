import banner1 from "../../../assets/banner1.png";

const FourLines = () => {
  return (
    <div className="absolute">
      <img
        className="-ml-20 md:h-full h-[90vh] w-[200vw] opacity-50"
        src={banner1}
        alt="four_line"
      />
    </div>
  );
};

export default FourLines;
