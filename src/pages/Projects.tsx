import { OtherProjects } from "../components/OtherProjects/OtherProjects";
import LatestProjectSlide from "../components/ProjectSlide/LatestProjectSlide";

const Projects = () => {
  return (
    <div className="flex flex-col gap-3">
      <section className="grid py-6 px-4">
        <div className="justify-self-center glass-effect-yellow max-w-[1200px] min-h-[90vh] min-w-[85vw] lg:min-w-[960px]  w-full p-4 sm:p-10">
          <div
            id="skill-container-header"
            className="hidden justify-between"
          >
            <input />
          </div>

          <h3 className="text-xl sm:text-4xl mb-[0.75em] font-bold">
            Featured Project
          </h3>

          <LatestProjectSlide />

          <h3 className="text-xl sm:text-4xl mt-[2rem] mb-[0.75em] font-bold">
            Other Projects
          </h3>
          <OtherProjects/>
        </div>
      </section>
    </div>
  );
};

export default Projects;
