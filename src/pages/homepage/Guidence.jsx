import GuidenceCard from "../../components/cards/GuidenceCard";
import g1 from "../../assets/guidance/g1.webp";
import g2 from "../../assets/guidance/g2.webp";
import g3 from "../../assets/guidance/g3.webp";
import g4 from "../../assets/guidance/g4.webp";
import Container from "../../components/Container";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Guidence = () => {
  return (
    <div className="bg-white py-10">
      <Container>
        <h1 className="min-[900px]:w-[900px] lg:text-[80px] text-[64px] font-bold scale-y-105 tracking-tighter">
          We’ll help you get started
        </h1>
        <div className="flex justify-between items-end mb-28">
          <p className="w-96">
            Browse the Marketplace, educational videos, and customer stories to
            find what you need to succeed with Webflow.
          </p>
          <div className="flex gap-10 text-3xl">
            <FaArrowLeftLong />
            <FaArrowRightLong />
          </div>
        </div>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <GuidenceCard
              image={g1}
              title={"The 2024 State of the Website"}
              description={
                "Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024"
              }
              bottomText={"Read report"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <GuidenceCard
              image={g2}
              title={"The 2024 State of the Website"}
              description={
                "Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024"
              }
              bottomText={"Read report"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <GuidenceCard
              image={g3}
              title={"The 2024 State of the Website"}
              description={
                "Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024"
              }
              bottomText={"Read report"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <GuidenceCard
              image={g4}
              title={"The 2024 State of the Website"}
              description={
                "Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024"
              }
              bottomText={"Read report"}
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Guidence;
