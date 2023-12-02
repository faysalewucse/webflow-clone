import SharedComponent from "./SharedComponent";
import soft1 from "../../../assets/images/soft1.webp";

const Collaboration = () => {
  return (
    <SharedComponent
      title={"Collaboration"}
      description={
        "Work better together, ship faster, and avoid unauthorized changes with advanced roles and permissions, page branching, and more."
      }
      bottomText={"Read more"}
    >
      <img
        className="absolute md:-right-80 object-cover object-left-top md:top-10 h-full"
        src={soft1}
        alt=""
      />
    </SharedComponent>
  );
};

export default Collaboration;
