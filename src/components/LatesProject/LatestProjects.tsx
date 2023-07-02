import React from "react";

//Swiper Imports
//Swiper Effects
import {
   EffectCoverflow,
   Pagination,
   Navigation,
} from "swiper";

//Swiper Main
import {
   Swiper,
   SwiperSlide,
} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Component's css
import "./component.css";

const LatestProjects = () => {
   return (
      <Swiper
         effect="coverflow"
         grabCursor={true}
         centeredSlides={true}
         slidesPerView={"auto"}
         coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
         }}
         modules={[
            EffectCoverflow,
            Pagination,
            Navigation,
         ]}
         pagination={true}
         className="swiper"
         onSlideChange={() =>
            console.log("slide change")
         }
         onSwiper={(swiper) =>
            console.log(swiper)
         }
      >
         <SwiperSlide className="swiper-slide">
            Slide 1
         </SwiperSlide>
         <SwiperSlide className="swiper-slide">
            Slide 2
         </SwiperSlide>
         <SwiperSlide className="swiper-slide">
            Slide 3
         </SwiperSlide>
      </Swiper>
   );
};

export default LatestProjects;
