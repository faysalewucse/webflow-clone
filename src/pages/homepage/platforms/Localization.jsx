import SharedComponent from "./SharedComponent";
import localization from "../../../assets/images/localization.webp";
import ImagePing from "../../../components/ImagePing";
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
      <div className="relative w-1/2 left-96 top-32 bg-dark2 rounded-lg">
        <div className="absolute left-1/2 -translate-x-12 -top-20">
          <ImagePing image={web} scaleAnimation={false} />
        </div>
        <img className="border-indigo-500 p-5" src={localization} alt="local" />
      </div>
    </SharedComponent>
  );
};

export default Localization;
