
const CreateContact = ({ img_src, social_site}) => {
    return (
        <div className='method-contact-div'>
            <img src={img_src} alt="" />
            <p>{social_site}</p>
        </div>
    )
}

export default CreateContact