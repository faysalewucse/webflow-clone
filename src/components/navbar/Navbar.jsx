import Branding from "../Branding";
import Container from "../Container";
import NavItem from "./NavItem";
import Product from "./Product";
import Resources from "./Resources";
import Solution from "./Solution";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      label: "Product",
      dropDownComponent: <Product />,
    },
    {
      id: 2,
      label: "Solutions",
      dropDownComponent: <Solution />,
    },
    {
      id: 3,
      label: "Resources",
      dropDownComponent: <Resources />,
    },
    {
      id: 4,
      label: "Enterprise",
      route: "/",
    },
    {
      id: 5,
      label: "Pricing",
      route: "/",
    },
    {
      id: 6,
      label: "Login",
      route: "/",
    },
  ];

  return (
    <div className="bg-dark text-white border-b border-gray-800 text-sm px-4">
      <Container>
        <div className="flex items-center justify-between">
          <Branding />
          <div className="flex items-center gap-7">
            {navItems.map((item) => (
              <NavItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
