import "./link.css";
import PreviewIcon from "../LinkIcon/PreviewIcon";
const PreviewLink = ({url}:{url:string}) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex justify-center items-center
       gap-1 bg-white h-[40px] w-auto py-3 px-5
        rounded-full font-bold
        link-button"
    >
      <PreviewIcon/>
      Preview
    </a>
  );
};

export default PreviewLink;
