const SharedComponent = ({
  title,
  description,
  bottomText,
  bottomTextHandler,
  children,
}) => {
  return (
    <div className="bg-black relative h-[600px] rounded overflow-hidden text-white border border-dark2/25 p-10">
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
