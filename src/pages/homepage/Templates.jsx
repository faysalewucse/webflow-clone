import GetStartedButton from "../../components/GetStartedButton";

const Templates = () => {
  return (
    <div className="md:text-center text-white py-20">
      <h1 className="px-5 lg:text-8xl text-6xl font-semibold scale-y-105 tracking-tighter">
        Creative power that goes beyond templates
      </h1>
      <p className="md:w-1/2 md:mx-auto mx-5 my-10">
        You design, we generate the code — for everything from fully custom
        layouts to complex animations.
      </p>

      <div className="w-60 mx-auto">
        <GetStartedButton />
      </div>
    </div>
  );
};

export default Templates;
