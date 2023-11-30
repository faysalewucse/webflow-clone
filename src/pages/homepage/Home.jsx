import Button from "../../components/Button";
import GetStartedButton from "../../components/GetStartedButton";
import Banner from "./Banner";
import BannerImage1 from "./BannerImage1";
import Brands from "./Brands";
import Templates from "./Templates";
import TrustedOrgs from "./TrustedOrgs";
import FourLines from "./lines/FourLines";
import Platforms from "./platforms/Platforms";

const Home = () => {
  return (
    <div>
      {/* <LightRunning /> */}
      <FourLines />
      <Banner />
      <BannerImage1 />
      <Brands />
      <Templates
        heading={"Creative power that goes beyond templates"}
        description={
          "You design, we generate the code — for everything from fully custom layouts to complex animations."
        }
        button={<GetStartedButton />}
      />
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
    </div>
  );
};

export default Home;
