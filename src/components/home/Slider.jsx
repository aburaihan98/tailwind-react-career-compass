import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import S1 from "../../assets/slider/s1.jpeg";
import S2 from "../../assets/slider/s2.jpeg";
import S3 from "../../assets/slider/s3.jpeg";
import S4 from "../../assets/slider/s4.jpeg";

export default function Slider() {
  return (
    <>
      <div className=" relative lg:mb-12 mb-6  m-auto ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img
              src={S1}
              alt="doctor"
              className="lg:h-[458px] h-[200px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={S2}
              alt="doctor"
              className="lg:h-[458px] h-[200px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={S3}
              alt="doctor"
              className="lg:h-[458px] h-[200px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={S4}
              alt="doctor"
              className="lg:h-[458px] h-[200px] w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
