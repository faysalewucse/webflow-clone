const DropdownSingleItem = ({ icon, title, description }) => {
  return (
    <div className="text-lg">
      <div className="flex items-center gap-2">
        {icon} <p className="font-semibold">{title}</p>
      </div>
      <p className="ml-7 w-3/4 text-dark2 text-sm">{description}</p>
    </div>
  );
};

export default DropdownSingleItem;
