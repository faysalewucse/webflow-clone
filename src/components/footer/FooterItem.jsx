const FooterItem = ({ title, item }) => {
  return (
    <div className="mb-5 grid md:grid-cols-1 grid-cols-2">
      <h6 className="font-semibold mb-3">{title.toUpperCase()}</h6>
      {item.map((item, index) => (
        <p
          key={index}
          className="text-sm cursor-pointer text-dark2 hover:text-white transition mb-3"
        >
          {item.label}
        </p>
      ))}
    </div>
  );
};

export default FooterItem;
