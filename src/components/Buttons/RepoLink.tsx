import "./link.css";
import ForkIcon from "../LinkIcon/ForkIcon";
const RepoLink = ({url}:{url:string}) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex justify-center items-center
       gap-1 bg-white h-[40px] w-auto py-3 px-5
        rounded-full font-bold
        link-button"
    >
      <ForkIcon/>
      Source Code
    </a>
  );
};

export default RepoLink;
