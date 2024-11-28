
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Navbar from "../components/Navbar"
import HeroNavbar from "../components/HeroNavbar"

const MainMonitor = () => {
    return (
        <div>
            <HeroNavbar />
            <Hero />
            <Navbar />
            <section className='GeneralPage'>
                
                <About />
                <Skills />
            </section> 
        </div>
    )
}

export default MainMonitor