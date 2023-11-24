import { routesData } from "../../utils/Constant";
import Container from "../Container";
import FooterItem from "./FooterItem";
import SocialMedia from "./SocialMedia";
import webflowWhite from "/webflowWhite.png";

const Footer = () => {
  return (
    <div className="bg-dark text-white p-10">
      <Container>
        <div className="flex gap-5">
          <div className="w-40">
            <img src={webflowWhite} className="w-14 mb-5" alt="" />
            <p className="text-dark2">
              © 2023 Webflow, Inc. All rights reserved
            </p>
          </div>
          <div className="flex-1 flex justify-between">
            <div>
              <FooterItem title={"Product"} item={routesData.product} />
              <FooterItem title={"Compare"} item={routesData.compare} />
            </div>
            <div>
              <FooterItem title={"Company"} item={routesData.company} />
              <FooterItem title={"Solutions"} item={routesData.solutions} />
            </div>
            <div>
              <FooterItem title={"Explore"} item={routesData.explore} />
              <FooterItem title={"Learn"} item={routesData.learn} />
            </div>
            <div>
              <SocialMedia className="flex-1" />
              <FooterItem
                title={"Become a Partner"}
                item={routesData.partner}
              />
              <FooterItem title={"Get help"} item={routesData.help} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
