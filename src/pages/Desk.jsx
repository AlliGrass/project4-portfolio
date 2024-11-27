import { Link } from "react-router-dom"

import data from "../data/data.json"

const Desk = () => {
  const profile = data.profile
  
    return (
      <div className="desk-div">
        <section className='desk-section'>
          <article className='left-monitor'>
            <Link to='/left'>
              <img className="monitor-img"  src="https://fakeimg.pl/1080x1920?text=monitor" alt="" />
            </Link> 
            
          </article>

          <article className='middle-general-article'>
            <div className='desk-profile-div'>
              <div className="desk-profile-picture-div">
                <img className="desk-profile-img" src={profile.profile_img} alt="" />
              </div>
              <div className='desk-profile-info-div' style={{color:"white"}}>
                <h1>{profile.profile_intro.intro_name}</h1>
                <h2>{profile.profile_intro.intro_quote}</h2>
                <h3>{profile.profile_intro.intro_directive}</h3>
              </div>
            </div>
            <div className='main-monitor'>
              <Link to='/main'>
                <img className="monitor-img" src="https://fakeimg.pl/1920x1080?text=monitor" alt="" />
              </Link>
            </div>
          </article>

          <article className='right-monitor'>
            <Link to='/right'>
              <img className="monitor-img" src="https://fakeimg.pl/1080x1920?text=monitor" alt="" />
            </Link>
            
          </article>
        </section>
      </div>
    )
}

export default Desk