const SharedComponent = ({
  title,
  description,
  bottomText,
  bottomTextHandler,
  children,
  bordered = true,
}) => {
  return (
    <div
      className={`relative rounded overflow-hidden ${
        bordered && "p-10 text-white h-[600px] bg-black border border-dark2/25"
      }`}
    >
      <div>
        <h1 className="bold text-2xl">{title}</h1>
        <p className="my-5 w-80">{description}</p>
        <h6
          onClick={bottomTextHandler}
          className="bold text-lg flex gap-2 transition hover:gap-6"
        >
          {bottomText}
          <p>→</p>
        </h6>
      </div>
      {children}
    </div>
  );
};

export default SharedComponent;
