import { useContext, useState } from "react";
import CreateProject from "./CreateProject";

import data from "../data/data.json"
import  PreviewContext  from "../Contexts/PreviewContext";

const Projects = () => {

    const { currentPreviewProject, getCurrentPreviewProject } = useContext(PreviewContext)

    const [isLoading, setIsLoading] = useState()

    const projectList = data.projectList

    return (
        <section>
            <h1>Project</h1>

            {currentPreviewProject !== "" ? (
                <section className="project-preview-container-section">
                    <div>
                        <h2>{currentPreviewProject.project_title}</h2>
                        <p>{currentPreviewProject.project_instructions}</p>
                    </div>
                    <div className="project-preview-section">
                        <div className="project-preview-loading" style={
                            {opacity: isLoading ? "1" : "0"}
                        }> </div>
                        
                        <iframe className="project-preview-iframe" src={currentPreviewProject.project_link} frameBorder="0" onLoad={() => setIsLoading(false)}/>
                    </div>
                </section>
            ) : 
                <div className="preview-guide">
                    <h2>Click on a project to preview it here</h2>
                </div>
            }

            <div className="preview-guide-small">
                <h2>Screen is too small to preview project</h2>
            </div>

            
            
            <div className='projects-list-div'>
               {projectList.map((project, index) => (
                    <CreateProject key={index} {...project} setIsLoading={setIsLoading}/>
                ))}
            </div>
        </section>
    )
}



export default Projects