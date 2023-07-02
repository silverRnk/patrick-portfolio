import DashBoardImg from './assets/DASHBOARD.jpg'
import LoggerApp from './assets/Frame26.png'

type ProjectType = 'Desktop' | 'Mobile'

interface SlideItem {
    title:string,
    imgURL:string,
    projectType: ProjectType
    
}

const slideItems: SlideItem[] = [
    {title: 'School Admin', imgURL: DashBoardImg, projectType: "Desktop"},
    {title: 'Logger', imgURL: LoggerApp, projectType: "Mobile"}
]


interface SkillButton {
    name: string,
    btnColor: string,
}

const skillButtons : SkillButton[] = [
    {name: 'Javascript', btnColor: '#9A5454'},
    {name: 'Typescript', btnColor: '#9A5454'},
    {name: 'PHP', btnColor: '#B5BC5E'},
    {name: 'CSS', btnColor: '#8C4F4F'},
    {name: 'HTML', btnColor: '#8C4F4F'},
    {name: 'Python', btnColor: '#8C4F4F'}
]


export {slideItems, skillButtons}