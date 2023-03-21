import React from 'react';
import './works.css';

import { FeaturedProject } from '../../components';
import {OtherProjects} from '../../containers';

const fps = [
    {
        title: "Contact Manager", role: "Project Manager and Frontend Developer", 
        description: "A web app for tracking a users contacts.",
        responsibilites: ["Created a UML Use Case Diagram and Entity Relationship Diagram", 
                            "Created Kanban board and Gantt chard to organize the build and track team performance",
                            "Built the landing, login and signup pages using HTML, CSS and JavaScript"],
        technologies: ["HTML", "CSS", "JavaScript"],
        complete: true,
        git: "",
        link: ""
    },
    {
        title: "Household", role: "Project Manager and Frontend Developer",
        description: "A web and mobile app for tracking household tasks, chores and events.",
        responsibilites: ["Created and managed Jira project using Agile development", 
                            "Taught members of team basic React"],
        technologies: ["Jira", "React", "Styled Components", "Agile"],
        complete: false,
        git: "",
        link: ""
    },
]

const Works = () => {
  return (
    <a id="works"> 
        {
        fps.map((fp) => <FeaturedProject title={fp.title} description={fp.description} 
        resp={fp.responsibilites} tech={fp.technologies} complete={fp.complete}/>)
        }
        <OtherProjects/>
    </a>
  )
}

export default Works