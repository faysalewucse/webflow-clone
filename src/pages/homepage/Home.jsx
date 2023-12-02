import Button from "../../components/Button";
import GetStartedButton from "../../components/GetStartedButton";
import ThreeDCard from "./3D/3dCard1";
import Accordions from "./Accordions";
import Banner from "./Banner";
import BannerImage1 from "./BannerImage1";
import Brands from "./Brands";
import Enterprises from "./Enterprises";
import GetStartedFree from "./GetStartedFree";
import Guidence from "./Guidence";
import Portfolio from "./Portfolio";
import Templates from "./Templates";
import TrustedOrgs from "./TrustedOrgs";
import Platforms from "./platforms/Platforms";

const Home = () => {
  return (
    <div>
      {/* <LightRunning /> */}
      <Banner />
      <BannerImage1 />
      {/* <ThreeDCard /> */}
      <Brands />
      <Templates
        heading={"Creative power that goes beyond templates"}
        description={
          "You design, we generate the code — for everything from fully custom layouts to complex animations."
        }
        button={<GetStartedButton />}
      />
      <Accordions />
      <TrustedOrgs />
      <Templates
        heading={"A platform designed for growth"}
        description={"Tools to help you scale your site with your business."}
        button={<GetStartedButton />}
      />
      <Platforms />
      <Templates
        heading={"Webflow Enterprise"}
        description={
          "Webflow Enterprise gives your teams the power to build, ship, and manage sites collaboratively at scale."
        }
        button={<Button size="large" text={"Discover Enterprise"} />}
      />
      <Enterprises />
      <Brands />
      <Guidence />
      <Portfolio />
      <GetStartedFree />
    </div>
  );
};

export default Home;
