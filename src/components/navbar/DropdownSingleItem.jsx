import { Link } from "react-router-dom";

const DropdownSingleItem = ({ icon, title, description }) => {
  return (
    <div className="text-lg">
      <div className="md:flex items-center gap-2">
        <div className="mb-4">{icon}</div>
        <Link to={"/all-features"} className="font-semibold">
          {title}
        </Link>
      </div>
      <p className="md:ml-7 w-3/4 text-dark2 text-sm">{description}</p>
    </div>
  );
};

export default DropdownSingleItem;
