import React from "react";

//SkillCard css
import "./component.css";

/**
 * 
 * @param props 
 * @returns 
 */
const SkillCard = (props: {
   name?: string;
   logoURL?: string;
   Logo?: JSX.Element;
   alt?:string;
   descriptions?: string[];
   rating?:number
}) => {
   const { name, logoURL, Logo, alt, descriptions } =
      props;
   return (
      <div
         role="listitem"
         className="skill-card-effect w-[110px] h-[110px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-white rounded-xl shadow-md shadow-black grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-custom-2 p-3 cursor-pointer sm:cursor-default"
      >
         <div className="row-span-1 col-span-1 flex flex-col items-center justify-center">
            <h5 className="mb-1 text-base md:text-lg font-bold">
               {name}
            </h5>
            {logoURL ? (
               <img
                  src={logoURL}
                  alt={alt}
                  className="w-[60px] h-[60px] md:w-[75px] md:h-[75px]"
               />
            ) : Logo ? (
               Logo
            ) : (
               <></>
            )}
         </div>
         <div className="hidden sm:block row-span-1 col-span-1"></div>
         <div className="hidden sm:block col-span-2 p-3 pl-8 ">
            <ul className="text-base md:text-lg font-medium list-disc">
               {descriptions?.map(item => (
                  <li>{item}</li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default SkillCard;
