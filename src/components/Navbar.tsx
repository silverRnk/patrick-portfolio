import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
   {
      name: "Home",
      path: "/",
   },
   {
      name: "Projects",
      path: "/projects",
   },
   {
      name: "Resume",
      path: "/resume",
   },
];

const Navbar = () => {
   return (
      <nav className="flex flex-col items-center justify-center pt-5 sm:pt-10">
         <ul className="flex items-center justify-center gap-8 sm:gap-[3rem] pb-6 text-xl sm:text-2xl font-bold tracking-widest">
            {navLinks.map((navLink) => (
               <li>
                  <NavLink to={navLink.path}>
                     {navLink.name}
                  </NavLink>
               </li>
            ))}
         </ul>
         <div className="min-h-[3px] w-[300px] sm:w-[600px] bg-[#000] rounded-full"></div>
      </nav>
   );
};

export default Navbar;
