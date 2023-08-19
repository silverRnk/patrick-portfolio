

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

import { slideItems } from "../../data";

const LatestProjects = () => {
   return (
      <Swiper
         effect="coverflow"
         grabCursor={true}
         centeredSlides={true}
         slidesPerView={'auto'}
         coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
         }}
         modules={[
            EffectCoverflow,
            Pagination,
            Navigation,
         ]}
         
         pagination={true}
         className="swiper-home"
      >
         {slideItems.map((slideItem) => (
            <SwiperSlide className="swiper-slide-home-project flex flex-col justify-center items-center gap-3">
               <img src={slideItem.imgURL}  className="w-[200px] sm:w-[250px] md:w-[300px] h-[200px] object-cover shadow-md shadow-gray"/>
               <h5 className="slide-title-text-shadow text-white text-xl">{slideItem.title}</h5>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default LatestProjects;
