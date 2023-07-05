import React from "react";

//Footers css
import "./component.css";
import LinkinIcon from "../SVGIcons/LinkinIcon";
import EmailIcon from "../LinkIcon/EmailIcon";
import FacebookIcon from "../SVGIcons/FacebookIcon";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className="footer-texture footer-shadow footer-layout mt-10 h-fit md:h-[110px] bg-[#A0764B] py-3">
         <div
            id="site-map-container"
            className="flex-2 grid grid-cols-2 grid-rows-2 justify-items-center gap-3 p-2"
         >
            <Link to={'/'} className="site-map-link">Home</Link>
            <Link to={'/skills'} className="site-map-link">Skills</Link>
            <Link to={'/projects'} className="site-map-link">Projects</Link>
            <Link to={'/resume'} className="site-map-link">Resume</Link>
         </div>
         <div
            id="center-footer"
            className="center-footer-layout flex-3 flex items-center justify-center text-4xl font-bold text-[#f0ebeb]"
         >
            <h1 className="footer-h1-text">
               Patrick Bautista
            </h1>
         </div>
         <div
            id="right-footer"
            className="right-footer-layout flex-2 flex flex-row justify-center items-center gap-5"
         >
            <LinkinIcon width="30" height="30" />
            <EmailIcon width={30} height={30}/>
            <FacebookIcon width={30} height={30}/>
         </div>
      </footer>
   );
};

export default Footer;
