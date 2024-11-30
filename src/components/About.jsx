import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'

import { useContext } from "react"
import ThemeContext from "../Contexts/ThemeContext"

import data from "../data/data.json"

const About = () => {
    const codingTimeline = data.codingTimeline
    const profile = data.profile

    const { isDarkMode } = useContext(ThemeContext)

    return ( 
        <>
            <h1>About Me</h1>
            <section className='about-section'>
                
                <div className="personal-about-div">
                    {profile.profile_about.map((line, index) => (
                        <p key={index}>
                            {line}
                        </p>
                    ))}
                </div> 

                <div className="coding-timeline-div">
                    <h2>Coding Journey</h2>
                    <VerticalTimeline lineColor={isDarkMode ? '#f0f0ff' : '#1B1A55'}>
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