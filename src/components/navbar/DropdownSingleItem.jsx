const DropdownSingleItem = ({ icon, title, description }) => {
  return (
    <div className="text-lg">
      <div className="md:flex items-center gap-2">
        <div className="mb-4">{icon}</div>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="md:ml-7 w-3/4 text-dark2 text-sm">{description}</p>
    </div>
  );
};

export default DropdownSingleItem;
