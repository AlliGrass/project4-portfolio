import ScrollingText from "./ScrollingText"

import data from "../data/data.json"
import { Button } from "antd"

const Hero = () => {
    const profile = data.profile

    return (
        <div className='hero-div'>
            <section className="hero-section">
                <article className='hero-article'>
                    <h1 className='hero-name'>Allison Grasso</h1>
                    <ScrollingText />
                    <h2 className="hero-project-calltoaction">Check out my <Button href="/Projects">Projects</Button></h2>
                </article>
                <img className='hero-img' src={profile.profile_img} alt="" />
            </section>
            <div class="scroll-down-arrow"></div>
        </div>
    )
}

export default Hero