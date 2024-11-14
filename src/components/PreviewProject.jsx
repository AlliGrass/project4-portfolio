
import { useEffect, useState } from "react";
import projectList from "../constants/projectList";

const PreviewProject = (event) => {
    const [currentPreviewProject, setCurrentPreviewProject] = useState()
    // const projectName = event.target.closest(".project-article").firstChild.innerHTML
    const projectObj = projectList.find(checkingProject => checkingProject['title'] === projectName)

    const projectLink = projectObj?.['preview_link'] || '';
    
    useEffect(() => {
        setCurrentPreviewProject(projectLink)
    }, [projectLink])

    console.log(currentPreviewProject)
    console.log(projectLink)

    return (
        <iframe src={currentPreviewProject} frameborder="0" />
    )
}

export default PreviewProject