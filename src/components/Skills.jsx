import data from "../data/data.json"


const Skills = () => {
  const proficientSkills = data.proficientSkills
  const codingLanguages = data.codingLanguages

  const createSkill = (languageCode, index) => (
    <>
      <li className="skills-li" key={index}>
        <img src={codingLanguages[languageCode].img_src}/>
        <span className="langauge-overlay">{codingLanguages[languageCode].name}</span>
      </li>
      
    </>
    
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