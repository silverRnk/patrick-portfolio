
import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
   return (
      <div className="min-h-[100vh] w-full light-source">
         <Navbar />
         <main className="min-h-[100vh] grid justify-items-center">
            <Outlet/>
         </main>
         <Footer/>
      </div>
   );
};

export default Root;
