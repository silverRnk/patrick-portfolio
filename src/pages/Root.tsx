import React from "react";
import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";

const Root = () => {
   return (
      <div className="min-h-[100vh] w-full light-source">
         <Navbar />
         <main>
            <Outlet/>
         </main>
      </div>
   );
};

export default Root;
