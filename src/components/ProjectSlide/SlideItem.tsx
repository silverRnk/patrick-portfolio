import React from "react";
import { SwiperSlide } from "swiper/react";
import "./component.css";

const SlideItem = () => {
  return (
    <div className="slide-item-container-project">
      <div className="bg-slate-400">
        <h3 className="text-4xl font-bold text-center md:text-left md:mb-4">Project Title</h3>
        <ul className="hidden md:block ml-3 text-lg">
          <li>Project description 1</li>
          <li>Project description 2</li>

        </ul>
      </div>
      <div className="bg-[#00ff00]">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SlideItem;
