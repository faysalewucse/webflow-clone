import SharedComponent from "./SharedComponent";
import localization from "../../../assets/images/localization.webp";
import web from "../../../assets/svg/web.svg";

const Localization = () => {
  return (
    <SharedComponent
      title={"Localization"}
      description={
        "Create fully localized experiences for site visitors around the world — from design and content to translation and more."
      }
      bottomText={"Learn more"}
    >
      {/* <div className="relative w-1/2 left-1/2 top-10 bg-dark2 rounded-lg">
        <div className="absolute left-52 transform -translate-x-1/2 -top-20 bg-dark">
          <ImagePing
            borderColor={"#7c3aed"}
            image={web}
            extraStyle={"h-20 w-20"}
            scaleAnimation={false}
          />
        </div>
        <img className="border-indigo-500 p-5" src={localization} alt="local" />
      </div> */}
      <div className="absolute -right-50">
        <Image image={localization} web={web} />
      </div>
    </SharedComponent>
  );
};

export default Localization;

const Image = ({ image, web }) => {
  return (
    <div className="rounded-xl relative border border-indigo-500 p-2">
      <div className="mt-10 border-8 rounded-lg border-dark2">
        <img data-aos="fade-up" src={image} alt="block_pic" />
        <img
          className="absolute w-10 left-1/2 -top-5 border border-indigo-500 bg-black p-2 rounded-md transform -translate-x-1/2"
          src={web}
          alt=""
        />
      </div>
    </div>
  );
};
