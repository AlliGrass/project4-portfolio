import data from "../data/data.json"
import PreviewContext from "../Contexts/PreviewContext";
import { useContext } from "react";


const CreateProject = ({ title, img_src, description, languages, preview_link, instructions, github, setIsLoading }) => {
    const { currentPreviewProject, getCurrentPreviewProject } = useContext(PreviewContext)

    const codingLanguages = data.codingLanguages

    const canPreview = preview_link !== '';

    return (
        <article className="project-article">
            <h2>{title}</h2>
            <div className="project-display-div">
                <div className="project-img-div">
                    <img width='100%' src={img_src} alt="" />
                    <a className="project-github" href={github} target="_blank">
                        <img className="project-github-img" src="/assets/contacts/githubLight_logo.png" alt="" />
                    </a>
                </div>
                
                
            </div>
            <section className="project-info-section">
                <div className='project-info-div'>
                    <div>
                        <p>{description}</p>
                    </div>
                    <div className="project-spec-div">
                        <div className="project-buttons">
                            <button className='preview-button' onClick={() => {
                                    setIsLoading(true)
                                    getCurrentPreviewProject({
                                        project_title: title,
                                        project_link: preview_link,
                                        project_instructions: instructions
                                        }
                                    )
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth", 
                                      })
                                    
                                }} disabled={!canPreview}> {canPreview ? 'Preview' : 'N/A'} </button>
                            


                        </div>
                        
                        <ul className="project-lan-ul">
                            {languages.map((languageCode, index) => (
                                <li key={index}>
                                    <img src={codingLanguages[languageCode].img_src} key={index}/>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                    
                </div>
            </section>
            
        </article>
    )
}

export default CreateProject