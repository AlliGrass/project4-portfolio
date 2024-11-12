
import Intro from "../components/Intro"
import About from "../components/About"
import Skills from "../components/Skills"
import Navbar from "../components/Navbar"

const MainMonitor = () => {
    return (
        <section className='GeneralPage'>
            <Intro />
            <Navbar />
            <About />
            <Skills />
        </section> 
    )
}

export default MainMonitor