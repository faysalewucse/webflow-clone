import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const NavItem = ({ item, underlined, device, open, setOpen }) => {
  const navigate = useNavigate();

  const dropDownHandler = (navItem) => {
    if (navItem.dropDownComponent) {
      setOpen((prevOpen) => (prevOpen === navItem.label ? "" : navItem.label));
    } else navigate(`/`);
  };

  return (
    <div
      onClick={() => dropDownHandler(item)}
      className={`flex items-center w-full ${
        device === "small" && "justify-between px-5 text-dark bg-white"
      } gap-1 ${
        !underlined && "border-b-2"
      } border-primary border-opacity-0 hover:border-opacity-100 transition cursor-pointer py-4 lg:text-md text-sm ${
        open === item.label && "border-opacity-100"
      }`}
    >
      <Link
        to="/all-features"
        className={`${underlined && "p-0.5 border-b hover:border-dark"} ${
          device === "small" && "hover:text-primary"
        }`}
      >
        {item.label}
      </Link>
      {item.dropDownComponent && (
        <i className="text-xs">
          {open === item.label ? <FaChevronUp /> : <FaChevronDown />}
        </i>
      )}
      {open === item.label && item.dropDownComponent}
    </div>
  );
};

export default NavItem;
