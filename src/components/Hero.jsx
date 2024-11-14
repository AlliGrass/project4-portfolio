import ScrollingText from "./ScrollingText"

const Hero = () => {
    return (
        <div className='hero-div'>
            <section className="hero-section">
                <article className='hero-article'>
                    <h1>Allison Grasso</h1>
                    <ScrollingText />
                    {/* <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae culpa quod! Adipisci eius architecto libero magnam! Tenetur nihil hic praesentium voluptatibus obcaecati velit, officiis odio quos dicta, adipisci laboriosam.</span> */}
                </article>
                <img className='hero-img' src="src/assets/profile.jpg" alt="" />
            </section>
        </div>
    )
}

export default Hero