
import "./component.css";
import PreviewLink from "../Buttons/PreviewLink";
import RepoLink from "../Buttons/RepoLink";

export interface SlideItemProps {
  title: string;
  descriptions?: string[];
  previewURL: string;
  repoURL: string;
  imgURL: string;
}

const SlideItem = (props: SlideItemProps) => {
  const { title, descriptions, previewURL, repoURL, imgURL } = props;
  return (
    <div className="slide-item-container-project">
      <div>
        <h3 className="w-full text-4xl font-bold text-center md:mb-4">
          {title}
        </h3>
        <ul className="hidden md:block ml-4 text-lg list-disc">
          {descriptions.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <div className="flex flex-col-reverse md:flex-col">
        <div className="flex gap-3 flex-wrap align-middle justify-center p-1">
          <PreviewLink url={previewURL} />
          <RepoLink url={repoURL} />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={imgURL}
            className="h-[200px] w-[300px] md:w-[350px] md:h-[250px] object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
