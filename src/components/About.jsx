import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'

import { useContext } from "react"
import ThemeContext from "../Contexts/ThemeContext"

import data from "../data/data.json"

const About = () => {
    const codingTimeline = data.codingTimeline

    const { isDarkMode } = useContext(ThemeContext)

    return ( 
        <>
            <h1>About Me</h1>
            <section className='about-section'>
                
                <div className="personal-about-div">
                <p>Having been a program enthusiast for more than 4 years I have experience in many fields which include Frontend Development, Backend Development, Cloud Computing and Network Operations.</p>

                <p>I have the most experience in Full-Stack applications where most of my projects have been built and/or adapted to showcase my work.</p>
                </div> 

                <div className="coding-timeline-div">
                    <h2>Coding Journey</h2>
                    <VerticalTimeline lineColor={isDarkMode ? '#f0f0ff' : '#1a1a1d'}>
                        {codingTimeline.map((timelineLanguage, index) => (
                            <VerticalTimelineElement
                                className="timeline-language-element"
                                contentStyle= {{ 
                                    background: 'none', 
                                    color: isDarkMode ? '#f0f0ff' : '#1a1a1d'
                                }}
                                contentArrowStyle= {{ 
                                    borderRight: isDarkMode ? '7px solid #f0f0ff' : '7px solid #1a1a1d' 
                                }}
                                iconStyle= {{ 
                                    background: isDarkMode ? 'rgb(89,36,74) linear-gradient(-30deg, rgba(89,36,74,1) 0%, rgba(69,12,50,1) 43%, rgba(166,77,121,1) 100%)' : 'rgb(128,134,176) linear-gradient(-30deg, rgba(128,134,176,1) 0%, rgba(240,240,255,1) 61%, rgba(166,177,255,1) 100%)',
                                    border: isDarkMode ? '#f0f0ff' : '#1a1a1d'
                                }}
                                position="right"
                                icon={
                                <div className="timeline-language-icon-div" > 
                                    <img className='timeline-language-icon' src={timelineLanguage.icon} alt="" /> 
                                </div>}>
                                <p className="timeline-language-span">{timelineLanguage.codingLanguage}</p>
                                <span>{timelineLanguage.year}</span>
                            </VerticalTimelineElement>

                        ))}

                       
                    </VerticalTimeline>
                </div>
            </section>
        </>
    )
}

export default About