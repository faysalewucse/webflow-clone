import w from "/webflow.png";
import port1 from "../../assets/portfolio/port1.webp";
import port2 from "../../assets/portfolio/port2.webp";
import port3 from "../../assets/portfolio/port3.webp";
import port4 from "../../assets/portfolio/port4.webp";
import port5 from "../../assets/portfolio/port5.webp";

const Portfolio = () => {
  return (
    <div className="relative bg-dark p-20">
      {/* Button */}
      <div className="z-10 sticky top-1/2 flex items-center bg-white w-fit mx-auto p-5 rounded-md">
        <img className="md:w-20 w-10" src={w} alt="w" />
        <h1 className="md:text-6xl font-bold">Made in Webflow</h1>
      </div>

      <div className="grid grid-cols-2 gap-10 justify-between">
        <img
          data-aos="fade-up"
          className="w-80 hover:brightness-100 transition brightness-50"
          src={port1}
          alt="portfolio-1"
        />
        <img
          data-aos="fade-up"
          className="w-80 hover:brightness-100 transition brightness-50 mt-20"
          src={port2}
          alt="portfolio-2"
        />
        <img
          data-aos="fade-up"
          className="w-80 hover:brightness-100 transition brightness-50"
          src={port3}
          alt="portfolio-3"
        />
        <img
          data-aos="fade-up"
          className="w-80 hover:brightness-100 transition brightness-50"
          src={port4}
          alt="portfolio-4"
        />
        <img
          data-aos="fade-up"
          className="w-80 hover:brightness-100 transition brightness-50"
          src={port5}
          alt="portfolio-5"
        />
      </div>
      <div className="relative z-20 h-[400px] bg-gradient-to-t from-dark to-dark/90"></div>
    </div>
  );
};

export default Portfolio;
