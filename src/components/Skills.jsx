import codingLanguages from "../constants/codingLanguages"
import proficientSkills from "../constants/proficientSkills"


const Skills = () => {
  const createSkill = (languageCode, index) => (
    <li>
      <img src={codingLanguages[languageCode].img_src} key={index}/>
    </li>
  )

    return (
        <div className='skills-div'>
        <h1>Skills</h1>
        <article>
          <h2>Technical Languages</h2>
          <div>
            <ul className='skills-ul'>
              {proficientSkills['technical'].map((languageCode, index) => createSkill(languageCode, index))}
            </ul>
          </div>
          <h2>Technical Frameworks</h2>
          <div>
              <ul className='skills-ul'>
                {proficientSkills['environment'].map((languageCode, index) => createSkill(languageCode, index))}
              </ul>
          </div>
        </article>
      </div>
    )
}

export default Skills