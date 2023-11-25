import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import TrustedOrg from "../../components/cards/TrustedOrg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper/modules";

const TrustedOrgs = () => {
  return (
    <div>
      <div className="px-5 text-white flex items-end">
        <h1 className="text-6xl font-semibold scale-y-105 tracking-tighter">
          Trusted by 200,000+ leading organizations
        </h1>
        <div className="flex gap-10 text-3xl">
          <FaArrowLeftLong />
          <FaArrowRightLong />
        </div>
      </div>
      <div className="px-5 py-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <TrustedOrg
              borderColor={"orangeRed"}
              title={"GRUBHUB"}
              middleText={">1.3M"}
              midTitle={"Views"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TrustedOrg
              borderColor={"royalBlue"}
              title={"GRUBHUB"}
              middleText={"3X"}
              midTitle={"Views"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TrustedOrg
              borderColor={"orchid"}
              title={"GRUBHUB"}
              middleText={"4X"}
              midTitle={"Views"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TrustedOrg
              borderColor={"orchid"}
              title={"GRUBHUB"}
              middleText={"4X"}
              midTitle={"Views"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedOrgs;
