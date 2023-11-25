import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NavItem = ({ item, underlined, device }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const dropDownHandler = (navItem) => {
    if (navItem.dropDownComponent) {
      setOpen(!open);
    } else navigate(`/${item.route}`);
  };

  return (
    <div
      onClick={() => dropDownHandler(item)}
      className={`flex items-center w-full ${
        device === "small" && "justify-between px-5 text-dark bg-white"
      } gap-1 ${
        !underlined && "border-b-2"
      } border-primary border-opacity-0 hover:border-opacity-100 transition cursor-pointer py-4 ${
        open && "border-opacity-100"
      }`}
    >
      <p
        className={`${underlined && "p-0.5 border-b hover:border-dark"} ${
          device === "small" && "hover:text-primary"
        }`}
      >
        {item.label}
      </p>
      {item.dropDownComponent && (
        <i className="text-xs">{open ? <FaChevronUp /> : <FaChevronDown />}</i>
      )}
    </div>
  );
};

export default NavItem;
