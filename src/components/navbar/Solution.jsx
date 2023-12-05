import { routesData } from "../../utils/Constant";
import Divider from "../Divider";
import DropdownSingleItem from "./DropdownSingleItem";
import Container from "../Container";
import { Link } from "react-router-dom";

const Solution = () => {
  return (
    <div className="z-50 absolute left-0 top-28 md:top-[65px] w-full bg-white">
      <Container>
        <div className="md:flex">
          <div className="md:w-4/6 p-10 border-r">
            <h6 className="text-dark2 text-lg">WEBFLOW FOR</h6>
            <Divider color="border-gray-100" />
            <div className="text-dark grid grid-cols-2 gap-5 mt-5">
              {routesData.product.slice(0, 4).map((item) => (
                <DropdownSingleItem
                  key={item.label}
                  title={item.label}
                  icon={item.icon}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 bg-dark2/10 p-10">
            <h1 className="text-dark2 text-lg">Customer Stories</h1>
            <Divider />
            <div className="flex justify-between mt-5">
              <div>
                <Link
                  to={"/"}
                  className="hover:text-primary hover:underline text-dark font-semibold"
                >
                  Rakuten
                </Link>
                <p className="text-dark2 mt-3">
                  Rakuten uses Webflow to help clients push their business to
                  new levels
                </p>
              </div>
              <div>
                <Link
                  to={"/"}
                  className="hover:text-primary hover:underline text-dark font-semibold"
                >
                  HelloSign
                </Link>
                <p className="text-dark2 mt-3">
                  HelloSign uses Webflow to empower marketing and design
                </p>
              </div>
            </div>

            <div className="my-5">
              <Divider />
            </div>

            <div className="text-dark flex justify-between font-semibold hover:text-primary text-md">
              <Link to={"/"}>View all customer stories</Link>↗
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Solution;
