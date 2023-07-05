import myImg from "../assets/Me.jpg";
import HireMe from "../components/HireMe";
import { skillButtons } from "../data";
import SkillChip from "../components/SkillChip";
import { Link } from "react-router-dom";
import LatestProjects from "../components/LatesProject/LatestProjects";

const Home = () => {
   return (
      <>
         <section
            id="img-summary-container"
            className="justify-self-center max-w-[100vw] min-w-[350px] flex flex-col items-center justify-center mt-10"
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

            <span className="px-7 sm:w-[600px] mt-10 text-xl/[2rem] sm:text-2xl/[2.5rem] text-center text-[#f5efef]">
               
            </span>
         </section>

         <section
            id="buttons-chips-container"
            className="flex flex-col items-center justify-center mt-6 "
         >
            <HireMe />

            <div
               id="chips-container"
               className="sm:max-w-[500px] flex flex-row justify-center justify-items-center flex-wrap gap-3 mb-10"
            >
               {skillButtons.map((skill) => (
                  <SkillChip
                     name={skill.name}
                     color={skill.btnColor}
                  />
               ))}
               <Link to={"/skills"}>
                  <span className="h-[55px] underline text-xl capitalize flex items-end text-[#fff] hover:text-[#0000ff]">
                     see more
                  </span>
               </Link>
            </div>
         </section>
         <section id="latest-project-section" className="justify-self-center mb-5">
            <h3 className="px-3 text-xl sm:text-2xl text-white mb-[1em] font-bold">
               Latest Project
            </h3>
            <LatestProjects />
         </section>
      </>
   );
};

export default Home;
