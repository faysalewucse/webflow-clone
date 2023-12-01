import { MdClose, MdMenu } from "react-icons/md";
import Branding from "../Branding";
import Container from "../Container";
import NavItem from "./NavItem";
import Product from "./Product";
import Resources from "./Resources";
import Solution from "./Solution";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import GetStartedButton from "../GetStartedButton";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [navItemOpen, setNavItemOpen] = useState("");

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
  ];

  return (
    <div className="relative bg-dark text-white border-b border-gray-800 text-sm">
      <div
        className={`w-full md:hidden flex flex-col absolute bg-white transition-all duration-700 ${
          navOpen ? "top-14 h-[100vh] z-50" : "z-0 top-0 h-0 overflow-hidden"
        }`}
        style={{ maxHeight: navOpen ? "84vh" : "0px" }}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            {navItems.map((item) => (
              <NavItem
                device={"small"}
                item={item}
                open={navItemOpen}
                setOpen={setNavItemOpen}
                key={item.id}
              />
            ))}
          </div>
          <div>
            <div className="flex justify-between px-5 text-dark gap-5">
              <Link className="border border-dark2/20 p-4 text-center rounded-md w-full hover:text-primary">
                Login
              </Link>
              <Link className="border border-dark2/20 p-4 text-center rounded-md w-full hover:text-primary">
                Contact Sales
              </Link>
            </div>
            <div className="m-5">
              <GetStartedButton />
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="px-4 flex items-center justify-between">
          <div className="flex gap-5">
            <Branding />

            <div className={`hidden lg:flex items-center gap-7`}>
              {navItems.map((item) => (
                <NavItem
                  item={item}
                  open={navItemOpen}
                  setOpen={setNavItemOpen}
                  key={item.id}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <div className="flex gap-5 items-center">
              <div className="hidden md:block">
                <NavItem
                  underlined={true}
                  item={{ label: "Login", route: "/" }}
                />
              </div>
              <NavItem
                underlined={true}
                item={{ label: "Contact Sales", route: "/" }}
              />
              <div className="text-2xl md:hidden">
                {navOpen ? (
                  <MdClose onClick={() => setNavOpen(false)} />
                ) : (
                  <MdMenu onClick={() => setNavOpen(true)} />
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <Button text={"Get started —it's free"} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
