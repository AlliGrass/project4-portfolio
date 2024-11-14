
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Navbar from "../components/Navbar"

const MainMonitor = () => {
    return (
        <div>
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