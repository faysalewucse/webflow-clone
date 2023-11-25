import { routesData } from "../../utils/Constant";
import Divider from "../Divider";
import DropdownSingleItem from "./DropdownSingleItem";
import thumbnail from "../../assets/product_thumbnail.webp";
import Container from "../Container";

const Solution = () => {
  return (
    <div className="z-50 absolute left-0 top-28 md:top-14 w-full bg-white">
      <Container>
        <div className="md:flex">
          <div className="md:w-4/6 p-10 border-r">
            <h6 className="text-dark2 text-lg">WEBFLOW FOR</h6>
            <Divider color="border-gray-100" />
            <div className="text-dark grid grid-cols-3 gap-5 mt-5">
              {routesData.product.slice(0, 5).map((item) => (
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
            <img src={thumbnail} className="rounded" alt="offer" />
            <h3 className="text-dark2 text-lg mt-10">Ready to get Started</h3>
            <Divider />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Solution;
