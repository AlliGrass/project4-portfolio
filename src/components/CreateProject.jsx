import { useState } from "react";
import codingLanguages from "../constants/codingLanguages"


const CreateProject = ({ title, img_src, description, languages, preview_link }) => {
    // const [canPreview, setCanPreview] = useState(false);
    // const handlePreviewButton = (event) => {
    //     const projectName = event.target.closest(".project-article").firstChild.innerHTML
    //     // usePreviewProject(projectName)
    // }


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
                        
                        <button disabled={!canPreview}> {canPreview ? 'Preview' : 'Coming Soon'} </button>

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