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


            {currentPreviewProject !== "" && (
                <div className="project-preview-section">
                    <iframe className="project-preview-iframe" src={currentPreviewProject} frameBorder="0" />
                </div>
            )}
            <div className='projects-list-div'>
               {projectList.map((project, index) => (
                    <CreateProject key={index} {...project}/>
                ))}
            </div>
        </section>
    )
}



export default Projects