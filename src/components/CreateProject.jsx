import codingLanguages from "../constants/codingLanguages"


const CreateProject = ({ title, img_src, description, languages }) => {
    return (
        <article>
            <h2>{title}</h2>
            <div>
                <img src={img_src} alt="" />
            </div>
            <div className='project-info-div'>
                <p>{description}</p>
                <ul className="project-lan-ul">
                    {languages.map((languageCode, index) => (
                        <img src={codingLanguages[languageCode].img_src} key={index}/>
                    ))}
                    
                </ul>
            </div>
        </article>
    )
}

export default CreateProject