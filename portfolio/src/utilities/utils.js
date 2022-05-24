import AboutMe from '../ContentContainer/AboutMe/AboutMe';
import Home from '../ContentContainer/Home/Home';
import Work from '../ContentContainer/WorkHistory/Work';
import Education from '../ContentContainer/Education/Education';
import Skill from '../ContentContainer/Skill/Skill';
import ContactMe from '../ContentContainer/ContactMe/ContactMe';
import Award from '../ContentContainer/Awards/Award';

export  const TOTAL_SCREENS = [
    {
        screen_name:"Home",
        component: Home
    }
    ,
    {
        screen_name:"About Me",
        component: AboutMe
    }
    ,
    {
        screen_name:"Work",
        component: Work
    }
    ,
    {
        screen_name:"Skill-Set",
        component: Skill
    }
    ,
    {
        screen_name:"Education",
        component: Education
    }
    ,
    {
        screen_name:"Awards",
        component: Award
    }
    ,
    {
        screen_name:"Contact Me",
        component: ContactMe
    }
    ,
];

export const GET_SCREEN_INDEX = (screen_name) =>
{
    if (!screen_name)
    {
        return -1
    }

    for(let i=0;i<TOTAL_SCREENS.length;i++)
    {
        if(TOTAL_SCREENS[i].screen_name === screen_name)
        {
            return i;
        }
    }
    return -1;

}

export  const WORK_EXPERIENCE = [
    {
        title:"Incoming Software Engineer Intern Summer 2022",
        organization: "Salom Build",
        duration:"Jun 2022 - Aug 2022",
        work:[],

    }
    ,
    {
        title:"Graduate Teaching Assistant",
        organization: "University of North Carolina at Charlotte",
        duration:"Jan 2022 - May 2022",
        work:["-Subject: Web-Based Application Design and Development at UNC Charlotte",
        "-Assisted professor with grading student's assignments.",
        "-Solved students' doubts around HTML-CSS-JS.",
        "-Helped in creating project solutions and design ideas."],
    },
    {
        title:"Front End Developer and Application Developer",
        organization: "Schlumberger",
        duration:"Mar 2018 - Jul 2021",
        work:["-Worked on React and Angular projects. Created dynamic template libraries in React.",
            "-Worked on developing User Interface on Xamarin iOS and Xamarin Android.", 
            "-Created Component libraries in Xamarin iOS to be reused by the entire team.", 
            "-Created common business logic in Xamarin using MVVM methodology.",
            "-Migrated legacy web applications into mobile applications.",
            "-Engaged in Agile SCRUM Methodologies and actively participated in all phases of Software Development Life Cycle (SDLC) to build scalable, robust web and mobile applications."],
    }

];

export  const EDUCATION = [
    {
        degree:"Master of Science in Computer Science",
        institute: "University of North Carolina at Charlotte",
        duration:"Aug 2021 - May 2023",
        grade:"Cgpa: 3.75/4.0",
        courses:[],
    },
    {
        degree:"Post Graduate Diploma in Digital Computing",
        institute: "CDAC, Pune",
        duration:"Aug 2017 - Mar 2018",
        grade:"A Grade",
        courses:[],
    },
    {
        degree:"Bachelor of Engineering, Computer Science",
        institute: "Shivaji University, India",
        duration:"Aug 2012 - May 2016",
        grade:"Cgpa: 3.6/4.0",
        courses:[],
    }
    
];

export const SKILLS = [
    {
        type:"Languages",
        items: [
            {
                name:"Python",
                image:"python"
            },
            {
                name:"Java",
                image:"java"
            },
            {
                name:"JavaScript",
                image:"javascript"
            },
            {
                name:"TypeScript",
                image:"typescript"
            },
            {
                name:"C#",
                image:"csharp"
            },
            
            {
                name:"SQL",
                image:"sql"
            }
        ]
    },   
    {
        type:"Web Technologies",
        items: [
            {
                name:"React",
                image:"react"
            },
            {
                name:"Angular",
                image:"angular"
            },
            {
                name:"Node",
                image:"node"
            },
            {
                name:"HTML",
                image:"html"
            },
            {
                name:"CSS",
                image:"css"
            },
        ]
    },
    {
        type:"Frameworks & Tools",
        items: [
            {
                name:"Visual Studio",
                image:"vs"
            },
            {
                name:"Visual Studio Code",
                image:"vsc"
            },
            {
                name:"Xamarin",
                image:"xamarin"
            },
            {
                name:"Xcode",
                image:"xcode"
            },
            {
                name:"GitHub",
                image:"github"
            },
            {
                name:"Jupyter",
                image:"jupyter"
            },
        ]
    },    
];

export  const AWARDS = [
    {
        name:"Awesome Award",
        organization: "Schlumberger",
        duration:"Jul 2020 - Sep 2020",
        purpose:[
        'In Q3 of 2020, when "Work-From-Home" culture began I simultaneously worked on 3 live projects - "eClaims" in which I worked as a front-end developer - created reusable templates, "MDM Wells" for integrating Google Map APIs and as a Mobile Application Developer working in Xamarin - integrating one newly required feature into an existing application. I also had to manage communications with the backend and the QA team. I was not only successfully able to work simultaneously but I also delivered my deliverables within the given timeframe.'
        ],
        image:"award1.png"
    },
    {
        name:"Well Done Award",
        organization: "Schlumberger",
        duration:"Oct 2019 - Dec 2019",
        purpose:[`One of the valued products of Schlumberger's Digital Productivity Services Team are "eClaims" and "ApproveBuddy". I participated in eClaims's and ApproveBuddy's phases right from its genesis to its completion. I single handedly developed the Business logic of the applications along with their User Interfaces for the iOS in Xamarin. With no lead developer present at the given moment, I looked after both the applications development and collaborated with various teams.`,`I was recognized for my Leadership, Extreme Dedication and Collaboration efforts`],
        image:"award2.png"
    },
    {
        name:"Merit Scholarship",
        organization: "Shivaji University, India",
        duration:"Apr 2016 - Present",
        purpose:['Shivaji University granted me a Merit Scholarship for Academic Year 2015-2016, in the Third Year of My Engineering course for consistent Academic excellence and Representing Shivaji University at National Level Badminton Tournaments for 3 Years.'],
        image:"award3.png"
    }
];