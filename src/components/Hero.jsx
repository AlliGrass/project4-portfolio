import ScrollingText from "./ScrollingText"

import data from "../data/data.json"

const Hero = () => {
    const profile = data.profile

    return (
        <div className='hero-div'>
            <section className="hero-section">
                <article className='hero-article'>
                    <h1 className='hero-name'>Allison Grasso</h1>
                    <ScrollingText />
                    {/* <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae culpa quod! Adipisci eius architecto libero magnam! Tenetur nihil hic praesentium voluptatibus obcaecati velit, officiis odio quos dicta, adipisci laboriosam.</span> */}
                </article>
                <img className='hero-img' src={profile.profile_img} alt="" />
            </section>
        </div>
    )
}

export default Hero