import Banner from "./Banner";
import BannerImage1 from "./BannerImage1";
import Brands from "./Brands";
import Templates from "./Templates";
import TrustedOrgs from "./TrustedOrgs";
import FourLines from "./lines/FourLines";

const Home = () => {
  return (
    <div>
      {/* <LightRunning /> */}
      <FourLines />
      <Banner />
      <BannerImage1 />
      <Brands />
      <Templates />
      <TrustedOrgs />
    </div>
  );
};

export default Home;
