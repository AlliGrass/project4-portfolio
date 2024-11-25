import { Link } from "react-router-dom"

const Desk = () => {
    return (
      <div className="desk-div">
        <section className='desk-section'>
          <article className='left-monitor'>
            <Link to='/left'>
              <img className="monitor-img"  src="https://fakeimg.pl/1080x1920?text=monitor" alt="" />
            </Link> 
            
          </article>

          <article className='middle-general-article'>
            <div className='profile-div'>
              {/* <img src="src/assets/profile.jpg" alt="" /> */}
              <div className='profile-info-div'>
                <p>help</p>
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