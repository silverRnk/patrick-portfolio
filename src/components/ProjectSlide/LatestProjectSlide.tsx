import React from 'react'
//Swiper Imports
//Swiper Effects
import {
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
 import "swiper/css/pagination";

import SlideItem from './SlideItem';

import './component.css'

const LatestProjectSlide = () => {
  return (
    <Swiper
         grabCursor={true}
         spaceBetween={30}
         centeredSlides={true}
         slidesPerView={1}
         modules={[
            Pagination,
            Navigation,
         ]}
         
         
         pagination={true}
         className="swiper-project"
      >
        <SwiperSlide className="swiper-item-texture swiper-item-project">
            <SlideItem></SlideItem>
        </SwiperSlide>
        <SwiperSlide className="swiper-item-texture swiper-item-project"/>
      </Swiper>
  )
}

export default LatestProjectSlide