import Button from "../../components/Button";
import Container from "../../components/Container";
import soft2 from "../../assets/images/soft2.webp";

const GetStartedFree = () => {
  return (
    <div className="py-40 px-5">
      <Container>
        <div className="text-white md:flex justify-between items-center">
          <h1 className="md:w-1/2  lg:text-8xl md:text-6xl text-5xl font-semibold scale-y-105 tracking-tighter">
            Get started for free
          </h1>

          <div className="md:w-1/2">
            <p className="my-10">
              Try Webflow for as long as you like with our free Starter plan.
              Purchase a paid Site plan to publish, host, and unlock additional
              features.
            </p>
            <Button text={"Start building"} />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          className="py-20 h-[600px] object-cover object-top w-full mx-auto"
          src={soft2}
          alt=""
        />
      </Container>
    </div>
  );
};

export default GetStartedFree;
