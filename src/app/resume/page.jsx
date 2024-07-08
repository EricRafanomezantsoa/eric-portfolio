'use client';

import { Description } from "@radix-ui/react-dialog";
import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs,} from "react-icons/fa";
import { SiTailwindcss,SiNextdotjs } from "react-icons/si"

//about data
const about = {
    title :'About me',
    description: `Hello! I'm Eric Raf, a passionate and dedicated Front-End Developer with over 2 years of experience in crafting elegant and user-centric digital experiences. My expertise lies in transforming ideas into
     visually stunning and highly functional websites and applications.I have a solid background in front-end development,
      specializing in modern technologies like HTML, CSS, JavaScript, and frameworks such as React.js, Next.js and Tailwind Css.
       My design philosophy is centered on creating seamless user interfaces that not only look good but also offer 
       intuitive and engaging interactions.`,
    info:[
        {
            fieldName:"Name",
            fieldValue:"Eric Raf"
        },
        {
            fieldName:"Phone",
            fieldValue:"+261 33 21 929 14"
        },
        {
            fieldName:"Experience",
            fieldValue:"2+ years"
        },
        {
            fieldName:"Nationality",
            fieldValue:"Malagasy"
        },
        {
            fieldName:"Freelance",
            fieldValue:"Available"
        },
        {
            fieldName:"Email",
            fieldValue:"rafanomezantsoaeric90@gmail.com"
        },
        {
            fieldName:"Language",
            fieldValue:"Malagasy,Francais,Anglais",
        },
    ]
}
//experience data
const experience = {
    title:'Experience',
    description:"As a freelance web developer and instructor with over 2 years of experience, I specialize in creating engaging and user-friendly web applications.My expertise lies in front-end development using modern technologies like React.js, Next.js, and Tailwind CSS. I work closely with clients to understand their needs and deliver solutions that exceed their expectations.",
    items:[
        {
            company:"Freelance",
            position:"Full Stack Developer",
            duration:"2021 - 2023",
        },
        {
            company:"Freelance",
            position:"Front-end Developer Intern",
            duration:"2021 - 2023",
        },
        {
            company:"Freelance",
            position:"Web Instructor",
            duration:"2021 - 2024",
        },
        {
            company:"Frelance",
            position:"Designer",
            duration:"2021-2022",
        },
        {
            company:"Freelance",
            position:"graphic designer",
            duration:"2021 - 2023",
        },
    ]
}
// eduction data
const eduction = {
    icon:'',
    title:'My Educaion',
    description:"I studied at Open Classroom and earned a Bachelor's degree (Bac+3) at CNTEMAD University.",
    items:[
       {
         institution:"Online Course platform(OpenClassroom)",
         degre:"Full Stack web ",
         duration:"2023",
       },
       {
        institution:"University CNTEMAD",
        degre:"Bachelor's degree",
        duration:"2023",
      },
      {
        institution:"Online course (OpenClassroom)",
        degre:"Programming course",
        duration:"2023",
      },
      {
        institution:"Online course (OpenClassroom)",
        degre:"Diploma in Graphic Design",
        duration:"2022-2023",
      },
    ]
}
// skills data

const skills = {
    title:"My skills",
    description:"Passionate about web development, I have gained solid expertise in several modern technologies and tools. Here's an overview of my skills:",
    skillList:[
        {
            icon:<FaHtml5/>,
            name:"html 5",
        },
        {
            icon:<FaCss3/>,
            name:"css 3",
        },
        {
            icon:<FaJs/>,
            name:"Javascript",
        },
        {
            icon:<FaReact/>,
            name:"react.js",
        },
        {
            icon:<SiNextdotjs/>,
            name:"next.js",
        },
        {
            icon:<SiTailwindcss/>,
            name:"tailwind css",
        },
        {
            icon:<FaNodeJs/>,
            name:"node.Js",
        },
        {
            icon:<FaFigma/>,
            name:"figma",
        },

        
    ]
}
import { Tabs,TabsContent,TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return(
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1, transition:{delay:2.4, duration: 0.4, ease:"easeIn"}}}
          className="min-h-[80vh] flex items-center justify-center py-12  xl:py-0" 
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about" >About me</TabsTrigger>
                    </TabsList>
                     {/**content */}
                     <div className="min-h-[70vh] w-full">
                        {/**experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item,index) => {
                                            return(
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                                                items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/**dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/**education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold ">{eduction.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{eduction.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {eduction.items.map((item,index) => {
                                            return(
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                                                items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degre}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/**dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/**Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3  className="text-4xl font-bold ">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((item,index) => {
                                        return(
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center 
                                                        items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-500">{item.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{item.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            
                        </TabsContent>
                        {/**about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl fond-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item,index) => {
                                        return(
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                     </div>

                </Tabs>
               

            </div>

        </motion.div>
    )
}

export default Resume;