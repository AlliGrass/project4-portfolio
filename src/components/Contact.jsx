const Contact = () => {
    const link = 'link.com.yippee'
    const contactList = [
        {
            social_site: 'Gmail',
            img_src: 'src/assets/contacts/gmail.logo.png',
            link: link
        },
        {
            social_site: 'GitHub',
            img_src: 'src/assets/contacts/githubLight_logo.png',
            link: 'https://github.com/AlliGrass'
        },
        {
            social_site: 'LinkedIn',
            img_src: 'src/assets/contacts/linkedin_logo.png',
            link: 'https://www.linkedin.com/in/allison-grasso-4a1209224/'
        }
    ]

    return (
        <div className='contact-div'>
            <h2>Contact</h2>
            <section className="contact-list-section">
                {contactList.map((social, index) => (
                    <a className='method-contact-div' href={social.link} key={index}>
                        <img src={social.img_src} alt="" />
                    </a>
                ))}
            </section>
        </div>
    )
}

export default Contact