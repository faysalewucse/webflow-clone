const Templates = ({ heading, description, button }) => {
  return (
    <div className="md:text-center text-white py-20">
      <h1 className="min-[900px]:w-[900px] lg:mx-auto px-5 lg:text-[80px] text-[64px] font-semibold scale-y-105 tracking-tighter">
        {heading}
      </h1>
      <p className="md:w-1/2 md:mx-auto mx-5 my-10">{description}</p>

      <div className="w-60 mx-auto">{button}</div>
    </div>
  );
};

export default Templates;
