import { Link } from "react-router-dom"

const Desk = () => {
    return (
        <section className='desk-section'>
          <article className='left-monitor'>
            <Link to='/left'>
              <img width='100%' src="https://fakeimg.pl/1080x1920?text=monitor" alt="" />
            </Link>
            
          </article>

          <article className='middle-general-article'>
            <div className='profile-div'>
              <img width='100%' src="src/assets/profile.jpg" alt="" />
              <div className='profile-info-div'>
                <p>help</p>
              </div>
            </div>
            <div className='main-monitor'>
              <Link to='/main'>
                <img width='100%' src="https://fakeimg.pl/1920x1080?text=monitor" alt="" />
              </Link>
            </div>
          </article>

          <article className='right-monitor'>
            <Link to='/right'>
              <img width='100%' src="https://fakeimg.pl/1080x1920?text=monitor" alt="" />
            </Link>
            
          </article>
        </section>
    )
}

export default Desk