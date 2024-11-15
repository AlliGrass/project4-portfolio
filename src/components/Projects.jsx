import React, { useState } from "react";
import projectList from "../constants/projectList"; 
import CreateProject from "./CreateProject";
import PreviewProject from "./PreviewProject";

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const handlePreview = (projectLink) => {
        setSelectedProject(projectLink);
    };

    return (
        <section>
            <h1>Project</h1>

            <div className="project-preview-section">
                {/* <PreviewProject previewLink={selectedProject}/> */}
                {/* <iframe src='https://alligrass.github.io/project1_Solitaire/' frameborder="0" /> */}
            </div>


            <div className='projects-list-div'>
               {projectList.map((project, index) => (
                    <CreateProject key={index} {...project}/>
                ))}
            </div>
        </section>
    )
}



export default Projects