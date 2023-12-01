import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper/modules";
import TrustedOrgCard from "../../components/cards/TrustedOrgCard";
import Container from "../../components/Container";

const TrustedOrgCards = () => {
  return (
    <div>
      <Container>
        <div className="px-5 text-white md:flex items-end justify-between">
          <h1 className="lg:text-5xl lg:w-3/4 md:text-6xl text-5xl font-semibold scale-y-105 tracking-tighter justify-between">
            Trusted by 200,000+ leading organizations
          </h1>
          <div className="flex justify-end gap-10 text-3xl mt-10 md:mt-0">
            <FaArrowLeftLong />
            <FaArrowRightLong />
          </div>
        </div>
        <div className="px-5 py-20">
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
              <TrustedOrgCard
                borderColor={"orangeRed"}
                title={"GRUBHUB"}
                middleText={">1.3M"}
                midTitle={"Views"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TrustedOrgCard
                borderColor={"royalBlue"}
                title={"GRUBHUB"}
                middleText={"3X"}
                midTitle={"Views"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TrustedOrgCard
                borderColor={"orchid"}
                title={"GRUBHUB"}
                middleText={"4X"}
                midTitle={"Views"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TrustedOrgCard
                borderColor={"orchid"}
                title={"GRUBHUB"}
                middleText={"4X"}
                midTitle={"Views"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default TrustedOrgCards;
