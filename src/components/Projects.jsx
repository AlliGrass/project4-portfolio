import projectList from "../constants/projectList"
import CreateProject from "./CreateProject"
// import PreviewProject from "./PreviewProject"

const Projects = () => {
    return (
        <section>
            <h1>Project</h1>

            <div className="project-preview-section">
                {/* <PreviewProject /> */}
                {/* <iframe src='https://alligrass.github.io/project1_Solitaire/' frameborder="0" /> */}
            </div>


            <div className='projects-list-div'>
               {projectList.map((project, index) => (
                    <CreateProject key={index} {...project} />
                ))}
            </div>
        </section>
    )
}



export default Projects