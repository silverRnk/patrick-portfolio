
//Swiper Imports
//Swiper Effects
import { Pagination, Navigation } from "swiper";

//Swiper Main
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SlideItem from "./SlideItem";
import { featureProjectSlide as projects } from "../../data";

import "./component.css";

const LatestProjectSlide = () => {
  return (
    <Swiper
      grabCursor={true}
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={1}
      modules={[Pagination, Navigation]}
      pagination={true}
      className="swiper-project"
    >
      {projects.map((proj, index) => {
        return (
          <SwiperSlide key={index} className="swiper-item-texture swiper-item-project">
            <SlideItem
              title={proj.title}
              previewURL={proj.previewURL}
              repoURL={proj.repoURL}
              imgURL={proj.imgURL}
              descriptions={proj.descriptions}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default LatestProjectSlide;
