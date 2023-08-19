import React from "react";
import { SwiperSlide } from "swiper/react";
import "./component.css";
import PreviewLink from "../Buttons/PreviewLink";
import RepoLink from "../Buttons/RepoLink";
import project1 from '../../assets/DASHBOARD.jpg'

const SlideItem = () => {
  return (
    <div className="slide-item-container-project">
      <div>
        <h3 className="text-4xl font-bold text-center md:text-left md:mb-4">Project Title</h3>
        <ul className="hidden md:block ml-3 text-lg">
          <li>Project description 1</li>
          <li>Project description 2</li>

        </ul>
      </div>
      <div className="flex flex-col-reverse md:flex-col">
        <div className="flex gap-3 flex-wrap align-middle justify-center p-1"><PreviewLink/><RepoLink/></div>
        <div className="flex-1 flex items-center justify-center">
          <img src={project1}
           className="h-[200px] w-[300px] md:w-[350px] md:h-[250px] object-cover shadow-md"/>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
