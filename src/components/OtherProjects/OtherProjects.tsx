import { FC } from "react";
import PreviewLink from "../Buttons/PreviewLink";
import RepoLink from "../Buttons/RepoLink";
import { otherProjects } from "../../data";

interface IProjectCardProps {
  name:string,
  descriptions:string[],
  previewURL?:string,
  repoURL?:string
};

// const items = ['foo', 'baz', 'foobaz']

export const ProjectCard: FC<IProjectCardProps> = (prop) => {
    const {name, descriptions, previewURL, repoURL} = prop

    return (
        <div role="listitem" className="flex flex-col  h-[300px] w-[350px] bg-[#FEFEFE] p-4 rounded-xl shadow-md shadow-black skill-card-texture ">
            <div className="flex-1">
        <h3 className="w-full text-3xl font-bold text-center md:mb-4">
          {name}
        </h3>
        <ul className="hidden md:block ml-4 text-lg list-disc">
          {descriptions.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <div className="flex flex-row gap-3">
        <PreviewLink url={previewURL}/>
        <RepoLink url={repoURL} />
      </div>
        </div>
    );
}


export const OtherProjects: FC = () => {
    return (
        <div role="list" className="flex items-center justify-center gap-5 mx-[40px]">
            {otherProjects.map((data, index) => {
              return <ProjectCard
              key={`${data.title}-${index}`} 
              name={data.title} 
              descriptions={data.descriptions} 
              previewURL={data.previewURL}
              repoURL={data.repoURL}/>
            })}         

        </div>
    );
}
