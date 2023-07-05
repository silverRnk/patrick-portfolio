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
   { name: "Javascript", btnColor: "#8C4F4F" },
   { name: "Typescript", btnColor: "#8C4F4F" },
   { name: "PHP", btnColor: "#8C4F4F" },
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
    logoURL:"https://img.icons8.com/officel/40/react.png",
    alt:"react-logo",
    descriptions:[
        "JSX, React Hooks, React Lifecycles",
        "Redux toolkit",
        "React-Router-DOM"
        
    ]
   },
   {
    name:"PHP",
    logoURL:"https://img.icons8.com/officel/40/php-logo.png",
    alt:"php-logo",
    descriptions:[
      "Fundamental PHP",
      "Laravel framework"
    ]
   },
   {
    name:"MySQL",
    logoURL:"https://img.icons8.com/color/48/mysql-logo.png",
    alt:"mysql-logo",
    descriptions:[
      "MySQL Queries",
      "Relational Database"
    ]
   },
   {
    name:"Figma",
    logoURL:"https://img.icons8.com/officel/40/figma.png",
    alt:"figma-logo",
    descriptions:[
      "Basic UI design skills"
    ]
   },
   {
    name:"Linux",
    logoURL:"https://img.icons8.com/color/48/linux--v1.png",
    alt:"linux-os-logo",
    descriptions:[
      "Linux Distro: Ubuntu",
      "sudo and curl commands",
      "systemctl and systemd"
    ]
   }
];

export { slideItems, skillButtons, skillCards };
