import projectList from "../constants/projectList"
import CreateProject from "./CreateProject"
// import PreviewProject from "./PreviewProject"

const Projects = () => {
    return (
        <section>
            <h1>Project</h1>

            <div className="project-preview-section">
                {/* <PreviewProject /> */}
            </div>

        {/* <div className="projects-list-div">
            <article className="project-article">
                <h2>Title</h2>
                <div className="project-preview-div">
                    <img src='https://fakeimg.pl/400x300?text=preview' alt="" />
                </div>
                <section className="project-info-section">
                    <div className='project-description-div'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti iste, ullam dolorem illo ipsam ratione necessitatibus similique, consequuntur laborum, harum ab facere commodi. Ab eaque cum molestias alias asperiores.</p>
                    </div>
                    <div className="project-spec-div">
                        
                        <button>Preview</button>

                        <ul className="project-lan-ul">
                            <li><img src="https://fakeimg.pl/50x50?text=lan" alt="" /></li>
                            <li><img src="https://fakeimg.pl/50x50?text=lan" alt="" /></li>
                            <li><img src="https://fakeimg.pl/50x50?text=lan" alt="" /></li>
                        </ul>
                    </div>
                </section>
            </article>

            <article className="project-article">
                <h2>Title</h2>
                <div className="project-preview-div">
                    <img src='https://fakeimg.pl/400x300?text=preview' alt="" />
                </div>
                <section className="project-info-section">
                    <div className='project-description-div'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti iste, ullam dolorem illo ipsam ratione necessitatibus similique, consequuntur laborum, harum ab facere commodi. Ab eaque cum molestias alias asperiores.</p>
                    </div>
                    <div className="project-spec-div">
                        
                        <button>Preview</button>

                        <ul className="project-lan-ul">
                            <li><img src="https://fakeimg.pl/50x50?text=lan" alt="" /></li>
                            <li><img src="https://fakeimg.pl/50x50?text=lan" alt="" /></li>
                            <li><img src="https://fakeimg.pl/50x50?text=lan" alt="" /></li>
                        </ul>
                    </div>
                </section>
            </article>
        </div> */}

            


            <div className='projects-list-div'>
               {projectList.map((project, index) => (
                    <CreateProject key={index} {...project} />
                ))}
            </div>
        </section>
    )
}



export default Projects