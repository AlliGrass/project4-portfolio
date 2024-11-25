import { Button } from "antd";
import data from "../data/data.json"
import PreviewContext from "../Contexts/PreviewContext";
import { useContext } from "react";


const CreateProject = ({ title, img_src, description, languages, preview_link, github }) => {
    const { currentPreviewProject, getCurrentPreviewProject } = useContext(PreviewContext)

    const codingLanguages = data.codingLanguages

    const canPreview = preview_link !== '';

    return (
        <article className="project-article">
            <h2>{title}</h2>
            <div className="project-preview-div">
                
                <img width='100%' src={img_src} alt="" />
                
            </div>
            <section className="project-info-section">
                <div className='project-info-div'>
                    <div>
                        <p>{description}</p>
                    </div>
                    <div className="project-spec-div">
                        
                        <button className='preview-button' onClick={() => {getCurrentPreviewProject(preview_link)}} disabled={!canPreview}> {canPreview ? 'Preview' : 'Coming Soon'} </button>
                        <a href={github} target="_blank">
                            <img className="project-github-img" src="src/assets/contacts/githubLight_logo.png" alt="" />
                        </a>
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