import DashBoardImg from "./assets/DASHBOARD.jpg";
import LoggerApp from "./assets/Frame26.png";

type ProjectType = "Desktop" | "Mobile";

interface SlideItem {
   title: string;
   imgURL: string;
   projectType: ProjectType;
}

const slideItems: SlideItem[] = [
   {
      title: "School Admin",
      imgURL: DashBoardImg,
      projectType: "Desktop",
   },
   {
      title: "Logger",
      imgURL: LoggerApp,
      projectType: "Mobile",
   },
];

/**
 * type def for skillButtons
 */
interface SkillButton {
   name: string;
   btnColor: string;
}

const skillButtons: SkillButton[] = [
   { name: "Javascript", btnColor: "#9A5454" },
   { name: "Typescript", btnColor: "#9A5454" },
   { name: "PHP", btnColor: "#B5BC5E" },
   { name: "CSS", btnColor: "#8C4F4F" },
   { name: "HTML", btnColor: "#8C4F4F" },
   { name: "Python", btnColor: "#8C4F4F" },
];

interface SkillCard {
   name: string;
   logoURL?: string;
   logo?: JSX.Element;
   alt?: string;
   descriptions: string[];
   rating?: number;
}

const skillCards: SkillCard[] = [
   {
      name: "HTML",
      logoURL:
         "https://img.icons8.com/dusk/64/html-5.png",
      alt: "html-5",
      descriptions: [
         "Fundamental HTML",
         "HTML Layout",
         "HTML Semantics",
         "WAI-ARIA",
      ],
   },
   {
    name: "CSS",
      logoURL:
         "https://img.icons8.com/dusk/64/css3.png",
      alt: "css3",
      descriptions: [
         "Fundamental CSS",
         "Media Query and Animations",
         "CSS frameworks such SASS, Bootstrap, and Tailwind CSS",
      ],
   },
   {
    name: "Javascript",
    logoURL: "https://img.icons8.com/dusk/64/javascript-logo.png",
    alt: "javascript",
    descriptions:[
        "Fundental of javascript",
        "JS libraries such as ReactJS and JQuery",
        "Usage of module bundlers such as Webpack and Vite"
    ]
   },
   {
    name: "Typescript",
    logoURL: "https://img.icons8.com/color/48/typescript.png",
    alt: "typescript",
    descriptions:[
        "Fundamental of typescript",
        "Typescript for npm libraries"
    ]
   },
   {
    name:"ReactJS",
    logoURL:"",
    alt:"react-logo",
    descriptions:[
        "JSX, React Hooks, React Lifecycles",
        "Redux toolkit",
        
    ]
   },
   {
    name:"PHP",
    logoURL:"",
    alt:"php-logo",
    descriptions:[]
   },
   {
    name:"MySQL",
    logoURL:"",
    alt:"mysql-logo",
    descriptions:[]
   },
   {
    name:"Figma",
    logoURL:"",
    alt:"figma-logo",
    descriptions:[]
   },
   {
    name:"Linux OS",
    logoURL:"",
    alt:"linux-os-logo",
    descriptions:[]
   }
];

export { slideItems, skillButtons, skillCards };
