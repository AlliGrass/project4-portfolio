import { useContext, useState } from "react";
import CreateProject from "./CreateProject";

import data from "../data/data.json"
import  PreviewContext  from "../Contexts/PreviewContext";

const Projects = () => {

    const { currentPreviewProject, getCurrentPreviewProject } = useContext(PreviewContext)

    const projectList = data.projectList

    return (
        <section>
            <h1>Project</h1>

            

            {currentPreviewProject !== "" ? (
                <section>
                    <div>
                        <h2>{currentPreviewProject.project_title}</h2> {/* if currentPreviewProject !== "" text change to currentProjectPreview.project_title */}
                        <p>{currentPreviewProject.project_instructions}</p>
                    </div>
                    <div className="project-preview-section">
                        <iframe className="project-preview-iframe" src={currentPreviewProject.project_link} frameBorder="0" />
                    </div>
                </section>
            ) : 
                <div>
                    <h2>Click on a project to preview it here</h2>
                </div>
            }

            
            
            <div className='projects-list-div'>
               {projectList.map((project, index) => (
                    <CreateProject key={index} {...project}/>
                ))}
            </div>
        </section>
    )
}



export default Projects