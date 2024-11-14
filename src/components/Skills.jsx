import codingLanguages from "../constants/codingLanguages"


const Skills = () => {
  const proficientSkills = {
    technical: ['html', 'css', 'js', 'cpp', 'java'],
    environment: ['node', 'rct', 'eide', 'psql']
  }

  const createSkill = (languageCode, index) => (
    <li key={index}>
      <img src={codingLanguages[languageCode].img_src}/>
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