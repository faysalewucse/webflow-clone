import app1 from "../../../assets/webflow-apps/app1.jpg";
import app2 from "../../../assets/webflow-apps/app2.jpg";
import app3 from "../../../assets/webflow-apps/app3.jpg";
import app4 from "../../../assets/webflow-apps/app4.jpg";
import app5 from "../../../assets/webflow-apps/app5.webp";
import circle from "../../../assets/svg/circle.svg";
import soft1 from "../../../assets/images/soft1.webp";

import ImagePing from "../../../components/ImagePing";
import SharedComponent from ".././platforms/SharedComponent";

const WebflowApps = () => {
  return (
    <SharedComponent
      title={"Webflow Apps"}
      description={
        "Connect your site to the tools your team uses every day — plus find and launch apps in the Webflow Designer."
      }
      bottomText={"Learn more"}
    >
      <img
        className="absolute w-4/6 left-1/4 -bottom-64"
        src={circle}
        alt="circle"
      />
      <img className="absolute -right-1/2 top-10 h-full" src={soft1} alt="" />

      <ImagePing
        borderColor={"#146EF5"}
        position={"top-10 left-1/2"}
        image={app1}
      />
      <ImagePing
        borderColor={"#146EF5"}
        position={"top-40 left-80"}
        image={app2}
      />
      <ImagePing
        borderColor={"#146EF5"}
        position={"top-64 left-1/2"}
        image={app3}
      />
      <ImagePing
        borderColor={"#146EF5"}
        position={"top-80 left-2/3"}
        image={app4}
      />
      <ImagePing
        borderColor={"#146EF5"}
        position={"top-96 left-80"}
        image={app5}
      />
    </SharedComponent>
  );
};

export default WebflowApps;
