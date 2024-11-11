import NavButtons from "../components/NavButtons"
import Intro from "../components/Intro"
import About from "../components/About"
import Skills from "../components/Skills"

const MainMonitor = () => {
    return (
        <section className='GeneralPage'>
            <Intro />
            <About />
            <Skills />
        </section> 
    )
}

export default MainMonitor