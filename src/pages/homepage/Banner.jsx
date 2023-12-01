import Button from "../../components/Button";
import Container from "../../components/Container";
import FourLines from "./lines/FourLines";

const Banner = () => {
  return (
    <div className="bg-dark text-white px-10 md:py-24 py-16">
      <FourLines />
      <Container>
        <h1 className="md:w-4/6 lg:text-7xl md:text-6xl text-5xl font-semibold scale-y-105 tracking-tighter">
          Build with the power of code — without writing any
        </h1>

        <p className="md:w-1/2 my-10">
          Take control of HTML, CSS, and JavaScript in a visual canvas. Webflow
          generates clean, semantic code that’s ready to publish or hand to
          developers.
        </p>
        <Button text={"Start building"} />
      </Container>
    </div>
  );
};

export default Banner;
