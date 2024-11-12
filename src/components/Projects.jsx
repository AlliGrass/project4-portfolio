import projectList from "../constants/projectList"
import CreateProject from "./CreateProject"

const Projects = () => {
    return (
        <>
            <h1>Project</h1>
            <div className='projects-list-div'>
               {projectList.map((project, index) => (
                    <CreateProject key={index} {...project} />
                ))}
            </div>
        </>
    )
}



export default Projects