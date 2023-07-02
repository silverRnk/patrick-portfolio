import React from "react";
import myImg from "../assets/test_male_img2.jpg";
import {faker} from "@faker-js/faker"
import HireMe from "../components/HireMe";
const Home = () => {
   return (
      <>
         <div
            id="img-summary-container"
            className="flex flex-col items-center mt-10"
         >
            <div
               id="img-wrapper"
               className="w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] relative rounded-full object-cover bg-[#160949] bg-gradient-gradientimg"
            >
                <div className="w-full h-full absolute img-light-effect rounded-full"></div>
               <img
                  src={myImg}
                  className="img-light-effect w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] rounded-full object-cover bg-[#160949]"
               />
            </div>

            <span className="px-7 sm:w-[600px] mt-10 text-xl/[2rem] sm:text-2xl/[2.5rem] text-center text-[#f5efef]" >
                {faker.lorem.paragraph()}
            </span>
         </div>

         <div id="buttons-chips-container" className="flex flex-col items-center justify-center">
            <HireMe/>

            <div id="chips-container">
                
            </div>
         </div>
      </>
   );
};

export default Home;
