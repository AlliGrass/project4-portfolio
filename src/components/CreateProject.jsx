import codingLanguages from "../constants/codingLanguages"


const CreateProject = ({ title, img_src, description, languages }) => {
    
    // const handlePreviewButton = (event) => {
    //     const projectName = event.target.closest(".project-article").firstChild.innerHTML
    //     // usePreviewProject(projectName)
    // }

    return (
        <article className="project-article">
            <h2>{title}</h2>
            <div className="project-preview-div">
                <img src={img_src} alt="" />
            </div>
            <section className="project-info-section">
                <div className='project-info-div'>
                    <div>
                        <p>{description}</p>
                        
                    </div>
                    <div className="project-spec-div">
                        
                        <button>Preview</button>

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