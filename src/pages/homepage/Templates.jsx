import GetStartedButton from "../../components/GetStartedButton";

const Templates = () => {
  return (
    <div className="md:text-center text-white py-20">
      <h1 className="lg:w-1/2 lg:mx-auto md:mx-10 mx-5 lg:text-7xl text-6xl font-semibold scale-y-105 tracking-tighter">
        Creative power that goes beyond templates
      </h1>
      <p className="md:w-1/2 md:mx-auto mx-5 my-10">
        You design, we generate the code — for everything from fully custom
        layouts to complex animations.
      </p>
      <div className="md:flex md:mx-0 mx-5 justify-center">
        <GetStartedButton />
      </div>
    </div>
  );
};

export default Templates;
