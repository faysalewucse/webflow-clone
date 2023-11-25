import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import TrustedOrg from "../../components/cards/TrustedOrg";

const TrustedOrgs = () => {
  return (
    <div>
      <div className="px-5 text-white flex items-end">
        <h1 className="text-6xl font-semibold scale-y-105 tracking-tighter">
          Trusted by 200,000+ leading organizations
        </h1>
        <div className="flex gap-10 text-3xl">
          <FaArrowLeftLong />
          <FaArrowRightLong />
        </div>
      </div>
      <div className="flex py-20 gap-10 px-5">
        <TrustedOrg
          borderColor={"orangeRed"}
          title={"GRUBHUB"}
          middleText={">1.3M"}
          midTitle={"Views"}
        />
        <TrustedOrg
          borderColor={"royalBlue"}
          title={"GRUBHUB"}
          middleText={"3X"}
          midTitle={"Views"}
        />
        {/* <TrustedOrg
          borderColor={"orchid"}
          title={"GRUBHUB"}
          middleText={"4X"}
          midTitle={"Views"}
        />
        <TrustedOrg
          borderColor={"orchid"}
          title={"GRUBHUB"}
          middleText={"4X"}
          midTitle={"Views"}
        /> */}
      </div>
    </div>
  );
};

export default TrustedOrgs;
