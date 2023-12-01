const Templates = ({ heading, description, button }) => {
  return (
    <div className="md:text-center text-white py-20">
      <h1 className="min-[900px]:w-[900px] lg:mx-auto px-5 lg:text-[80px] text-[64px] font-semibold scale-y-105 md:tracking-tighter md:leading-normal leading-tight">
        {heading}
      </h1>
      <p className="md:w-1/2 md:mx-auto mx-5 my-10">{description}</p>

      <div className="w-60 md:mx-auto flex justify-start ml-5">{button}</div>
    </div>
  );
};

export default Templates;
