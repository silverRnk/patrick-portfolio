import React from "react";

//Footers css
import "./component.css";
import LinkinIcon from "../SVGIcons/LinkinIcon";
import EmailIcon from "../LinkIcon/EmailIcon";

const Footer = () => {
   return (
      <footer className="footer-texture footer-shadow mt-10 h-[100px] flex flex-row bg-[#A0764B] py-3">
         <div
            id="left-footer"
            className="flex-2"
         ></div>
         <div
            id="center-footer"
            className="flex-3 flex items-center justify-center text-4xl font-bold text-[#f0ebeb]"
         >
            <h1 className="footer-h1-text">
               Patrick Bautista
            </h1>
         </div>
         <div
            id="right-footer"
            className="flex-2"
         >
            <LinkinIcon width="30" height="30" />
            <EmailIcon width={30} height={30}/>
         </div>
      </footer>
   );
};

export default Footer;
