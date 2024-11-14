import contactList from "../constants/contactList"
import CreateContact from "./CreateContact"

const Contact = () => {
    return (
        <div className='contact-div'>
            <h1>Contact Me</h1>
            <section className="contact-list-section">
                {contactList.map((social, index) => (
                    <CreateContact key={index} {...social} />
                ))}
            </section>
        </div>
    )
}

export default Contact