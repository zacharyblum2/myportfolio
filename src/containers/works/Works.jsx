import React from 'react';
import './works.css';

import { FeaturedProject } from '../../components';
import {OtherProjects} from '../../containers';

const fps = [
    {
        title: "Contact Manager", role: "Project Manager and Frontend Developer", 
        description: "A web app for tracking a users contacts. View your contacts, search for any contact, add, edit and delete contacts.",
        responsibilites: ["Created a UML Use Case Diagram and Entity Relationship Diagram", 
                            "Created Kanban board and Gantt chard to organize the build and track team performance",
                            "Built the landing, login and signup pages using HTML, CSS and JavaScript"],
        technologies: ["HTML", "CSS", "JavaScript"],
        complete: true
    },
    {
        title: "Household", role: "Project Manager and Frontend Developer",
        description: "A web and mobile app for tracking household tasks, chores and events. Create a household, invite members, create lists (i.e. grocery store, utilities), create tasks, view calendar with household member events. ",
        responsibilites: ["Gather project requirements and create product description, including minimum viable product (MVP)", 
                            "Organize project using Agile framework, with weekly sprints and standups.",
                            "Teach React to front-end team, and help build the UI for the application."],
        technologies: ["Jira", "React", "Agile"],
        complete: false
    },
]

const Works = () => {
  return (
    <a id="works"> 
      <div className="featured">
        {
        fps.map((fp) => <FeaturedProject title={fp.title} description={fp.description} 
        resp={fp.responsibilites} tech={fp.technologies} complete={fp.complete}/>)
        }
      </div>
      <OtherProjects/>
    </a>
  )
}

export default Works