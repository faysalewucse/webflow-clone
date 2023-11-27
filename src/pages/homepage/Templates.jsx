const Templates = ({ heading, description, button }) => {
  return (
    <div className="md:text-center text-white py-20">
      <h1 className="min-[1500px]:w-1/2 lg:mx-auto px-5 lg:text-8xl text-6xl font-semibold scale-y-105 tracking-tighter">
        {heading}
      </h1>
      <p className="md:w-1/2 md:mx-auto mx-5 my-10">{description}</p>

      <div className="w-60 mx-auto">{button}</div>
    </div>
  );
};

export default Templates;
